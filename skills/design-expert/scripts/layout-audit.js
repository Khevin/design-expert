/*
 * design-expert layout audit. See composition.md § Measure, don't eyeball.
 *
 * One dependency-free function that runs inside a rendered page and reports where the
 * layout departs from its declared structure: spacing off the scale, edges that drift,
 * groups that read merged, headings attached to the wrong neighbour, near-miss type,
 * card-sized boxes nested in each other, and overflow. It reads computed styles and
 * boxes and changes nothing.
 *
 * In a browser tool with REPL-style evaluation, evaluate this file's source followed by:
 *   designExpertLayoutAudit({ grid: 'auto' })
 * In a headless browser, add this file as a script tag, then call the function in the page.
 *
 * Options, all optional:
 *   scale     allowed spacing values in px; omitted: the :root spacing tokens, else the default scale
 *   base      rhythm unit in px that line-heights should be multiples of (default 4)
 *   hairline  spacing at or under this many px is never reported (default 2)
 *   grid      'auto' (the widest CSS Grid with four or more columns), a CSS selector, or null
 *   root      CSS selector or element to audit (default document.body); narrow it when iterating
 *   viewport  true (default) keeps the type census to what is on screen
 *   budget    { sizes: 5, weights: 3 } per view
 *   max       samples kept per list (default 12)
 *   text      false leaves on-screen text out of the samples, for pages that show private data
 */
function designExpertLayoutAudit(options) {
  const o = Object.assign({
    scale: null, base: 4, hairline: 2, grid: 'auto', root: document.body,
    viewport: true, budget: { sizes: 5, weights: 3 }, max: 12, text: true,
  }, options || {});
  const DEFAULT_SCALE = [0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 160];
  const errors = [];
  const root = typeof o.root === 'string' ? document.querySelector(o.root) : o.root;
  if (!root) return { error: 'root not found: ' + o.root };
  const vw = document.documentElement.clientWidth;
  const vh = window.innerHeight;
  const num = v => { const n = parseFloat(v); return Number.isFinite(n) ? n : 0; };
  const half = n => Math.round(n * 2) / 2;
  const cap = list => list.slice(0, o.max);
  const attempt = (label, fn) => { try { return fn(); } catch (e) { errors.push(label + ': ' + e.message); return null; } };

  const describe = el => {
    const part = e => {
      let s = e.tagName.toLowerCase();
      if (e.id) s += '#' + e.id;
      else if (e.classList && e.classList.length) s += '.' + Array.from(e.classList).slice(0, 2).join('.');
      return s;
    };
    const chain = [];
    for (let e = el, i = 0; e && e !== document.documentElement && i < 3; e = e.parentElement, i++) chain.unshift(part(e));
    const text = o.text ? (el.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 32) : '';
    return chain.join(' > ') + (text ? ' "' + text + '"' : '');
  };

  // Collect rendered elements once.
  const SKIP = new Set(['SCRIPT', 'STYLE', 'NOSCRIPT', 'TEMPLATE', 'HEAD', 'META', 'LINK', 'BR', 'WBR']);
  const nodes = [];
  const info = new Map();
  const candidates = [root].concat(Array.from(root.querySelectorAll('*'))).slice(0, 8000);
  for (const el of candidates) {
    if (SKIP.has(el.tagName) || el.ownerSVGElement) continue;
    const cs = getComputedStyle(el);
    if (cs.display === 'none' || cs.display === 'contents' || cs.visibility === 'hidden') continue;
    const rect = el.getBoundingClientRect();
    if (rect.width <= 0 || rect.height <= 0) continue;
    const n = { el, cs, rect };
    nodes.push(n);
    info.set(el, n);
  }
  const hasText = el => Array.from(el.childNodes).some(c => c.nodeType === 3 && c.textContent.trim());
  const inFlow = n => n.cs.position !== 'absolute' && n.cs.position !== 'fixed';
  const flowChildren = el => Array.from(el.children).map(c => info.get(c)).filter(c => c && inFlow(c));
  const transparent = c => !c || c === 'transparent' || /rgba\([^)]*,\s*0\)$/.test(c);
  const bgCache = new Map();
  const effectiveBg = el => {
    if (!el) return 'rgb(255, 255, 255)';
    if (bgCache.has(el)) return bgCache.get(el);
    const c = getComputedStyle(el).backgroundColor;
    const bg = transparent(c) ? effectiveBg(el.parentElement) : c;
    bgCache.set(el, bg);
    return bg;
  };
  const borderSides = cs => ['Top', 'Right', 'Bottom', 'Left']
    .filter(s => num(cs['border' + s + 'Width']) >= 1 && cs['border' + s + 'Style'] !== 'none' && !transparent(cs['border' + s + 'Color'])).length;
  const boxedCache = new Map();
  const isBoxed = n => {
    if (boxedCache.has(n.el)) return boxedCache.get(n.el);
    const cs = n.cs;
    let boxed = borderSides(cs) >= 3 || (cs.boxShadow && cs.boxShadow !== 'none');
    if (!boxed && !transparent(cs.backgroundColor)) {
      boxed = n.el.parentElement ? cs.backgroundColor !== effectiveBg(n.el.parentElement) : false;
    }
    boxedCache.set(n.el, boxed);
    return boxed;
  };
  const CONTROL = /^(INPUT|SELECT|TEXTAREA|BUTTON|OPTION|IMG|VIDEO|CANVAS|svg|IFRAME)$/;
  const isSurface = n => isBoxed(n) && !CONTROL.test(n.el.tagName) && n.el.getAttribute('role') !== 'button'
    && n.rect.width >= 120 && n.rect.height >= 48;

  // The spacing scale: given, read from :root tokens, or the default.
  let scale = Array.isArray(o.scale) ? o.scale.slice() : null;
  let scaleSource = scale ? 'given' : 'default';
  if (!scale) {
    attempt('scale', () => {
      const names = new Set();
      const walk = rules => {
        for (const rule of Array.from(rules || [])) {
          if (rule.cssRules && !rule.selectorText) walk(rule.cssRules);
          if (rule.selectorText && /(^|,)\s*(:root|html)\s*(,|$)/.test(rule.selectorText)) {
            for (const name of Array.from(rule.style)) {
              if (/^--(s|sp|space|spacing|gap|gutter|pad|padding|inset)(-?\d|-|$)|(space|spacing|gap|gutter|margin|padding|inset)/i.test(name)) names.add(name);
            }
          }
        }
      };
      for (const sheet of Array.from(document.styleSheets)) { try { walk(sheet.cssRules); } catch (e) { /* cross-origin sheet */ } }
      const probe = document.createElement('div');
      probe.style.cssText = 'position:absolute;visibility:hidden;pointer-events:none;';
      document.body.appendChild(probe);
      const values = new Set();
      for (const name of names) {
        probe.style.paddingLeft = 'var(' + name + ')';
        const v = num(getComputedStyle(probe).paddingLeft);
        if (v > 0 && v < 400) values.add(half(v));
      }
      probe.remove();
      if (values.size >= 4) { scale = [0].concat(Array.from(values)).sort((a, b) => a - b); scaleSource = 'tokens'; }
    });
    if (!scale) scale = DEFAULT_SCALE.slice();
  }
  const onScale = v => Math.abs(v) <= o.hairline || scale.some(s => Math.abs(Math.abs(v) - s) <= 0.5);
  const derivedLimit = Math.max.apply(null, scale) * 1.5;

  // Spacing values off the scale.
  const off = new Map();
  let derived = 0;
  attempt('offScale', () => {
    for (const n of nodes) {
      const cs = n.cs;
      const values = [];
      for (const side of ['Top', 'Bottom']) values.push(['margin-' + side.toLowerCase(), num(cs['margin' + side])]);
      const ml = num(cs.marginLeft), mr = num(cs.marginRight);
      let centered = false;
      const p = n.el.parentElement && info.get(n.el.parentElement);
      if (p && ml > 0 && Math.abs(ml - mr) <= 1.5) {
        const left = n.rect.left - (p.rect.left + num(p.cs.borderLeftWidth) + num(p.cs.paddingLeft));
        const right = (p.rect.right - num(p.cs.borderRightWidth) - num(p.cs.paddingRight)) - n.rect.right;
        centered = Math.abs(left - right) <= 1.5;
      }
      if (!centered) { values.push(['margin-left', ml]); values.push(['margin-right', mr]); }
      for (const side of ['Top', 'Right', 'Bottom', 'Left']) values.push(['padding-' + side.toLowerCase(), num(cs['padding' + side])]);
      if (/flex|grid/.test(cs.display)) { values.push(['row-gap', num(cs.rowGap)]); values.push(['column-gap', num(cs.columnGap)]); }
      for (const [prop, raw] of values) {
        if (!raw) continue;
        const v = half(raw);
        if (Math.abs(v) > derivedLimit) { derived++; continue; }
        if (onScale(v)) continue;
        const key = String(v);
        const entry = off.get(key) || { value: v, onBase: Math.abs(v) % o.base === 0, count: 0, props: new Set(), samples: [] };
        entry.count++;
        entry.props.add(prop);
        if (entry.samples.length < 3) entry.samples.push(describe(n.el));
        off.set(key, entry);
      }
    }
  });
  const offScale = Array.from(off.values()).sort((a, b) => b.count - a.count)
    .map(e => ({ value: e.value, onBase: e.onBase, count: e.count, props: Array.from(e.props), samples: e.samples }));

  // Edges: near-miss clusters and, when a grid is found, boxes that miss its column lines.
  // Elements placed by data (inline left, width, height, transform: chart marks, bars) are not alignment.
  const DATA_PLACED = /(^|;)\s*(left|right|top|bottom|width|height|inset|transform|translate|flex-basis|grid-column|--[\w-]+)\s*:/i;
  const placedCache = new Map();
  const dataPlaced = el => {
    if (!el || el === root) return false;
    if (placedCache.has(el)) return placedCache.get(el);
    const own = el.getAttribute && DATA_PLACED.test(el.getAttribute('style') || '');
    const placed = own || dataPlaced(el.parentElement);
    placedCache.set(el, placed);
    return placed;
  };
  const blocks = [];
  attempt('edges', () => {
    for (const n of nodes) {
      if (n.rect.width < 8 || n.rect.height < 8 || n.cs.display === 'inline' || dataPlaced(n.el)) continue;
      const boxed = isBoxed(n) || CONTROL.test(n.el.tagName);
      const text = !boxed && hasText(n.el) && !/center|right|end/.test(n.cs.textAlign);
      if (!boxed && !text) continue;
      const left = boxed ? n.rect.left : n.rect.left + num(n.cs.borderLeftWidth) + num(n.cs.paddingLeft);
      blocks.push({ n, left: half(left), right: boxed ? half(n.rect.right) : null });
    }
  });
  const nearMiss = [];
  const clusterPass = (key, label) => {
    // Edges within 1px are one line (sub-pixel layout); lines 2 to 7px apart are drift.
    const sorted = blocks.filter(b => b[key] !== null).sort((a, b) => a[key] - b[key]);
    const lines = [];
    for (const b of sorted) {
      const last = lines[lines.length - 1];
      if (last && b[key] - last.max <= 1) { last.max = b[key]; last.items.push(b); }
      else lines.push({ min: b[key], max: b[key], items: [b] });
    }
    for (let i = 1; i < lines.length; i++) {
      const d = half(lines[i].min - lines[i - 1].max);
      if (d < 2 || d > 7) continue;
      // Drift is an element almost on an established line, so one side must be shared by two or more elements.
      if (lines[i - 1].items.length < 2 && lines[i].items.length < 2) continue;
      const a = lines[i - 1].items.slice(-200), b = lines[i].items.slice(0, 200);
      let pair = null;
      for (const y of b) { for (const x of a) {
        const gap = Math.max(0, Math.max(x.n.rect.top, y.n.rect.top) - Math.min(x.n.rect.bottom, y.n.rect.bottom));
        if (gap <= vh) { pair = [x, y]; break; }
      } if (pair) break; }
      if (!pair) continue;
      const others = b.filter(y => y !== pair[1]).slice(0, 1).map(y => describe(y.n.el));
      nearMiss.push({ side: label, lines: [lines[i - 1].max, lines[i].min], apart: d,
        shared: Math.max(lines[i - 1].items.length, lines[i].items.length),
        a: [describe(pair[0].n.el)], b: [describe(pair[1].n.el)].concat(others) });
    }
  };
  clusterPass('left', 'left');
  clusterPass('right', 'right');
  nearMiss.sort((a, b) => b.shared - a.shared);

  let grid = null;
  const offColumn = [];
  attempt('grid', () => {
    if (!o.grid) return;
    let g = null;
    if (o.grid === 'auto') {
      for (const n of nodes) {
        if (!/grid/.test(n.cs.display)) continue;
        const tracks = n.cs.gridTemplateColumns.replace(/\[[^\]]*\]/g, ' ').trim().split(/\s+/).map(num).filter(v => v > 0);
        if (tracks.length >= 4 && (!g || n.rect.width > g.n.rect.width)) g = { n, tracks };
      }
    } else {
      const el = document.querySelector(o.grid);
      const n = el && info.get(el);
      if (n) g = { n, tracks: n.cs.gridTemplateColumns.replace(/\[[^\]]*\]/g, ' ').trim().split(/\s+/).map(num).filter(v => v > 0) };
    }
    if (!g || !g.tracks.length) return;
    const gap = num(g.n.cs.columnGap);
    let x = g.n.rect.left + num(g.n.cs.borderLeftWidth) + num(g.n.cs.paddingLeft);
    const starts = [], ends = [];
    for (const t of g.tracks) { starts.push(half(x)); ends.push(half(x + t)); x += t + gap; }
    grid = { element: describe(g.n.el), columns: g.tracks.length, gap, starts, ends };
    const minTrack = Math.min.apply(null, g.tracks);
    const nearest = (v, lines) => lines.reduce((best, l) => Math.abs(l - v) < Math.abs(best - v) ? l : best, lines[0]);
    const inside = nodes.filter(n => n.el !== g.n.el && g.n.el.contains(n.el));
    for (const n of inside) {
      const direct = n.el.parentElement === g.n.el;
      if (!direct && !(isSurface(n) && n.rect.width >= 2 * minTrack)) continue;
      const lefts = starts.slice(), rights = ends.slice();
      if (!direct) {
        let outer = true;
        let item = null;
        for (let e = n.el.parentElement; e && e !== g.n.el; e = e.parentElement) {
          const a = info.get(e);
          if (a && isSurface(a)) { outer = false; break; }
          if (a && e.parentElement === g.n.el) item = a;
        }
        if (!outer) continue;
        // A box on its grid item's inset is aligned: it sits on the container's content edge.
        if (item) {
          lefts.push(half(item.rect.left + num(item.cs.borderLeftWidth) + num(item.cs.paddingLeft)));
          rights.push(half(item.rect.right - num(item.cs.borderRightWidth) - num(item.cs.paddingRight)));
        }
      }
      const l = nearest(n.rect.left, lefts), r = nearest(n.rect.right, rights);
      const dl = half(n.rect.left - l), dr = half(n.rect.right - r);
      if (Math.abs(dl) > 1 || Math.abs(dr) > 1) offColumn.push({ element: describe(n.el), leftMiss: dl, rightMiss: dr });
    }
  });

  // Proximity: siblings closer together than their own parts; padding smaller than the gaps it holds.
  const proximity = [];
  const arrange = kids => {
    if (kids.length < 2) return null;
    const byTop = kids.slice().sort((a, b) => a.rect.top - b.rect.top);
    if (byTop.every((k, i) => i === 0 || k.rect.top >= byTop[i - 1].rect.bottom - 1)) {
      return { axis: 'vertical', gaps: byTop.slice(1).map((k, i) => k.rect.top - byTop[i].rect.bottom), order: byTop };
    }
    const byLeft = kids.slice().sort((a, b) => a.rect.left - b.rect.left);
    if (byLeft.every((k, i) => i === 0 || k.rect.left >= byLeft[i - 1].rect.right - 1)) {
      return { axis: 'horizontal', gaps: byLeft.slice(1).map((k, i) => k.rect.left - byLeft[i].rect.right), order: byLeft };
    }
    return null;
  };
  const isHeading = n => /^H[1-6]$/.test(n.el.tagName) || n.el.getAttribute('role') === 'heading';
  const innerMax = (k, axis) => {
    const inner = arrange(flowChildren(k.el));
    return inner && inner.axis === axis ? Math.max.apply(null, inner.gaps) : 0;
  };
  attempt('proximity', () => {
    for (const n of nodes) {
      const a = arrange(flowChildren(n.el));
      if (a && !a.order.some(isBoxed)) {
        // Two neighbouring siblings closer to each other than their own parts read as one group.
        // A heading and what follows are meant to sit close; the headings check covers them.
        for (let i = 1; i < a.order.length; i++) {
          const x = a.order[i - 1], y = a.order[i], gap = a.gaps[i - 1];
          if (gap < 0 || isHeading(x) || isHeading(y)) continue;
          const inside = Math.max(innerMax(x, a.axis), innerMax(y, a.axis));
          if (inside > 0 && gap + 1 < inside) {
            proximity.push({ kind: 'merged', container: describe(n.el), axis: a.axis, gapBetween: half(gap), gapInside: half(inside), between: [describe(x.el), describe(y.el)] });
            break;
          }
        }
      }
      if (isSurface(n)) {
        // Padding smaller than the widest gap it holds reads loose. Look through single-child wrappers.
        let kids = flowChildren(n.el);
        while (kids.length === 1 && !isBoxed(kids[0])) kids = flowChildren(kids[0].el);
        const s = arrange(kids);
        if (!s) continue;
        const pads = s.axis === 'vertical' ? [num(n.cs.paddingTop), num(n.cs.paddingBottom)] : [num(n.cs.paddingLeft), num(n.cs.paddingRight)];
        const pad = Math.min.apply(null, pads);
        const widest = Math.max.apply(null, s.gaps);
        if (pad > 0 && pad + 1 < widest) proximity.push({ kind: 'loose', container: describe(n.el), axis: s.axis, padding: half(pad), gapBetween: half(widest) });
      }
    }
  });

  // Headings: less space above than below means the heading sits with the wrong neighbour.
  const headings = [];
  attempt('headings', () => {
    for (const n of nodes) {
      if (!/^H[1-6]$/.test(n.el.tagName) && n.el.getAttribute('role') !== 'heading') continue;
      let prev = n.el.previousElementSibling, next = n.el.nextElementSibling;
      while (prev && !(info.get(prev) && inFlow(info.get(prev)))) prev = prev.previousElementSibling;
      while (next && !(info.get(next) && inFlow(info.get(next)))) next = next.nextElementSibling;
      if (!prev || !next) continue;
      // Space handed out by the parent (a footer pinned by space-between, centred content) is not a designed gap.
      const parent = info.get(n.el.parentElement);
      if (parent) {
        const pc = parent.cs;
        if (/flex/.test(pc.display) && /column/.test(pc.flexDirection) && /space|end|center/.test(pc.justifyContent)) continue;
        if (/grid/.test(pc.display) && /space|end|center/.test(pc.alignContent)) continue;
      }
      const p = info.get(prev).rect, x = info.get(next).rect;
      if (p.bottom > n.rect.top + 1 || x.top < n.rect.bottom - 1) continue;
      const above = n.rect.top - p.bottom, below = x.top - n.rect.bottom;
      if (above <= below) headings.push({ heading: describe(n.el), above: half(above), below: half(below) });
    }
  });

  // Type census over text in view.
  const type = { sizes: [], weights: [], nearMiss: [], overBudget: [], lineHeightsOffBase: [], lineHeightNormal: 0, grayNearMiss: [] };
  attempt('type', () => {
    const sizes = new Map(), weights = new Map(), lhs = new Map(), colors = new Map();
    for (const n of nodes) {
      if (!hasText(n.el)) continue;
      if (o.viewport && (n.rect.bottom < 0 || n.rect.top > vh || n.rect.right < 0 || n.rect.left > vw)) continue;
      const size = half(num(n.cs.fontSize));
      const weight = n.cs.fontWeight;
      sizes.set(size, (sizes.get(size) || 0) + 1);
      weights.set(weight, (weights.get(weight) || 0) + 1);
      if (n.cs.lineHeight === 'normal') type.lineHeightNormal++;
      else {
        const lh = half(num(n.cs.lineHeight));
        const rem = lh % o.base;
        if (rem > 0.5 && o.base - rem > 0.5) {
          const e = lhs.get(lh) || { lineHeight: lh, count: 0, sample: describe(n.el) };
          e.count++;
          lhs.set(lh, e);
        }
      }
      colors.set(n.cs.color, (colors.get(n.cs.color) || 0) + 1);
    }
    type.sizes = Array.from(sizes.entries()).sort((a, b) => a[0] - b[0]).map(([px, count]) => ({ px, count }));
    type.weights = Array.from(weights.entries()).sort((a, b) => a[0] - b[0]).map(([weight, count]) => ({ weight, count }));
    for (let i = 1; i < type.sizes.length; i++) {
      const a = type.sizes[i - 1].px, b = type.sizes[i].px;
      if (a > 0 && b / a < 1.1) type.nearMiss.push([a, b]);
    }
    if (type.sizes.length > o.budget.sizes) type.overBudget.push('sizes ' + type.sizes.length + ' > ' + o.budget.sizes);
    if (type.weights.length > o.budget.weights) type.overBudget.push('weights ' + type.weights.length + ' > ' + o.budget.weights);
    type.lineHeightsOffBase = Array.from(lhs.values()).sort((a, b) => b.count - a.count);
    const grays = [];
    for (const c of colors.keys()) {
      const m = c.match(/rgba?\(([\d.]+),\s*([\d.]+),\s*([\d.]+)/);
      if (!m) continue;
      const [r, g, b] = [m[1], m[2], m[3]].map(Number);
      if (Math.max(r, g, b) - Math.min(r, g, b) > 24) continue;
      const lin = v => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); };
      grays.push({ color: c, l: 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b) });
    }
    grays.sort((a, b) => a.l - b.l);
    for (let i = 1; i < grays.length; i++) {
      if (grays[i].l - grays[i - 1].l < 0.02) type.grayNearMiss.push([grays[i - 1].color, grays[i].color]);
    }
  });

  // Nesting: card-sized boxes inside card-sized boxes. A fixed or open-dialog layer starts again.
  const nested = [];
  let maxDepth = 0;
  attempt('nesting', () => {
    for (const n of nodes) {
      if (!isSurface(n)) continue;
      let depth = 1;
      const chain = [describe(n.el)];
      for (let e = n.el.parentElement; e && e !== document.body; e = e.parentElement) {
        const a = info.get(e);
        if (!a) continue;
        if (a.cs.position === 'fixed' || e.tagName === 'DIALOG') break;
        if (isSurface(a)) { depth++; if (chain.length < 3) chain.unshift(describe(e)); }
      }
      maxDepth = Math.max(maxDepth, depth);
      if (depth >= 2) nested.push({ depth, chain });
    }
  });
  nested.sort((a, b) => b.depth - a.depth);

  // Overflow.
  const overflow = { page: 0, elements: [] };
  attempt('overflow', () => {
    overflow.page = Math.max(0, document.documentElement.scrollWidth - vw);
    for (const n of nodes) {
      if (n.rect.right <= vw + 1) continue;
      let clipped = n.cs.position === 'fixed';
      for (let e = n.el.parentElement; !clipped && e && e !== document.documentElement; e = e.parentElement) {
        const a = info.get(e) || { cs: getComputedStyle(e) };
        if (a.cs.position === 'fixed' || /(auto|scroll|hidden|clip)/.test(a.cs.overflowX)) clipped = true;
      }
      if (!clipped) overflow.elements.push({ element: describe(n.el), right: half(n.rect.right), viewport: vw });
    }
  });

  return {
    url: location.href,
    viewport: { width: vw, height: vh },
    scale: { source: scaleSource, values: scale },
    grid,
    counts: {
      elements: nodes.length,
      offScale: offScale.reduce((s, e) => s + e.count, 0),
      edgeNearMiss: nearMiss.length,
      offColumn: offColumn.length,
      proximity: proximity.length,
      headings: headings.length,
      typeNearMiss: type.nearMiss.length,
      typeOverBudget: type.overBudget.length,
      lineHeightsOffBase: type.lineHeightsOffBase.reduce((s, e) => s + e.count, 0),
      grayNearMiss: type.grayNearMiss.length,
      nestedSurfaces: nested.length,
      maxSurfaceDepth: maxDepth,
      pageOverflow: overflow.page,
      derivedMarginsSkipped: derived,
    },
    offScale: cap(offScale),
    edges: { nearMiss: cap(nearMiss), offColumn: cap(offColumn) },
    proximity: cap(proximity),
    headings: cap(headings),
    type: Object.assign({}, type, { lineHeightsOffBase: cap(type.lineHeightsOffBase), grayNearMiss: cap(type.grayNearMiss) }),
    nesting: { max: maxDepth, nested: cap(nested) },
    overflow: { page: overflow.page, elements: cap(overflow.elements) },
    errors,
  };
}
