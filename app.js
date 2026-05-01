// ── Themes ────────────────────────────────────────────────────────────────────
const THEMES = {
  voyager: { url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
             attr: '© <a href="https://openstreetmap.org/copyright">OSM</a> contributors, © <a href="https://carto.com/">CARTO</a>', sub: 'abcd' },
  light:   { url: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
             attr: '© <a href="https://openstreetmap.org/copyright">OSM</a> contributors, © <a href="https://carto.com/">CARTO</a>', sub: 'abcd' },
  dark:    { url: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
             attr: '© <a href="https://openstreetmap.org/copyright">OSM</a> contributors, © <a href="https://carto.com/">CARTO</a>', sub: 'abcd' },
  osm:     { url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
             attr: '© <a href="https://openstreetmap.org/copyright">OSM</a> contributors', sub: 'abc' },
};

// ── Route type metadata ───────────────────────────────────────────────────────
const ROUTE_META = {
  car:     { color: '#e67e22', dashArray: null,   weight: 4, routing: 'osrm-driving' },
  walk:    { color: '#27ae60', dashArray: '5 5',  weight: 3, routing: 'osrm-foot'    },
  bicycle: { color: '#f39c12', dashArray: '5 5',  weight: 3, routing: 'osrm-cycling' },
  flight:  { color: '#3498db', dashArray: '10 6', weight: 2, routing: 'greatcircle'  },
  ferry:   { color: '#16a085', dashArray: '5 10', weight: 3, routing: 'straight'     },
  subway:  { color: '#9b59b6', dashArray: null,   weight: 4, routing: 'straight'     },
  train:   { color: '#c0392b', dashArray: null,   weight: 4, routing: 'straight'     },
};
const TYPE_EMOJI = { car:'🚗', walk:'🚶', bicycle:'🚲', flight:'✈️', ferry:'⛴️', subway:'🚇', train:'🚆' };

// ── Color palettes ────────────────────────────────────────────────────────────
const PALETTES = {
  'Type default': null,
  Neon:   ['#ff006e','#fb5607','#ffbe0b','#06d6a0','#3a86ff','#8338ec','#f72585'],
  Pastel: ['#ffadad','#ffd6a5','#fdffb6','#caffbf','#9bf6ff','#a0c4ff','#bdb2ff'],
  Earth:  ['#7c4a1e','#c07941','#d4a030','#557a55','#4e7c8c','#6d6a75','#8b5e52'],
  Ocean:  ['#03045e','#0077b6','#0096c7','#00b4d8','#48cae4','#90e0ef','#ade8f4'],
  Sunset: ['#2b2d42','#8d99ae','#ef233c','#f77f00','#fcbf49','#eae2b7'],
  Forest: ['#132a13','#31572c','#4f772d','#90a955','#ecf39e','#a7c957'],
  Desert: ['#5f0f40','#9a031e','#fb8b24','#e36414','#0f4c5c','#f2cc8f'],
  Candy:  ['#ff70a6','#ff9770','#ffd670','#e9ff70','#70d6ff','#c77dff'],
  Jewel:  ['#0b132b','#1c2541','#3a506b','#5bc0be','#ffd166','#ef476f'],
  Metro:  ['#003f5c','#58508d','#bc5090','#ff6361','#ffa600','#2f4b7c'],
  ColorBrewer: ['#1b9e77','#d95f02','#7570b3','#e7298a','#66a61e','#e6ab02','#a6761d'],
  Tableau: ['#4e79a7','#f28e2b','#e15759','#76b7b2','#59a14f','#edc948','#b07aa1'],
  Mono:   ['#f0f0f0','#c0c0c0','#909090','#606060','#404040','#202020','#888888'],
};
const NEUTRAL_COLOR = '#888888';

// ── Font options ──────────────────────────────────────────────────────────────
const FONTS = [
  { name: 'Noto Sans KR',    stack: '"Noto Sans KR","Apple SD Gothic Neo","Malgun Gothic",var(--emoji-font-family),system-ui,sans-serif', gf: 'Noto+Sans+KR:wght@400;500;700;800' },
  { name: 'Adobe Caslon',    stack: 'adobe-caslon-pro,"Noto Serif KR","Noto Serif SC","Noto Serif TC",var(--emoji-font-family),Georgia,"Times New Roman",serif', gf: null },
  { name: 'Noto Serif CJK',  stack: '"Noto Serif KR","Noto Serif SC","Noto Serif TC",var(--emoji-font-family),serif',                   gf: 'Noto+Serif+KR:wght@400;500;600;700&family=Noto+Serif+SC:wght@400;500;600;700&family=Noto+Serif+TC:wght@400;500;600;700' },
  { name: 'Noto Serif KR',   stack: '"Noto Serif KR",var(--emoji-font-family),serif',                                                     gf: 'Noto+Serif+KR:wght@400;500;600;700' },
  { name: 'Noto Serif SC',   stack: '"Noto Serif SC",var(--emoji-font-family),serif',                                                     gf: 'Noto+Serif+SC:wght@400;500;600;700' },
  { name: 'Noto Serif TC',   stack: '"Noto Serif TC",var(--emoji-font-family),serif',                                                     gf: 'Noto+Serif+TC:wght@400;500;600;700' },
  { name: 'JetBrains Mono',  stack: '"JetBrains Mono","Noto Sans KR",var(--emoji-font-family),"Fira Code",Consolas,monospace',             gf: 'JetBrains+Mono:wght@400;600;700;800' },
  { name: 'System Sans',     stack: 'system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans KR",var(--emoji-font-family),sans-serif', gf: null },
  { name: 'Serif',           stack: 'Georgia,"Times New Roman","Noto Serif KR","Noto Serif SC","Noto Serif TC",var(--emoji-font-family),serif', gf: null },
  { name: 'Monospace',       stack: 'ui-monospace,SFMono-Regular,Menlo,Consolas,"Noto Sans KR",var(--emoji-font-family),monospace',        gf: null },
  { name: 'Inter',           stack: '"Inter","Noto Sans KR",var(--emoji-font-family),system-ui,sans-serif',                                gf: 'Inter:wght@400;600;700' },
  { name: 'Roboto',          stack: '"Roboto","Noto Sans KR",var(--emoji-font-family),system-ui,sans-serif',                               gf: 'Roboto:wght@400;700' },
  { name: 'Nunito',          stack: '"Nunito","Noto Sans KR",var(--emoji-font-family),system-ui,sans-serif',                               gf: 'Nunito:wght@400;600;700' },
  { name: 'Merriweather',    stack: '"Merriweather","Noto Serif KR","Noto Serif SC","Noto Serif TC",var(--emoji-font-family),Georgia,"Times New Roman",serif', gf: 'Merriweather:wght@400;700' },
  { name: 'Playfair',        stack: '"Playfair Display","Noto Serif KR","Noto Serif SC","Noto Serif TC",var(--emoji-font-family),Georgia,"Times New Roman",serif', gf: 'Playfair+Display:wght@400;700' },
];

// ── Location shapes ───────────────────────────────────────────────────────────
const LOC_SHAPES = {
  circle:   { css: 'border-radius:50%;',                                                                                                     label: '●' },
  square:   { css: 'border-radius:3px;',                                                                                                     label: '■' },
  diamond:  { css: 'border-radius:2px;transform:rotate(45deg);',                                                                             label: '◆' },
  triangle: { css: 'clip-path:polygon(50% 0%,100% 100%,0% 100%);border-radius:0;',                                                          label: '▲' },
  star:     { css: 'clip-path:polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%);border-radius:0;',   label: '★' },
};

// ── State ─────────────────────────────────────────────────────────────────────
let locations    = [];
let routes       = [];
let locMarkers   = [];
let routeLayers  = [];
let nextRouteType    = 'car';
let expandedIdx      = null;  // which route's style panel is open
let expandedPalette  = null;  // which palette accordion is open in style panel
let expandedLocIdx   = null;  // which location's edit panel is open
let paletteApplyMode = 'same'; // 'same' | 'sequential' | 'bytype'
let markerPaletteApplyMode = 'all'; // 'all' | 'sequential'
const paletteOrder = {};
const panelScrollPositions = {};
const URL_PARAMS = new URLSearchParams(window.location.search);
const IS_EMBED = URL_PARAMS.get('embed') === '1' || URL_PARAMS.get('embed') === 'true';

// ── Map ───────────────────────────────────────────────────────────────────────
const map = L.map('map').setView([20, 0], 2);
let tileLayer = null;
function setMapTheme(key) {
  const t = THEMES[key] || THEMES.voyager;
  if (tileLayer) map.removeLayer(tileLayer);
  tileLayer = L.tileLayer(t.url, { attribution: t.attr, subdomains: t.sub, maxZoom: t.maxZoom ?? 19 }).addTo(map);
}

// ── UI Theme ──────────────────────────────────────────────────────────────────
function applyUiTheme(theme, { persist = true } = {}) {
  document.documentElement.setAttribute('data-theme', theme);
  document.getElementById('btn-ui-theme').textContent = theme === 'dark' ? '🌙' : '☀️';
  if (persist) localStorage.setItem('trip-mapper-ui-theme', theme);
}
document.getElementById('btn-ui-theme').addEventListener('click', () => {
  const cur = document.documentElement.getAttribute('data-theme');
  applyUiTheme(cur === 'dark' ? 'light' : 'dark');
});

// ── Toast ─────────────────────────────────────────────────────────────────────
let toastTimer;
function toast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg; el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2600);
}

// ── Geocoding ─────────────────────────────────────────────────────────────────
const NOMINATIM_LANG = navigator.language || 'en';
async function geocodeSearch(query) {
  const res  = await fetch(`https://nominatim.openstreetmap.org/search?format=json&limit=6&q=${encodeURIComponent(query)}`, { headers: { 'Accept-Language': NOMINATIM_LANG } });
  return (await res.json()).map(r => ({
    name: r.name || r.display_name.split(',')[0].trim(),
    displayName: r.display_name,
    lat: parseFloat(r.lat), lng: parseFloat(r.lon),
  }));
}
async function reverseGeocode(lat, lng) {
  try {
    const res  = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`, { headers: { 'Accept-Language': NOMINATIM_LANG } });
    const data = await res.json();
    return (data.name || data.display_name || '').split(',')[0].trim() || 'My Location';
  } catch { return 'My Location'; }
}

// ── Geometry ──────────────────────────────────────────────────────────────────
function greatCirclePoints(lat1, lng1, lat2, lng2, n = 80) {
  const toR = d => d * Math.PI / 180, toD = r => r * 180 / Math.PI;
  const p1 = toR(lat1), l1 = toR(lng1), p2 = toR(lat2), l2 = toR(lng2);
  const d = 2 * Math.asin(Math.sqrt(Math.sin((p2-p1)/2)**2 + Math.cos(p1)*Math.cos(p2)*Math.sin((l2-l1)/2)**2));
  if (d === 0) return [[lat1, lng1]];
  const pts = [];
  for (let i = 0; i <= n; i++) {
    const f = i/n, A = Math.sin((1-f)*d)/Math.sin(d), B = Math.sin(f*d)/Math.sin(d);
    const x = A*Math.cos(p1)*Math.cos(l1)+B*Math.cos(p2)*Math.cos(l2);
    const y = A*Math.cos(p1)*Math.sin(l1)+B*Math.cos(p2)*Math.sin(l2);
    const z = A*Math.sin(p1)+B*Math.sin(p2);
    pts.push([toD(Math.atan2(z, Math.sqrt(x*x+y*y))), toD(Math.atan2(y, x))]);
  }
  return pts;
}

function curvedPoints(from, to, n = 64) {
  const crs = map.options.crs || L.CRS.EPSG3857;
  const zoom = 6;
  const p1 = crs.latLngToPoint(L.latLng(from.lat, from.lng), zoom);
  const p2 = crs.latLngToPoint(L.latLng(to.lat, to.lng), zoom);
  const dx = p2.x - p1.x, dy = p2.y - p1.y;
  const dist = Math.hypot(dx, dy);
  if (dist === 0) return [[from.lat, from.lng]];
  const bend = Math.min(Math.max(dist * 0.12, 18), 90);
  const normal = L.point(-dy / dist, dx / dist);
  const c1 = L.point(
    p1.x + dx * 0.32 + normal.x * bend,
    p1.y + dy * 0.32 + normal.y * bend
  );
  const c2 = L.point(
    p1.x + dx * 0.68 + normal.x * bend,
    p1.y + dy * 0.68 + normal.y * bend
  );
  const pts = [];
  for (let i = 0; i <= n; i++) {
    const t = i / n;
    const mt = 1 - t;
    const a = mt * mt * mt;
    const b = 3 * mt * mt * t;
    const c = 3 * mt * t * t;
    const d = t * t * t;
    const p = L.point(
      a * p1.x + b * c1.x + c * c2.x + d * p2.x,
      a * p1.y + b * c1.y + c * c2.y + d * p2.y
    );
    const ll = crs.pointToLatLng(p, zoom);
    pts.push([ll.lat, ll.lng]);
  }
  return pts;
}

async function fetchOsrmPoints(profile, from, to) {
  const res  = await fetch(`https://router.project-osrm.org/route/v1/${profile}/${from.lng},${from.lat};${to.lng},${to.lat}?overview=full&geometries=geojson`);
  const data = await res.json();
  if (data.code !== 'Ok') throw new Error(data.message);
  return data.routes[0].geometry.coordinates.map(([lng, lat]) => [lat, lng]);
}
async function resolvePoints(route) {
  const from = locations[route.fromIdx], to = locations[route.toIdx];
  if (!from || !to) return [];
  if (route.shape === 'curve') return curvedPoints(from, to);
  const { routing } = ROUTE_META[route.type];
  if (routing === 'greatcircle') return greatCirclePoints(from.lat, from.lng, to.lat, to.lng);
  if (routing.startsWith('osrm-')) {
    try { return await fetchOsrmPoints(routing.replace('osrm-',''), from, to); }
    catch { toast('Routing unavailable — drawing straight line.'); }
  }
  return [[from.lat, from.lng], [to.lat, to.lng]];
}

// ── Polyline options ──────────────────────────────────────────────────────────
function polylineOpts(route) {
  const meta     = ROUTE_META[route.type];
  const color    = route.color ?? meta.color;
  const weight   = route.weight ?? meta.weight;
  const dashArray =
    route.dash === 'solid'  ? null  :
    route.dash === 'dashed' ? '10 7' :
    route.dash === 'dotted' ? '2 8'  :
    meta.dashArray;
  return { color, dashArray, weight, opacity: 0.88 };
}

// ── Draw / clear routes ───────────────────────────────────────────────────────
async function drawRoute(idx) {
  const route = routes[idx]; if (!route) return;
  const from = locations[route.fromIdx], to = locations[route.toIdx];
  if (!from || !to) return;
  const points = await resolvePoints(route);
  if (!points.length) return;
  const layer = L.polyline(points, polylineOpts(route)).addTo(map);
  layer.bindPopup(`<b>${TYPE_EMOJI[route.type]} ${route.type}</b><br/>${from.name} → ${to.name}`);
  while (routeLayers.length <= idx) routeLayers.push(null);
  if (routeLayers[idx]) map.removeLayer(routeLayers[idx]);
  routeLayers[idx] = layer;
}
function clearRouteLayer(idx) {
  if (routeLayers[idx]) { map.removeLayer(routeLayers[idx]); routeLayers[idx] = null; }
}

// ── Location data normalizer ──────────────────────────────────────────────────
function normalizeLoc(l) {
  return {
    name: l.name, lat: l.lat, lng: l.lng,
    description: l.description || '', date: l.date || '',
    shape: l.shape || 'circle', markerColor: l.markerColor || null,
    markerSize: l.markerSize ?? 18,
    markerShowNumber: l.markerShowNumber ?? true,
    markerNumberColor: l.markerNumberColor || '#18181b',
    labelMode:        l.labelMode        || 'always',
    labelPos:         l.labelPos         || 'right',
    labelRound:       l.labelRound       ?? 4,
    labelSize:        l.labelSize        ?? 11,
    labelNumberSize:  l.labelNumberSize  ?? 85,
    labelTextAlign:   l.labelTextAlign   || 'center',
    labelTextColor:   l.labelTextColor   || '#18181b',
    labelNumberColor: l.labelNumberColor || l.labelTextColor || '#18181b',
    labelBg:          l.labelBg          ?? '#ffffff',
    labelBorderColor: l.labelBorderColor ?? null,
    labelArrow:       l.labelArrow       ?? false,
    labelOffsetX:     l.labelOffsetX     ?? 0,
    labelOffsetY:     l.labelOffsetY     ?? 0,
    labelWidth:       l.labelWidth       ?? null,
    labelShowNumber:  l.labelShowNumber  ?? false,
    labelShowName:    l.labelShowName    ?? true,
    labelShowDate:    l.labelShowDate    ?? false,
    labelShowNotes:   l.labelShowNotes   ?? false,
  };
}

const LABEL_STYLE_KEYS = [
  'labelMode','labelPos','labelRound','labelSize','labelNumberSize','labelTextColor','labelNumberColor',
  'labelTextAlign','labelBg','labelBorderColor','labelArrow','labelOffsetX','labelOffsetY','labelWidth',
  'labelShowNumber','labelShowName','labelShowDate','labelShowNotes',
];

function locWithInheritedLabelStyle(loc, previousLoc) {
  const next = normalizeLoc(loc);
  if (!previousLoc) return next;
  LABEL_STYLE_KEYS.forEach(key => { next[key] = previousLoc[key]; });
  return next;
}

// ── Location markers ──────────────────────────────────────────────────────────
function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, ch => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[ch]));
}

function labelTooltipHtml(loc) {
  const parts = [];
  if ((loc.labelShowNumber ?? false) && loc.visitNumber != null) {
    const color = escapeHtml(loc.labelNumberColor || loc.labelTextColor || '#18181b');
    const size = Number.isFinite(loc.labelNumberSize) ? loc.labelNumberSize : 85;
    parts.push(`<div class="loc-label-number" style="color:${color};font-size:${size}%;"><span>${escapeHtml(loc.visitNumber)}</span></div>`);
  }
  if (loc.labelShowName ?? true) parts.push(`<div class="loc-label-name">${escapeHtml(loc.name)}</div>`);
  if ((loc.labelShowDate ?? false) && loc.date) parts.push(`<div class="loc-label-date">${escapeHtml(loc.date)}</div>`);
  if ((loc.labelShowNotes ?? false) && loc.description) {
    parts.push(`<div class="loc-label-notes">${escapeHtml(loc.description).replace(/\n/g, '<br>')}</div>`);
  }
  const content = parts.length ? parts.join('') : `<div class="loc-label-name">${escapeHtml(loc.name)}</div>`;
  return `<div class="loc-label-content">${content}</div>`;
}

function markerIconHtml(loc, { hidden = false } = {}) {
  const color = loc.markerColor || '#89b4fa';
  const shapeKey = loc.shape || 'circle';
  const shape = LOC_SHAPES[shapeKey];
  const number = loc.markerShowNumber === false ? '' : (loc.visitNumber ?? '');
  const numberColor = loc.markerNumberColor || '#18181b';
  const size = loc.markerSize ?? 18;
  const fontSize = Math.max(8, Math.round(size * 0.5));
  const hiddenStyle = hidden ? 'opacity:0;pointer-events:none;' : '';
  const numberStyle = shapeKey === 'diamond' ? ' style="transform:rotate(-45deg);"' : '';
  return `<div class="map-marker-shape" style="width:${size}px;height:${size}px;font-size:${fontSize}px;background:${color};color:${numberColor};${hiddenStyle}${shape.css}"><span${numberStyle}>${number}</span></div>`;
}

function locKey(loc) {
  return `${loc.lat.toFixed(6)},${loc.lng.toFixed(6)}`;
}

async function updateLocationPosition(locIdx, lat, lng) {
  if (!Number.isFinite(lat) || !Number.isFinite(lng)) return;
  locations[locIdx].lat = lat;
  locations[locIdx].lng = lng;
  await rebuildAll();
  save();
}

async function updateLocationFromPlace(locIdx, place) {
  if (!locations[locIdx] || !place) return;
  locations[locIdx].name = place.name || locations[locIdx].name;
  await updateLocationPosition(locIdx, place.lat, place.lng);
  toast(`Updated stop ${locIdx + 1}`);
}

function buildTooltipStyles() {
  let css = '';
  locations.forEach((loc, i) => {
    const mode = loc.labelMode || 'always';
    if (mode === 'hidden') return;
    const bg     = loc.labelBg          ?? '#ffffff';
    const text   = loc.labelTextColor   || '#18181b';
    const border = loc.labelBorderColor || loc.markerColor || '#89b4fa';
    const transparentChrome = bg === 'transparent' || border === 'transparent';
    const align  = loc.labelTextAlign   || 'center';
    const round  = loc.labelRound       ?? 4;
    const size   = loc.labelSize        ?? 11;
    const arrow  = loc.labelArrow       ?? false;
    const drag   = !IS_EMBED && mode === 'always';
    css += `.loc-tt-${i}{`
         + `background:${bg}!important;color:${text}!important;`
         + `border-color:${border}!important;border-radius:${round}px!important;`
         + `font-size:${size}px!important;`
         + `text-align:${align}!important;`
         + (transparentChrome ? 'box-shadow:none!important;text-shadow:none!important;' : '')
         + (drag ? 'pointer-events:auto!important;cursor:grab;' : 'pointer-events:none!important;')
         + `}\n`;
    if (!arrow || border === 'transparent') {
      css += `.loc-tt-${i}::before{display:none!important;}\n`;
    } else {
      css += `.leaflet-tooltip-right.loc-tt-${i}::before{border-right-color:${border}!important;}\n`;
      css += `.leaflet-tooltip-left.loc-tt-${i}::before{border-left-color:${border}!important;}\n`;
      css += `.leaflet-tooltip-top.loc-tt-${i}::before{border-top-color:${border}!important;}\n`;
      css += `.leaflet-tooltip-bottom.loc-tt-${i}::before{border-bottom-color:${border}!important;}\n`;
    }
  });
  let el = document.getElementById('loc-tt-styles');
  if (!el) { el = document.createElement('style'); el.id = 'loc-tt-styles'; document.head.appendChild(el); }
  el.textContent = css;
  applyAllTooltipLayoutStyles();
}

function applyTooltipLayoutStyle(tt, loc) {
  if (!tt || !loc) return;
  const width = loc.labelWidth ?? null;
  if (width) tt.style.setProperty('width', `${width}px`, 'important');
  else tt.style.removeProperty('width');
}

function setTooltipOffset(marker, loc) {
  const tooltip = marker?.getTooltip?.();
  if (!tooltip) return;
  tooltip.options.offset = L.point(loc.labelOffsetX ?? 0, loc.labelOffsetY ?? 0);
  tooltip.update();
}

function updateTooltipLayout(marker, loc) {
  const tooltip = marker?.getTooltip?.();
  if (!tooltip || !loc) return;
  tooltip.options.offset = L.point(loc.labelOffsetX ?? 0, loc.labelOffsetY ?? 0);
  const el = tooltip?.getElement?.();
  applyTooltipLayoutStyle(el, loc);
  tooltip.update();
}

function applyAllTooltipLayoutStyles() {
  locMarkers.forEach((entry, i) => updateTooltipLayout(entry?.marker, locations[i]));
}

function getLabelScreenRect(locIdx) {
  return locMarkers[locIdx]?.marker?.getTooltip?.()?.getElement?.()?.getBoundingClientRect?.() || null;
}

function preserveLabelScreenPosition(locIdx, updateFn) {
  const before = getLabelScreenRect(locIdx);
  updateFn();
  const after = getLabelScreenRect(locIdx);
  const loc = locations[locIdx];
  if (!before || !after || !loc || (loc.labelMode || 'always') !== 'always') return;
  loc.labelOffsetX = (loc.labelOffsetX ?? 0) + Math.round(before.left - after.left);
  loc.labelOffsetY = (loc.labelOffsetY ?? 0) + Math.round(before.top - after.top);
  updateTooltipLayout(locMarkers[locIdx]?.marker, loc);
}

function addLocMarker(loc, locIdx) {
  const duplicateLoc = locations.findIndex(l => locKey(l) === locKey(loc)) !== locIdx;
  loc = { ...loc, visitNumber: locIdx + 1 };
  const icon = L.divIcon({
    className: `loc-mk-${locIdx}`,
    html: markerIconHtml(loc, { hidden: duplicateLoc }),
    iconAnchor: [(loc.markerSize ?? 18) / 2, (loc.markerSize ?? 18) / 2],
    iconSize: [loc.markerSize ?? 18, loc.markerSize ?? 18],
  });
  const marker = L.marker([loc.lat, loc.lng], { icon }).addTo(map);
  const mode = loc.labelMode || 'always';
  if (mode !== 'hidden') {
    marker.bindTooltip(labelTooltipHtml(loc), {
      direction: loc.labelPos || 'right',
      offset: L.point(loc.labelOffsetX ?? 0, loc.labelOffsetY ?? 0),
      permanent: mode === 'always',
      interactive: mode === 'always',
      opacity: 1,
      className: `loc-label-tt loc-tt-${locIdx}`,
    });
    marker.on('tooltipopen', e => {
      const el = e.tooltip.getElement();
      if (el) {
        el.dataset.locIdx = String(locIdx);
        applyTooltipLayoutStyle(el, locations[locIdx]);
      }
    });
    if (mode === 'always') {
      marker.openTooltip();
      const el = marker.getTooltip()?.getElement();
      if (el) {
        el.dataset.locIdx = String(locIdx);
        applyTooltipLayoutStyle(el, locations[locIdx]);
      }
    }
  }
  marker.on('click', () => {
    expandedLocIdx = expandedLocIdx === locIdx ? null : locIdx;
    renderLocList();
    setTimeout(() => {
      const el = document.getElementById(`loc-item-${locIdx}`);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 30);
  });
  locMarkers[locIdx] = { marker };
}
function clearLocMarkers() {
  locMarkers.forEach(entry => { if (entry?.marker) map.removeLayer(entry.marker); });
  locMarkers = [];
}
function rebuildMarkers() {
  clearLocMarkers();
  buildTooltipStyles();
  locations.forEach(addLocMarker);
  applyAllTooltipLayoutStyles();
}

// ── Label drag ────────────────────────────────────────────────────────────────
function isOnLabelResizeEdge(tt, e) {
  const rect = tt.getBoundingClientRect();
  return e.clientX >= rect.right - 12 && e.clientX <= rect.right + 3;
}

let activeLabelDrag = null;

function enableLabelDrag() {
  document.addEventListener('mousemove', e => {
    if (activeLabelDrag) {
      const { tt, locIdx, startX, startY, origOX, origOY, startWidth, mode } = activeLabelDrag;
      const loc = locations[locIdx];
      if (!loc) return;

      activeLabelDrag.moved = true;
      if (mode === 'resize') {
        const width = Math.max(48, Math.round(startWidth + e.clientX - startX));
        loc.labelWidth = width;
        updateTooltipLayout(locMarkers[locIdx]?.marker, loc);
        tt.style.cursor = 'ew-resize';
      } else {
        loc.labelOffsetX = origOX + (e.clientX - startX);
        loc.labelOffsetY = origOY + (e.clientY - startY);
        setTooltipOffset(locMarkers[locIdx]?.marker, loc);
        tt.style.cursor = 'grabbing';
      }
      return;
    }

    const tt = e.target.closest('.loc-label-tt');
    if (!tt) return;
    tt.style.cursor = isOnLabelResizeEdge(tt, e) ? 'ew-resize' : 'grab';
  });

  function finishActiveLabelDrag(e) {
    if (!activeLabelDrag) return;
    const { tt, moved } = activeLabelDrag;
    activeLabelDrag = null;
    map.dragging.enable();
    tt.style.cursor = '';
    if (moved) {
      save();
      if (e) e.stopPropagation();
    }
  }

  document.addEventListener('mouseup', finishActiveLabelDrag);
  document.addEventListener('mouseleave', finishActiveLabelDrag);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') finishActiveLabelDrag(e); });

  document.addEventListener('mousedown', e => {
    const tt = e.target.closest('.loc-label-tt');
    if (!tt) return;
    const locIdx = parseInt(tt.dataset.locIdx ?? '', 10);
    if (!Number.isInteger(locIdx)) return;
    const loc = locations[locIdx];
    if (!loc || (loc.labelMode || 'always') !== 'always') return;

    finishActiveLabelDrag();
    e.preventDefault();
    e.stopPropagation();
    if (map.dragging.enabled()) map.dragging.disable();

    activeLabelDrag = {
      tt,
      locIdx,
      mode: isOnLabelResizeEdge(tt, e) ? 'resize' : 'move',
      startX: e.clientX,
      startY: e.clientY,
      startWidth: loc.labelWidth ?? tt.offsetWidth,
      origOX: loc.labelOffsetX ?? 0,
      origOY: loc.labelOffsetY ?? 0,
      moved: false,
    };
  });
}

// ── Next-mode buttons ─────────────────────────────────────────────────────────
function renderNextModeBtns() {
  document.getElementById('mode-row').style.display = locations.length > 0 ? 'flex' : 'none';
  const c = document.getElementById('next-mode-btns');
  c.innerHTML = '';
  Object.entries(TYPE_EMOJI).forEach(([type, emoji]) => {
    const btn = document.createElement('button');
    btn.className = 'mode-btn' + (type === nextRouteType ? ' active' : '');
    btn.textContent = emoji; btn.title = type;
    btn.addEventListener('click', () => { nextRouteType = type; renderNextModeBtns(); });
    c.appendChild(btn);
  });
}

// ── Segment mode buttons ──────────────────────────────────────────────────────
function makeSegmentModeBtns(routeIdx, currentType) {
  const wrap = document.createElement('div');
  wrap.className = 'mode-btns';
  Object.entries(TYPE_EMOJI).forEach(([type, emoji]) => {
    const btn = document.createElement('button');
    btn.className = 'mode-btn' + (type === currentType ? ' active' : '');
    btn.textContent = emoji; btn.title = type;
    btn.addEventListener('click', async () => { await changeRouteType(routeIdx, type); });
    wrap.appendChild(btn);
  });
  return wrap;
}

// ── Bulk route helpers ────────────────────────────────────────────────────────
async function rebuildAllRoutes() {
  routeLayers.forEach((_, i) => clearRouteLayer(i));
  routeLayers = [];
  for (let i = 0; i < routes.length; i++) await drawRoute(i);
}

// ── Style panel ───────────────────────────────────────────────────────────────
const SOLID_COLORS = ['#e74c3c','#e67e22','#f1c40f','#2ecc71','#1abc9c','#3498db','#9b59b6','#e91e8c','#ffffff','#888888','#000000'];

function orderedPaletteColors(scope, name, colors) {
  const state = paletteOrder[`${scope}:${name}`] || { shift: 0, reversed: false };
  let ordered = [...colors];
  if (state.reversed) ordered.reverse();
  const shift = ((state.shift % ordered.length) + ordered.length) % ordered.length;
  return ordered.slice(shift).concat(ordered.slice(0, shift));
}

function paletteOrderSettings() {
  return Object.fromEntries(Object.entries(paletteOrder).map(([key, state]) => [
    key,
    { shift: Number(state.shift) || 0, reversed: !!state.reversed },
  ]));
}

function applyPaletteOrderSettings(value = {}) {
  Object.keys(paletteOrder).forEach(key => { delete paletteOrder[key]; });
  Object.entries(value || {}).forEach(([key, state]) => {
    if (!state || typeof state !== 'object') return;
    paletteOrder[key] = { shift: Number(state.shift) || 0, reversed: !!state.reversed };
  });
}

function adjustPaletteOrder(scope, name, action) {
  const key = `${scope}:${name}`;
  const colors = PALETTES[name];
  if (!colors) return;
  const state = paletteOrder[key] || { shift: 0, reversed: false };
  if (action === 'reverse') state.reversed = !state.reversed;
  if (action === 'left') state.shift = (state.shift + 1) % colors.length;
  if (action === 'right') state.shift = (state.shift - 1 + colors.length) % colors.length;
  paletteOrder[key] = state;
  save();
}

function makeStylePanel(routeIdx, route) {
  const panel = document.createElement('div');
  panel.className = 'style-panel';
  const typeMeta = ROUTE_META[route.type];
  const currentRouteColor = () => route.color ?? typeMeta.color;

  // — Color row (wraps) —
  const colorRow = document.createElement('div');
  colorRow.className = 'sp-row-wrap';
  colorRow.innerHTML = '<span class="sp-label">Color</span>';

  // Type-default swatch
  const typeSwatch = document.createElement('div');
  typeSwatch.className = 'swatch' + (route.color == null ? ' active' : '');
  typeSwatch.style.background = typeMeta.color;
  typeSwatch.title = 'Type default';
  typeSwatch.addEventListener('click', async () => { routes[routeIdx].color = null; await redrawRoute(routeIdx); });
  colorRow.appendChild(typeSwatch);

  // Solid color swatches
  SOLID_COLORS.forEach(hex => {
    const sw = document.createElement('div');
    sw.className = 'swatch' + (route.color === hex ? ' active' : '');
    sw.style.background = hex; sw.title = hex;
    sw.addEventListener('click', async () => { routes[routeIdx].color = hex; await redrawRoute(routeIdx); });
    colorRow.appendChild(sw);
  });

  // Custom color picker
  const customWrap = document.createElement('div');
  customWrap.className = 'swatch-custom'; customWrap.title = 'Custom color';
  const customFill = document.createElement('div'); customFill.className = 'swatch-custom-fill';
  const colorInput = document.createElement('input'); colorInput.type = 'color';
  colorInput.value = route.color || typeMeta.color;
  colorInput.addEventListener('input', async () => { routes[routeIdx].color = colorInput.value; await redrawRoute(routeIdx); });
  customWrap.appendChild(customFill); customWrap.appendChild(colorInput);
  colorRow.appendChild(customWrap);
  const colorAllBtn = document.createElement('button');
  colorAllBtn.className = 'sp-all';
  colorAllBtn.textContent = '↓ All';
  colorAllBtn.title = 'Apply this segment color to every segment';
  colorAllBtn.addEventListener('click', async () => {
    const color = currentRouteColor();
    routes.forEach(r => { r.color = color; });
    await rebuildAllRoutes(); renderLocList(); save();
  });
  colorRow.appendChild(colorAllBtn);
  panel.appendChild(colorRow);

  // — Palette accordion: pick individual colors or apply whole palette to all —
  const paletteSection = document.createElement('div');
  paletteSection.className = 'palette-section';
  paletteSection.dataset.scrollKey = `route:${routeIdx}`;

  // Mode toggle row
  const palModeRow = document.createElement('div'); palModeRow.className = 'pal-mode-row';
  const palLbl = document.createElement('span'); palLbl.className = 'sp-label'; palLbl.textContent = 'Palette';
  const sameBtn = document.createElement('button');
  sameBtn.className = 'sp-btn' + (paletteApplyMode === 'same' ? ' active' : '');
  sameBtn.textContent = 'Same'; sameBtn.title = 'Apply one palette color to every segment';
  sameBtn.addEventListener('click', () => { paletteApplyMode = 'same'; renderLocList(); });
  const seqBtn = document.createElement('button');
  seqBtn.className = 'sp-btn' + (paletteApplyMode === 'sequential' ? ' active' : '');
  seqBtn.textContent = 'Sequential'; seqBtn.title = 'Assign palette colors in segment order';
  seqBtn.addEventListener('click', () => { paletteApplyMode = 'sequential'; renderLocList(); });
  const typeBtn = document.createElement('button');
  typeBtn.className = 'sp-btn' + (paletteApplyMode === 'bytype' ? ' active' : '');
  typeBtn.textContent = 'By type'; typeBtn.title = 'Assign one palette color per transport mode';
  typeBtn.addEventListener('click', () => { paletteApplyMode = 'bytype'; renderLocList(); });
  palModeRow.appendChild(palLbl); palModeRow.appendChild(sameBtn); palModeRow.appendChild(seqBtn); palModeRow.appendChild(typeBtn);
  paletteSection.appendChild(palModeRow);

  const typeKeys = Object.keys(TYPE_EMOJI);

  Object.entries(PALETTES).forEach(([name, colors]) => {
    const entry = document.createElement('div'); entry.className = 'palette-entry';
    const orderedColors = colors ? orderedPaletteColors('route', name, colors) : null;

    // Header row: color strip + name + toggle arrow
    const header = document.createElement('div');
    header.className = 'palette-header' + (expandedPalette === name ? ' open' : '');

    if (orderedColors) {
      const strip = document.createElement('div'); strip.className = 'palette-strip';
      orderedColors.forEach(c => { const s = document.createElement('span'); s.style.background = c; strip.appendChild(s); });
      header.appendChild(strip);
    }
    const nameLbl = document.createElement('span'); nameLbl.className = 'palette-name'; nameLbl.textContent = name;
    const arrow = document.createElement('span');
    arrow.style.cssText = 'font-size:10px;color:var(--fg2);flex-shrink:0;';
    arrow.textContent = expandedPalette === name ? '▲' : '▼';
    header.appendChild(nameLbl); header.appendChild(arrow);

    header.addEventListener('click', () => {
      expandedPalette = expandedPalette === name ? null : name;
      renderLocList();
    });
    entry.appendChild(header);

    // Body: individual swatches + "Apply to all" button
    const body = document.createElement('div');
    body.className = 'palette-body' + (expandedPalette === name ? ' open' : '');

    if (orderedColors) {
      const swatchRow = document.createElement('div'); swatchRow.className = 'palette-swatches';
      orderedColors.forEach(hex => {
        const sw = document.createElement('div');
        sw.className = 'swatch' + (route.color === hex ? ' active' : '');
        sw.style.cssText = `background:${hex};width:20px;height:20px;`;
        sw.title = hex;
        sw.addEventListener('click', async () => { routes[routeIdx].color = hex; await redrawRoute(routeIdx); });
        swatchRow.appendChild(sw);
      });
      body.appendChild(swatchRow);

      const orderRow = document.createElement('div');
      orderRow.className = 'palette-order-row';
      [
        ['left', '↶ Rotate'],
        ['right', 'Rotate ↷'],
        ['reverse', 'Reverse'],
      ].forEach(([action, label]) => {
        const btn = document.createElement('button');
        btn.className = 'sp-btn';
        btn.textContent = label;
        btn.addEventListener('click', () => { adjustPaletteOrder('route', name, action); renderLocList(); });
        orderRow.appendChild(btn);
      });
      body.appendChild(orderRow);
    }

    const applyAllBtn = document.createElement('button');
    applyAllBtn.className = 'palette-apply';
    applyAllBtn.textContent = !orderedColors ? 'Reset all to type default' :
      paletteApplyMode === 'same' ? 'Apply selected color to all segments' : 'Apply to all segments';
    applyAllBtn.addEventListener('click', async () => {
      if (!orderedColors) {
        routes.forEach(r => { r.color = null; });
      } else if (paletteApplyMode === 'same') {
        const color = currentRouteColor();
        routes.forEach(r => { r.color = color; });
      } else if (paletteApplyMode === 'bytype') {
        routes.forEach(r => {
          const ti = typeKeys.indexOf(r.type);
          r.color = orderedColors[(ti >= 0 ? ti : 0) % orderedColors.length];
        });
      } else {
        routes.forEach((r, i) => { r.color = orderedColors[i % orderedColors.length]; });
      }
      rebuildMarkers();
      await rebuildAllRoutes();
      renderLocList(); save();
    });
    body.appendChild(applyAllBtn);

    entry.appendChild(body);
    paletteSection.appendChild(entry);
  });
  panel.appendChild(paletteSection);

  // — Dash row —
  const dashRow = document.createElement('div');
  dashRow.className = 'sp-row';
  dashRow.innerHTML = '<span class="sp-label">Dash</span>';
  const dashes = [
    { key: 'solid',   label: '———' },
    { key: 'dashed',  label: '– –' },
    { key: 'dotted',  label: '· · ·' },
    { key: 'default', label: 'Auto' },
  ];
  dashes.forEach(({ key, label }) => {
    const btn = document.createElement('button');
    btn.className = 'sp-btn' + ((route.dash || 'solid') === key ? ' active' : '');
    btn.textContent = label;
    btn.addEventListener('click', async () => { routes[routeIdx].dash = key; await redrawRoute(routeIdx); });
    dashRow.appendChild(btn);
  });
  const dashAllBtn = document.createElement('button');
  dashAllBtn.className = 'sp-all'; dashAllBtn.textContent = '↓ All';
  dashAllBtn.title = 'Apply this dash style to all segments';
  dashAllBtn.addEventListener('click', async () => {
    const d = route.dash || 'solid';
    routes.forEach(r => { r.dash = d; });
    await rebuildAllRoutes(); renderLocList(); save();
  });
  dashRow.appendChild(dashAllBtn);
  panel.appendChild(dashRow);

  // — Geometry row —
  const shapeRow = document.createElement('div');
  shapeRow.className = 'sp-row';
  shapeRow.innerHTML = '<span class="sp-label">Line</span>';
  [
    { key: 'route', label: 'Route' },
    { key: 'curve', label: 'Curve' },
  ].forEach(({ key, label }) => {
    const btn = document.createElement('button');
    btn.className = 'sp-btn' + ((route.shape || 'route') === key ? ' active' : '');
    btn.textContent = label;
    btn.addEventListener('click', async () => { routes[routeIdx].shape = key; await redrawRoute(routeIdx); });
    shapeRow.appendChild(btn);
  });
  const shapeAllBtn = document.createElement('button');
  shapeAllBtn.className = 'sp-all'; shapeAllBtn.textContent = '↓ All';
  shapeAllBtn.title = 'Apply this line shape to all segments';
  shapeAllBtn.addEventListener('click', async () => {
    const shape = route.shape || 'route';
    routes.forEach(r => { r.shape = shape; });
    await rebuildAllRoutes(); renderLocList(); save();
  });
  shapeRow.appendChild(shapeAllBtn);
  panel.appendChild(shapeRow);

  // — Width slider (1–10, null = auto = type default) —
  const widthRow = document.createElement('div');
  widthRow.className = 'sp-row';
  widthRow.innerHTML = '<span class="sp-label">Width</span>';

  const defaultWeight = typeMeta.weight;
  const currentVal = route.weight ?? defaultWeight;

  const slider = document.createElement('input');
  slider.type = 'range'; slider.min = 1; slider.max = 10; slider.step = 1;
  slider.value = currentVal; slider.className = 'sp-slider';

  const valLabel = document.createElement('span');
  valLabel.className = 'sp-slider-val';
  valLabel.textContent = route.weight == null ? `${defaultWeight} (auto)` : currentVal;

  slider.addEventListener('input', () => {
    const v = parseInt(slider.value);
    valLabel.textContent = v === defaultWeight ? `${v} (auto)` : v;
  });
  slider.addEventListener('change', async () => {
    const v = parseInt(slider.value);
    routes[routeIdx].weight = v === defaultWeight ? null : v;
    valLabel.textContent = routes[routeIdx].weight == null ? `${defaultWeight} (auto)` : v;
    await redrawRoute(routeIdx);
  });

  const widthAllBtn = document.createElement('button');
  widthAllBtn.className = 'sp-all'; widthAllBtn.textContent = '↓ All';
  widthAllBtn.title = 'Apply this width to all segments';
  widthAllBtn.addEventListener('click', async () => {
    const v = parseInt(slider.value);
    const w = v === defaultWeight ? null : v;
    routes.forEach(r => { r.weight = w; });
    await rebuildAllRoutes(); renderLocList(); save();
  });
  widthRow.appendChild(slider); widthRow.appendChild(valLabel); widthRow.appendChild(widthAllBtn);
  panel.appendChild(widthRow);

  return panel;
}

async function redrawRoute(idx) {
  clearRouteLayer(idx);
  await drawRoute(idx);
  renderLocList();
  save();
}

function applyMarkerColorToAll(color) {
  locations.forEach(l => { l.markerColor = color; });
  rebuildMarkers(); renderLocList(); save();
}

function applyMarkerNumberStyleToAll(sourceLoc) {
  locations.forEach(l => {
    l.markerShowNumber = sourceLoc.markerShowNumber ?? true;
    l.markerNumberColor = sourceLoc.markerNumberColor || '#18181b';
  });
  rebuildMarkers(); renderLocList(); save();
}

function applyMarkerSizeToAll(size) {
  locations.forEach(l => { l.markerSize = size; });
  rebuildMarkers(); renderLocList(); save();
}

function applyMarkerPalette(colors, selectedColor = colors[0]) {
  if (markerPaletteApplyMode === 'sequential') {
    locations.forEach((l, i) => { l.markerColor = colors[i % colors.length]; });
  } else {
    locations.forEach(l => { l.markerColor = selectedColor; });
  }
  rebuildMarkers(); renderLocList(); save();
}

function makeMarkerPaletteControls(locIdx, loc) {
  const section = document.createElement('div');
  section.className = 'palette-section';
  section.dataset.scrollKey = `marker:${locIdx}`;

  const modeRow = document.createElement('div');
  modeRow.className = 'pal-mode-row';
  const label = document.createElement('span');
  label.className = 'sp-label';
  label.textContent = 'Palette';

  const allBtn = document.createElement('button');
  allBtn.className = 'sp-btn' + (markerPaletteApplyMode === 'all' ? ' active' : '');
  allBtn.textContent = 'All';
  allBtn.title = 'Apply one palette color to every stop';
  allBtn.addEventListener('click', () => { markerPaletteApplyMode = 'all'; renderLocList(); });

  const seqBtn = document.createElement('button');
  seqBtn.className = 'sp-btn' + (markerPaletteApplyMode === 'sequential' ? ' active' : '');
  seqBtn.textContent = 'Sequential';
  seqBtn.title = 'Assign palette colors in visited order';
  seqBtn.addEventListener('click', () => { markerPaletteApplyMode = 'sequential'; renderLocList(); });

  modeRow.appendChild(label);
  modeRow.appendChild(allBtn);
  modeRow.appendChild(seqBtn);
  section.appendChild(modeRow);

  Object.entries(PALETTES).forEach(([name, colors]) => {
    if (!colors) return;
    const orderedColors = orderedPaletteColors('marker', name, colors);

    const entry = document.createElement('div');
    entry.className = 'palette-entry';

    const header = document.createElement('div');
    header.className = 'palette-header' + (expandedPalette === `marker:${name}` ? ' open' : '');

    const strip = document.createElement('div');
    strip.className = 'palette-strip';
    orderedColors.forEach(c => {
      const s = document.createElement('span');
      s.style.background = c;
      strip.appendChild(s);
    });
    header.appendChild(strip);

    const nameLbl = document.createElement('span');
    nameLbl.className = 'palette-name';
    nameLbl.textContent = name;
    const arrow = document.createElement('span');
    arrow.className = 'palette-arrow';
    arrow.textContent = expandedPalette === `marker:${name}` ? '▲' : '▼';
    header.appendChild(nameLbl);
    header.appendChild(arrow);

    header.addEventListener('click', () => {
      const key = `marker:${name}`;
      expandedPalette = expandedPalette === key ? null : key;
      renderLocList();
    });
    entry.appendChild(header);

    const body = document.createElement('div');
    body.className = 'palette-body' + (expandedPalette === `marker:${name}` ? ' open' : '');

    const swatchRow = document.createElement('div');
    swatchRow.className = 'palette-swatches';
    orderedColors.forEach(hex => {
      const sw = document.createElement('div');
      sw.className = 'swatch' + (loc.markerColor === hex ? ' active' : '');
      sw.style.cssText = `background:${hex};width:20px;height:20px;`;
      sw.title = hex;
      sw.addEventListener('click', () => {
        locations[locIdx].markerColor = hex;
        rebuildMarkers(); renderLocList(); save();
      });
      swatchRow.appendChild(sw);
    });
    body.appendChild(swatchRow);

    const orderRow = document.createElement('div');
    orderRow.className = 'palette-order-row';
    [
      ['left', '↶ Rotate'],
      ['right', 'Rotate ↷'],
      ['reverse', 'Reverse'],
    ].forEach(([action, label]) => {
      const btn = document.createElement('button');
      btn.className = 'sp-btn';
      btn.textContent = label;
      btn.addEventListener('click', () => { adjustPaletteOrder('marker', name, action); renderLocList(); });
      orderRow.appendChild(btn);
    });
    body.appendChild(orderRow);

    const selectedPaletteColor = () => orderedColors.includes(locations[locIdx].markerColor)
      ? locations[locIdx].markerColor
      : orderedColors[0];
    const applyBtn = document.createElement('button');
    applyBtn.className = 'palette-apply';
    applyBtn.textContent = markerPaletteApplyMode === 'sequential'
      ? 'Apply sequentially by visit order'
      : 'Apply selected color to all stops';
    applyBtn.addEventListener('click', () => applyMarkerPalette(orderedColors, selectedPaletteColor()));
    body.appendChild(applyBtn);

    entry.appendChild(body);
    section.appendChild(entry);
  });

  return section;
}

// ── Location edit panel ───────────────────────────────────────────────────────

function makeLocEditPanel(locIdx) {
  const loc = locations[locIdx];
  const panel = document.createElement('div');
  panel.className = 'loc-edit-panel';

  // Name
  const nameRow = document.createElement('div'); nameRow.className = 'lep-row';
  nameRow.innerHTML = '<span class="lep-label">Name</span>';
  const nameInput = document.createElement('input');
  nameInput.type = 'text'; nameInput.className = 'lep-input'; nameInput.value = loc.name;
  nameInput.addEventListener('change', () => {
    const v = nameInput.value.trim(); if (!v) return;
    locations[locIdx].name = v;
    rebuildMarkers(); renderLocList(); save();
  });
  nameRow.appendChild(nameInput); panel.appendChild(nameRow);

  // Notes
  const notesRow = document.createElement('div'); notesRow.className = 'lep-row top';
  notesRow.innerHTML = '<span class="lep-label">Notes</span>';
  const notesInput = document.createElement('textarea');
  notesInput.className = 'lep-input'; notesInput.value = loc.description || '';
  notesInput.placeholder = 'Add notes…';
  notesInput.addEventListener('change', () => {
    preserveLabelScreenPosition(locIdx, () => {
      locations[locIdx].description = notesInput.value;
      rebuildMarkers();
    });
    renderLocList(); save();
  });
  notesRow.appendChild(notesInput); panel.appendChild(notesRow);

  // Date
  const dateRow = document.createElement('div'); dateRow.className = 'lep-row';
  dateRow.innerHTML = '<span class="lep-label">Date</span>';
  const dateInput = document.createElement('input');
  dateInput.type = 'date'; dateInput.className = 'lep-input'; dateInput.value = loc.date || '';
  dateInput.addEventListener('change', () => {
    preserveLabelScreenPosition(locIdx, () => {
      locations[locIdx].date = dateInput.value;
      rebuildMarkers();
    });
    renderLocList(); save();
  });
  dateRow.appendChild(dateInput); panel.appendChild(dateRow);

  // Coordinates
  const coordRow = document.createElement('div'); coordRow.className = 'lep-row';
  coordRow.innerHTML = '<span class="lep-label">Coords</span>';
  const latInput = document.createElement('input');
  latInput.type = 'number'; latInput.step = 'any'; latInput.className = 'lep-input'; latInput.value = loc.lat;
  latInput.title = 'Latitude';
  const lngInput = document.createElement('input');
  lngInput.type = 'number'; lngInput.step = 'any'; lngInput.className = 'lep-input'; lngInput.value = loc.lng;
  lngInput.title = 'Longitude';
  const coordApplyBtn = document.createElement('button');
  coordApplyBtn.className = 'sp-btn';
  coordApplyBtn.textContent = 'Update';
  coordApplyBtn.addEventListener('click', async () => {
    await updateLocationPosition(locIdx, parseFloat(latInput.value), parseFloat(lngInput.value));
  });
  [latInput, lngInput].forEach(input => {
    input.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        coordApplyBtn.click();
      }
    });
  });
  coordRow.appendChild(latInput);
  coordRow.appendChild(lngInput);
  coordRow.appendChild(coordApplyBtn);
  panel.appendChild(coordRow);

  const moveRow = document.createElement('div');
  moveRow.className = 'lep-row';
  moveRow.innerHTML = '<span class="lep-label">Move</span>';
  const moveSearchInput = document.createElement('input');
  moveSearchInput.type = 'text';
  moveSearchInput.className = 'lep-input';
  moveSearchInput.placeholder = 'Search new place…';
  const moveSearchBtn = document.createElement('button');
  moveSearchBtn.className = 'sp-btn';
  moveSearchBtn.textContent = 'Search';
  moveSearchBtn.addEventListener('click', async () => {
    const q = moveSearchInput.value.trim(); if (!q) return;
    moveSearchBtn.textContent = '…'; moveSearchBtn.disabled = true;
    try {
      const results = await geocodeSearch(q);
      if (!results.length) toast('No results found.');
      else await updateLocationFromPlace(locIdx, results[0]);
    } catch { toast('Search failed. Check your connection.'); }
    moveSearchBtn.textContent = 'Search'; moveSearchBtn.disabled = false;
  });
  moveSearchInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      moveSearchBtn.click();
    }
  });
  moveRow.appendChild(moveSearchInput);
  moveRow.appendChild(moveSearchBtn);
  panel.appendChild(moveRow);

  const movePickRow = document.createElement('div');
  movePickRow.className = 'lep-row';
  movePickRow.innerHTML = '<span class="lep-label"></span>';
  const movePickBtn = document.createElement('button');
  movePickBtn.className = 'sp-btn';
  movePickBtn.textContent = 'Pick new point on map';
  movePickBtn.addEventListener('click', () => enterPickMode(locIdx));
  movePickRow.appendChild(movePickBtn);
  panel.appendChild(movePickRow);

  // Shape
  const shapeRow = document.createElement('div'); shapeRow.className = 'lep-row';
  shapeRow.innerHTML = '<span class="lep-label">Shape</span>';
  Object.entries(LOC_SHAPES).forEach(([key, { label }]) => {
    const btn = document.createElement('button');
    btn.className = 'shape-btn' + ((loc.shape || 'circle') === key ? ' active' : '');
    btn.textContent = label; btn.title = key;
    btn.addEventListener('click', () => { locations[locIdx].shape = key; rebuildMarkers(); renderLocList(); save(); });
    shapeRow.appendChild(btn);
  });
  panel.appendChild(shapeRow);

  // Marker color
  const colorRow = document.createElement('div'); colorRow.className = 'sp-row-wrap';
  colorRow.innerHTML = '<span class="sp-label">Color</span>';
  SOLID_COLORS.forEach(hex => {
    const sw = document.createElement('div');
    sw.className = 'swatch' + (loc.markerColor === hex ? ' active' : '');
    sw.style.background = hex;
    sw.title = hex;
    sw.addEventListener('click', () => { locations[locIdx].markerColor = hex; rebuildMarkers(); renderLocList(); save(); });
    colorRow.appendChild(sw);
  });
  const cWrap = document.createElement('div'); cWrap.className = 'swatch-custom'; cWrap.title = 'Custom';
  const cFill = document.createElement('div'); cFill.className = 'swatch-custom-fill';
  const cInput = document.createElement('input'); cInput.type = 'color';
  cInput.value = loc.markerColor || '#89b4fa';
  cInput.addEventListener('input', () => { locations[locIdx].markerColor = cInput.value; rebuildMarkers(); save(); });
  cWrap.appendChild(cFill); cWrap.appendChild(cInput);
  colorRow.appendChild(cWrap);
  const colorAllBtn = document.createElement('button');
  colorAllBtn.className = 'sp-all';
  colorAllBtn.textContent = '↓ All';
  colorAllBtn.title = 'Apply this marker color to all stops';
  colorAllBtn.addEventListener('click', () => applyMarkerColorToAll(locations[locIdx].markerColor || '#89b4fa'));
  colorRow.appendChild(colorAllBtn);
  panel.appendChild(colorRow);

  const markerNumRow = document.createElement('div');
  markerNumRow.className = 'pin-number-row';
  const markerNumBtn = document.createElement('button');
  markerNumBtn.className = 'pin-number-toggle' + ((loc.markerShowNumber ?? true) ? ' active' : '');
  markerNumBtn.textContent = (loc.markerShowNumber ?? true) ? 'Pin numbers on' : 'Pin numbers off';
  markerNumBtn.addEventListener('click', () => {
    locations[locIdx].markerShowNumber = !(locations[locIdx].markerShowNumber ?? true);
    rebuildMarkers(); renderLocList(); save();
  });
  const markerNumColor = document.createElement('input');
  markerNumColor.type = 'color';
  markerNumColor.value = loc.markerNumberColor || '#18181b';
  markerNumColor.className = 'color-input';
  markerNumColor.title = 'Pin number color';
  markerNumColor.addEventListener('input', () => {
    locations[locIdx].markerNumberColor = markerNumColor.value;
    rebuildMarkers(); save();
  });
  const markerNumAllBtn = document.createElement('button');
  markerNumAllBtn.className = 'sp-all';
  markerNumAllBtn.textContent = '↓ All';
  markerNumAllBtn.title = 'Apply this pin number setting to all stops';
  markerNumAllBtn.addEventListener('click', () => applyMarkerNumberStyleToAll(locations[locIdx]));
  const markerNumLabel = document.createElement('span');
  markerNumLabel.className = 'pin-number-label';
  markerNumLabel.textContent = 'Number color';
  markerNumRow.appendChild(markerNumBtn);
  markerNumRow.appendChild(markerNumLabel);
  markerNumRow.appendChild(markerNumColor);
  markerNumRow.appendChild(markerNumAllBtn);
  panel.appendChild(markerNumRow);

  const markerSizeRow = document.createElement('div');
  markerSizeRow.className = 'lep-row';
  markerSizeRow.innerHTML = '<span class="lep-label">Pin size</span>';
  const markerSizeSlider = document.createElement('input');
  markerSizeSlider.type = 'range';
  markerSizeSlider.min = 10;
  markerSizeSlider.max = 36;
  markerSizeSlider.step = 1;
  markerSizeSlider.value = loc.markerSize ?? 18;
  markerSizeSlider.className = 'sp-slider';
  const markerSizeVal = document.createElement('span');
  markerSizeVal.className = 'sp-slider-val';
  markerSizeVal.textContent = `${loc.markerSize ?? 18}px`;
  markerSizeSlider.addEventListener('input', () => {
    markerSizeVal.textContent = `${markerSizeSlider.value}px`;
  });
  markerSizeSlider.addEventListener('change', () => {
    locations[locIdx].markerSize = parseInt(markerSizeSlider.value, 10);
    rebuildMarkers(); save();
  });
  const markerSizeAllBtn = document.createElement('button');
  markerSizeAllBtn.className = 'sp-all';
  markerSizeAllBtn.textContent = '↓ All';
  markerSizeAllBtn.title = 'Apply this pin size to all stops';
  markerSizeAllBtn.addEventListener('click', () => applyMarkerSizeToAll(parseInt(markerSizeSlider.value, 10)));
  markerSizeRow.appendChild(markerSizeSlider);
  markerSizeRow.appendChild(markerSizeVal);
  markerSizeRow.appendChild(markerSizeAllBtn);
  panel.appendChild(markerSizeRow);
  panel.appendChild(makeMarkerPaletteControls(locIdx, loc));

  // ── Label section ────────────────────────────────────────────────────────────
  const lblDivider = document.createElement('div');
  lblDivider.style.cssText = 'border-top:1px solid var(--bg3);margin:2px 0;';
  panel.appendChild(lblDivider);

  // Mode
  const lblModeRow = document.createElement('div'); lblModeRow.className = 'lep-row';
  lblModeRow.innerHTML = '<span class="lep-label">Label</span>';
  [['always','Always'],['hover','Hover'],['hidden','Hidden']].forEach(([m, txt]) => {
    const btn = document.createElement('button');
    btn.className = 'shape-btn label-mode-btn' + ((loc.labelMode||'always')===m?' active':'');
    btn.textContent = txt;
    btn.addEventListener('click', () => {
      preserveLabelScreenPosition(locIdx, () => {
        locations[locIdx].labelMode = m;
        rebuildMarkers();
      });
      renderLocList(); save();
    });
    lblModeRow.appendChild(btn);
  });
  panel.appendChild(lblModeRow);

  // Content
  const lblContentRow = document.createElement('div'); lblContentRow.className = 'lep-row label-content-row';
  lblContentRow.innerHTML = '<span class="lep-label">Content</span>';
  [
    ['labelShowNumber', 'Number'],
    ['labelShowName', 'Name'],
    ['labelShowDate', 'Date'],
    ['labelShowNotes', 'Notes'],
  ].forEach(([key, txt]) => {
    const btn = document.createElement('button');
    const active = key === 'labelShowName' ? (loc[key] ?? true) : (loc[key] ?? false);
    btn.className = 'sp-btn label-content-btn' + (active ? ' active' : '');
    btn.textContent = txt;
    btn.addEventListener('click', () => {
      preserveLabelScreenPosition(locIdx, () => {
        locations[locIdx][key] = !active;
        rebuildMarkers();
      });
      renderLocList(); save();
    });
    lblContentRow.appendChild(btn);
  });
  panel.appendChild(lblContentRow);

  // Position + Arrow toggle on same row
  const lblPosRow = document.createElement('div'); lblPosRow.className = 'lep-row';
  lblPosRow.innerHTML = '<span class="lep-label">Position</span>';
  [['right','→'],['left','←'],['top','↑'],['bottom','↓']].forEach(([p, icon]) => {
    const btn = document.createElement('button');
    btn.className = 'shape-btn' + ((loc.labelPos||'right')===p?' active':'');
    btn.textContent = icon; btn.title = p;
    btn.addEventListener('click', () => { locations[locIdx].labelPos = p; rebuildMarkers(); renderLocList(); save(); });
    lblPosRow.appendChild(btn);
  });
  // Spacer
  const posSpacer = document.createElement('span'); posSpacer.style.flex = '1';
  lblPosRow.appendChild(posSpacer);
  // Arrow toggle
  const arrowBtn = document.createElement('button');
  arrowBtn.className = 'shape-btn' + ((loc.labelArrow ?? false) ? ' active' : '');
  arrowBtn.textContent = '↗'; arrowBtn.title = 'Show arrow tip';
  arrowBtn.addEventListener('click', () => {
    locations[locIdx].labelArrow = !(loc.labelArrow ?? false);
    buildTooltipStyles(); renderLocList(); save();
  });
  lblPosRow.appendChild(arrowBtn);
  panel.appendChild(lblPosRow);

  // Drag hint + Reset position
  const dragRow = document.createElement('div'); dragRow.className = 'lep-row';
  dragRow.innerHTML = '<span class="lep-label" style="color:var(--fg2);">Offset</span><span style="font-size:10px;color:var(--fg2);flex:1;">drag label to reposition</span>';
  const resetBtn = document.createElement('button');
  resetBtn.className = 'sp-btn'; resetBtn.textContent = 'Reset';
  resetBtn.addEventListener('click', () => {
    locations[locIdx].labelOffsetX = 0; locations[locIdx].labelOffsetY = 0; locations[locIdx].labelWidth = null;
    buildTooltipStyles(); save();
  });
  dragRow.appendChild(resetBtn);
  panel.appendChild(dragRow);

  // Roundness slider
  const roundRow = document.createElement('div'); roundRow.className = 'lep-row';
  roundRow.innerHTML = '<span class="lep-label">Round</span>';
  const roundSlider = document.createElement('input');
  roundSlider.type='range'; roundSlider.min=0; roundSlider.max=20; roundSlider.step=1;
  roundSlider.value = loc.labelRound ?? 4; roundSlider.className = 'sp-slider';
  const roundVal = document.createElement('span'); roundVal.className = 'sp-slider-val';
  roundVal.textContent = `${loc.labelRound ?? 4}px`;
  roundSlider.addEventListener('input', () => { roundVal.textContent = `${roundSlider.value}px`; });
  roundSlider.addEventListener('change', () => { locations[locIdx].labelRound = parseInt(roundSlider.value); buildTooltipStyles(); save(); });
  roundRow.appendChild(roundSlider); roundRow.appendChild(roundVal);
  panel.appendChild(roundRow);

  // Font size slider
  const lblSizeRow = document.createElement('div'); lblSizeRow.className = 'lep-row';
  lblSizeRow.innerHTML = '<span class="lep-label">Size</span>';
  const sizeSlider = document.createElement('input');
  sizeSlider.type='range'; sizeSlider.min=8; sizeSlider.max=18; sizeSlider.step=1;
  sizeSlider.value = loc.labelSize ?? 11; sizeSlider.className = 'sp-slider';
  const sizeVal = document.createElement('span'); sizeVal.className = 'sp-slider-val';
  sizeVal.textContent = `${loc.labelSize ?? 11}px`;
  sizeSlider.addEventListener('input', () => { sizeVal.textContent = `${sizeSlider.value}px`; });
  sizeSlider.addEventListener('change', () => {
    preserveLabelScreenPosition(locIdx, () => {
      locations[locIdx].labelSize = parseInt(sizeSlider.value);
      buildTooltipStyles();
    });
    save();
  });
  lblSizeRow.appendChild(sizeSlider); lblSizeRow.appendChild(sizeVal);
  panel.appendChild(lblSizeRow);

  const numSizeRow = document.createElement('div');
  numSizeRow.className = 'lep-row';
  numSizeRow.innerHTML = '<span class="lep-label"># size</span>';
  const numSizeSlider = document.createElement('input');
  numSizeSlider.type = 'range';
  numSizeSlider.min = 50;
  numSizeSlider.max = 180;
  numSizeSlider.step = 5;
  numSizeSlider.value = loc.labelNumberSize ?? 85;
  numSizeSlider.className = 'sp-slider';
  const numSizeVal = document.createElement('span');
  numSizeVal.className = 'sp-slider-val';
  numSizeVal.textContent = `${loc.labelNumberSize ?? 85}%`;
  numSizeSlider.addEventListener('input', () => { numSizeVal.textContent = `${numSizeSlider.value}%`; });
  numSizeSlider.addEventListener('change', () => {
    preserveLabelScreenPosition(locIdx, () => {
      locations[locIdx].labelNumberSize = parseInt(numSizeSlider.value, 10);
      rebuildMarkers();
    });
    renderLocList(); save();
  });
  numSizeRow.appendChild(numSizeSlider);
  numSizeRow.appendChild(numSizeVal);
  panel.appendChild(numSizeRow);

  const alignRow = document.createElement('div');
  alignRow.className = 'lep-row';
  alignRow.innerHTML = '<span class="lep-label">Align</span>';
  [
    ['left', 'Left'],
    ['center', 'Center'],
    ['right', 'Right'],
  ].forEach(([value, label]) => {
    const btn = document.createElement('button');
    btn.className = 'sp-btn label-align-btn' + ((loc.labelTextAlign || 'center') === value ? ' active' : '');
    btn.textContent = label;
    btn.addEventListener('click', () => {
      preserveLabelScreenPosition(locIdx, () => {
        locations[locIdx].labelTextAlign = value;
        buildTooltipStyles();
      });
      renderLocList(); save();
    });
    alignRow.appendChild(btn);
  });
  panel.appendChild(alignRow);

  // Text / BG / Border color pickers
  [
    { key: 'labelNumberColor', label: '# Color',  def: loc.labelTextColor || '#18181b' },
    { key: 'labelTextColor',   label: 'Text',     def: '#18181b' },
    { key: 'labelBg',          label: 'Label BG', def: '#ffffff', transparent: true },
    { key: 'labelBorderColor', label: 'Border',   def: loc.markerColor || '#89b4fa', transparent: true },
  ].forEach(({ key, label, def, transparent }) => {
    const row = document.createElement('div'); row.className = 'lep-row';
    row.innerHTML = `<span class="lep-label">${label}</span>`;
    const inp = document.createElement('input'); inp.type = 'color';
    inp.value = loc[key] && loc[key] !== 'transparent' ? loc[key] : def;
    inp.style.cssText = 'width:34px;height:24px;border:none;border-radius:5px;cursor:pointer;padding:1px;flex-shrink:0;';
    inp.addEventListener('input', () => {
      preserveLabelScreenPosition(locIdx, () => {
        locations[locIdx][key] = inp.value;
        buildTooltipStyles();
      });
      save();
    });
    row.appendChild(inp);
    if (transparent) {
      const clearBtn = document.createElement('button');
      clearBtn.className = 'sp-btn transparent-toggle' + (loc[key] === 'transparent' ? ' active' : '');
      clearBtn.textContent = 'Transparent';
      clearBtn.addEventListener('click', () => {
        preserveLabelScreenPosition(locIdx, () => {
          locations[locIdx][key] = locations[locIdx][key] === 'transparent' ? inp.value : 'transparent';
          buildTooltipStyles();
        });
        renderLocList(); save();
      });
      row.appendChild(clearBtn);
    }
    panel.appendChild(row);
  });

  // Apply all labels button
  const lblAllRow = document.createElement('div'); lblAllRow.className = 'lep-row';
  lblAllRow.style.justifyContent = 'flex-end';
  const lblAllBtn = document.createElement('button');
  lblAllBtn.className = 'palette-apply'; lblAllBtn.textContent = '↓ Apply label style to all stops';
  lblAllBtn.addEventListener('click', () => {
    const src = locations[locIdx];
    const keys = [
      'labelMode','labelShowNumber','labelShowName','labelShowDate','labelShowNotes',
      'labelPos','labelRound','labelSize','labelNumberSize','labelTextAlign','labelNumberColor','labelTextColor','labelBg','labelBorderColor','labelArrow',
    ];
    locations.forEach((l, j) => { if (j !== locIdx) keys.forEach(k => { l[k] = src[k]; }); });
    rebuildMarkers(); renderLocList(); save();
  });
  lblAllRow.appendChild(lblAllBtn);
  panel.appendChild(lblAllRow);

  return panel;
}

// ── Render location list ──────────────────────────────────────────────────────
function rememberPanelScrollPositions(root) {
  root.querySelectorAll('[data-scroll-key]').forEach(node => {
    panelScrollPositions[node.dataset.scrollKey] = node.scrollTop;
  });
}

function restorePanelScrollPositions(root) {
  root.querySelectorAll('[data-scroll-key]').forEach(node => {
    const saved = panelScrollPositions[node.dataset.scrollKey];
    if (saved != null) node.scrollTop = saved;
  });
}

function renderLocList() {
  renderNextModeBtns();
  const el = document.getElementById('loc-list');
  const listScrollTop = el.scrollTop;
  rememberPanelScrollPositions(el);

  el.innerHTML = '';

  if (!locations.length) {
    el.innerHTML = '<div class="empty-hint">Search a place or click "Pick on map" to start your trip.</div>';
    return;
  }

  locations.forEach((loc, i) => {
    if (i > 0) {
      const r    = routes.find(r => r.fromIdx === i-1 && r.toIdx === i);
      const rIdx = routes.indexOf(r);
      const conn = document.createElement('div');
      conn.className = 'connector';

      // Top row: bar + mode buttons + style toggle
      const row = document.createElement('div');
      row.className = 'connector-row';
      const bar = document.createElement('div');
      bar.className = 'connector-bar';
      row.appendChild(bar);
      if (r) {
        row.appendChild(makeSegmentModeBtns(rIdx, r.type));
        const swatch = document.createElement('div');
        swatch.style.cssText = `width:8px;height:8px;border-radius:50%;background:${r.color ?? ROUTE_META[r.type].color};flex-shrink:0;`;
        row.appendChild(swatch);
        const toggle = document.createElement('button');
        toggle.className = 'style-toggle' + (expandedIdx === rIdx ? ' open' : '');
        toggle.textContent = '✦'; toggle.title = 'Style segment';
        toggle.addEventListener('click', () => {
          expandedIdx = expandedIdx === rIdx ? null : rIdx;
          expandedPalette = null;
          renderLocList();
        });
        row.appendChild(toggle);
      }
      conn.appendChild(row);

      // Style panel (expanded)
      if (r && expandedIdx === rIdx) conn.appendChild(makeStylePanel(rIdx, r));

      el.appendChild(conn);
    }

    const item = document.createElement('div');
    item.className = 'list-item'; item.id = `loc-item-${i}`;
    const sub = [loc.date, `${loc.lat.toFixed(4)}, ${loc.lng.toFixed(4)}`].filter(Boolean).join(' · ');
    item.innerHTML =
      `<div class="loc-num" style="background:${loc.markerColor||'var(--accent)'};">${i+1}</div>
       <div class="item-body">
         <div class="item-name">${loc.name}</div>
         <div class="item-sub">${sub}</div>
       </div>
       <button class="btn-sm edit" title="Edit">✎</button>
       <button class="btn-sm fly"  title="Fly to">⌖</button>
       <button class="btn-sm del"  title="Remove">✕</button>`;
    item.querySelector('.edit').addEventListener('click', () => {
      expandedLocIdx = expandedLocIdx === i ? null : i;
      renderLocList();
    });
    item.querySelector('.fly').addEventListener('click', () => map.flyTo([loc.lat, loc.lng], 10));
    item.querySelector('.del').addEventListener('click', () => deleteLocation(i));
    el.appendChild(item);

    if (expandedLocIdx === i) el.appendChild(makeLocEditPanel(i));
  });

  const restoreScroll = () => {
    el.scrollTop = listScrollTop;
    restorePanelScrollPositions(el);
  };
  restoreScroll();
  requestAnimationFrame(restoreScroll);
}

// ── Change route type ─────────────────────────────────────────────────────────
async function changeRouteType(idx, newType) {
  routes[idx].type = newType;
  clearRouteLayer(idx);
  await drawRoute(idx);
  renderLocList();
  save();
}

// ── Fit map ───────────────────────────────────────────────────────────────────
function fitAll() {
  if (!locations.length) return;
  const bounds = L.latLngBounds(locations.map(l => [l.lat, l.lng])).pad(0.22);
  map.fitBounds(bounds, { maxZoom: 12 });
}

// ── Storage ───────────────────────────────────────────────────────────────────
function save() {
  if (IS_EMBED) return;
  localStorage.setItem('trip-mapper-v2', JSON.stringify(makeTripData()));
}

function normalizeRoute(r) {
  const shape = r.shape === 'curve' ? 'curve' : 'route';
  return {
    fromIdx: r.fromIdx, toIdx: r.toIdx, type: r.type || 'car',
    color:  r.color  ?? (r.colorMode === 'custom' ? r.customColor : null),
    dash:   r.dash   ?? (r.style === 'dashed' ? 'dashed' : r.style === 'dotted' ? 'dotted' : 'solid'),
    shape,
    weight: r.weight ?? null,
  };
}

function currentSettings() {
  return {
    uiTheme: document.documentElement.getAttribute('data-theme') || 'dark',
    mapTheme: document.getElementById('theme-select').value || 'voyager',
    labelFont: document.getElementById('label-font-select').value || 'Noto Sans KR',
    paletteOrder: paletteOrderSettings(),
  };
}

function makeTripData() {
  return {
    version: 2,
    settings: currentSettings(),
    locations,
    routes,
  };
}

function applyTripSettings(settings = {}, { persist = !IS_EMBED } = {}) {
  const uiTheme = settings.uiTheme || localStorage.getItem('trip-mapper-ui-theme') || 'dark';
  const mapTheme = settings.mapTheme || localStorage.getItem('trip-mapper-map-theme') || 'voyager';
  const labelFont = settings.labelFont || settings.font || localStorage.getItem('trip-mapper-label-font') || localStorage.getItem('trip-mapper-font') || 'Noto Sans KR';

  applyPaletteOrderSettings(settings.paletteOrder || {});
  applyUiTheme(uiTheme, { persist });
  document.getElementById('theme-select').value = mapTheme;
  setMapTheme(mapTheme);
  document.getElementById('label-font-select').value = labelFont;
  applyLabelFont(labelFont, { persist });
}

async function applyTripData(data, { persist = true } = {}) {
  const d = Array.isArray(data) ? { locations: data, routes: [], settings: {} } : (data || {});
  locations = (d.locations || []).map(normalizeLoc);
  routes = (d.routes || []).map(normalizeRoute);
  applyTripSettings(d.settings || {}, { persist });
  expandedIdx = null;
  expandedPalette = null;
  expandedLocIdx = null;
  await rebuildAll();
  fitAll();
  if (persist) save();
}

function load() {
  try {
    const raw = localStorage.getItem('trip-mapper-v2');
    if (!raw) return;
    const d = JSON.parse(raw);
    locations = (d.locations || []).map(normalizeLoc);
    routes = (d.routes || []).map(normalizeRoute);
    applyTripSettings(d.settings || {}, { persist: false });
  } catch {}
}

async function loadTripFromUrl(url) {
  try {
    const res = await fetch(url, { cache: 'no-cache' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    await applyTripData(await res.json(), { persist: false });
  } catch (err) {
    toast(`Could not load trip: ${err.message}`);
    await rebuildAll();
    fitAll();
  }
}

// ── Full rebuild ──────────────────────────────────────────────────────────────
async function rebuildAll() {
  clearLocMarkers();
  routeLayers.forEach((_, i) => clearRouteLayer(i));
  routeLayers = [];
  buildTooltipStyles();
  locations.forEach(addLocMarker);
  for (let i = 0; i < routes.length; i++) await drawRoute(i);
  renderLocList();
}

// ── Add location with auto-route ──────────────────────────────────────────────
function makeRoute(fromIdx, toIdx) {
  return { fromIdx, toIdx, type: nextRouteType, color: null, dash: 'solid', shape: 'route', weight: null };
}

async function addLocationAuto(name, lat, lng) {
  const prevIdx = locations.length - 1;
  const locIdx  = locations.length;
  locations.push(locWithInheritedLabelStyle({ name, lat, lng }, locations[prevIdx]));
  addLocMarker(locations[locIdx], locIdx);

  if (prevIdx >= 0) {
    const rIdx = routes.length;
    routes.push(makeRoute(prevIdx, locIdx));
    await drawRoute(rIdx);
  }

  fitAll(); renderLocList(); save();
  toast(`Added "${name}"`);
}

// ── Delete location (chain reconnect) ─────────────────────────────────────────
async function deleteLocation(idx) {
  const hasPrev = idx > 0, hasNext = idx < locations.length - 1;
  const nextR = routes.find(r => r.fromIdx === idx && r.toIdx === idx+1);
  const prevR = routes.find(r => r.toIdx === idx && r.fromIdx === idx-1);
  const reconnectType = (nextR || prevR)?.type || 'car';

  clearLocMarkers();
  routeLayers.forEach((_, i) => clearRouteLayer(i));
  routeLayers = [];
  expandedIdx = null;
  expandedLocIdx = expandedLocIdx === idx ? null : expandedLocIdx > idx ? expandedLocIdx - 1 : expandedLocIdx;

  locations.splice(idx, 1);
  routes = routes.filter(r => r.fromIdx !== idx && r.toIdx !== idx);
  routes.forEach(r => {
    if (r.fromIdx > idx) r.fromIdx--;
    if (r.toIdx   > idx) r.toIdx--;
  });

  if (hasPrev && hasNext) {
    routes.push({ fromIdx: idx-1, toIdx: idx, type: reconnectType, color: null, dash: 'solid', shape: 'route', weight: null });
    routes.sort((a, b) => a.fromIdx - b.fromIdx);
  }

  locations.forEach(addLocMarker);
  for (let i = 0; i < routes.length; i++) await drawRoute(i);
  renderLocList(); save();
}

// ── Search ────────────────────────────────────────────────────────────────────
let searchDebounce = null;

function showSearchResults(results) {
  const drop = document.getElementById('search-drop');
  drop.innerHTML = '';
  if (!results.length) {
    drop.innerHTML = '<div class="s-item" style="cursor:default;color:var(--fg2);">No results found.</div>';
    drop.style.display = 'flex'; return;
  }
  results.forEach(r => {
    const item = document.createElement('div');
    item.className = 's-item';
    item.innerHTML = `<div class="s-item-name">${r.name}</div><div class="s-item-sub">${r.displayName}</div>`;
    item.addEventListener('click', () => {
      drop.style.display = 'none';
      document.getElementById('loc-search').value = '';
      addLocationAuto(r.name, r.lat, r.lng);
    });
    drop.appendChild(item);
  });
  drop.style.display = 'flex';
}

async function doSearch() {
  const q = document.getElementById('loc-search').value.trim(); if (!q) return;
  const btn = document.getElementById('btn-search');
  btn.textContent = '…'; btn.disabled = true;
  try { showSearchResults(await geocodeSearch(q)); }
  catch { toast('Search failed. Check your connection.'); }
  btn.textContent = 'Go'; btn.disabled = false;
}

document.getElementById('loc-search').addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); doSearch(); } });
document.getElementById('loc-search').addEventListener('input', () => {
  clearTimeout(searchDebounce);
  const q = document.getElementById('loc-search').value.trim();
  if (!q) { document.getElementById('search-drop').style.display = 'none'; return; }
  searchDebounce = setTimeout(doSearch, 500);
});
document.getElementById('btn-search').addEventListener('click', doSearch);
document.addEventListener('click', e => {
  if (!e.target.closest('#search-drop') && !e.target.closest('#loc-search') && e.target.id !== 'btn-search')
    document.getElementById('search-drop').style.display = 'none';
});

// ── Pick on map ───────────────────────────────────────────────────────────────
let pickMode = false;
let pickEditIdx = null;

function enterPickMode(editIdx = null) {
  pickMode = true;
  pickEditIdx = Number.isInteger(editIdx) ? editIdx : null;
  document.getElementById('map').classList.add('pick-mode');
  const btn = document.getElementById('btn-pick-loc');
  btn.textContent = pickEditIdx == null ? '✕ Cancel pick' : `✕ Cancel move ${pickEditIdx + 1}`;
  btn.classList.remove('btn-green');
  btn.classList.add('btn-red');
  toast(pickEditIdx == null ? 'Click anywhere on the map to place a stop.' : `Click the map to move stop ${pickEditIdx + 1}.`);
}

function exitPickMode() {
  pickMode = false;
  pickEditIdx = null;
  document.getElementById('map').classList.remove('pick-mode');
  const btn = document.getElementById('btn-pick-loc');
  btn.textContent = '📌 Pick on map';
  btn.classList.remove('btn-red');
  btn.classList.add('btn-green');
  btn.disabled = false;
}

document.getElementById('btn-pick-loc').addEventListener('click', () => {
  if (pickMode) { exitPickMode(); return; }
  enterPickMode();
});

document.addEventListener('keydown', e => { if (e.key === 'Escape' && pickMode) exitPickMode(); });

map.on('click', async e => {
  if (!pickMode) return;
  const editIdx = pickEditIdx;
  exitPickMode();
  const { lat, lng } = e.latlng;
  const btn = document.getElementById('btn-pick-loc');
  btn.textContent = '📌 Resolving…'; btn.disabled = true;
  const name = await reverseGeocode(lat, lng);
  btn.textContent = '📌 Pick on map'; btn.disabled = false;
  if (editIdx == null) {
    await addLocationAuto(name, lat, lng);
  } else {
    await updateLocationFromPlace(editIdx, { name, lat, lng });
  }
});

// ── Map theme ─────────────────────────────────────────────────────────────────
document.getElementById('theme-select').addEventListener('change', e => {
  setMapTheme(e.target.value);
  localStorage.setItem('trip-mapper-map-theme', e.target.value);
});

// ── Export / Import / Clear ───────────────────────────────────────────────────
document.getElementById('btn-export').addEventListener('click', () => {
  const blob = new Blob([JSON.stringify(makeTripData(), null, 2)], { type: 'application/json' });
  Object.assign(document.createElement('a'), { href: URL.createObjectURL(blob), download: 'trip-mapper.json' }).click();
});
document.getElementById('btn-import').addEventListener('click', () => document.getElementById('file-input').click());
document.getElementById('file-input').addEventListener('change', async e => {
  const file = e.target.files[0]; if (!file) return;
  const reader = new FileReader();
  reader.onload = async ev => {
    try {
      await applyTripData(JSON.parse(ev.target.result));
      toast('Imported successfully.');
    } catch { alert('Invalid JSON file.'); }
  };
  reader.readAsText(file);
  e.target.value = '';
});
document.getElementById('btn-clear').addEventListener('click', () => {
  if (!confirm('Delete all locations and routes?')) return;
  clearLocMarkers();
  routeLayers.forEach((_, i) => clearRouteLayer(i));
  locations = []; routes = []; routeLayers = []; expandedIdx = null;
  renderLocList(); save();
});

// ── Font ──────────────────────────────────────────────────────────────────────
let _labelFontLink = null;
function applyLabelFont(name, { persist = true } = {}) {
  const font = FONTS.find(f => f.name === name) || FONTS[0];
  if (font.gf) {
    if (!_labelFontLink) {
      _labelFontLink = document.createElement('link');
      _labelFontLink.rel = 'stylesheet'; document.head.appendChild(_labelFontLink);
    }
    _labelFontLink.href = `https://fonts.googleapis.com/css2?family=${font.gf}&display=swap`;
  }
  document.documentElement.style.setProperty('--label-font-family', font.stack);
  if (persist) localStorage.setItem('trip-mapper-label-font', name);
}
document.getElementById('label-font-select').addEventListener('change', e => applyLabelFont(e.target.value));

// ── Boot ──────────────────────────────────────────────────────────────────────
// Populate label font select
FONTS.forEach(f => {
  const opt = document.createElement('option'); opt.value = f.name; opt.textContent = f.name;
  document.getElementById('label-font-select').appendChild(opt);
});

async function boot() {
  if (IS_EMBED) document.body.classList.add('embed-mode');

  applyTripSettings();
  if (!IS_EMBED) enableLabelDrag();

  const tripUrl = URL_PARAMS.get('trip');
  if (tripUrl) {
    await loadTripFromUrl(tripUrl);
  } else {
    load();
    await rebuildAll();
    fitAll();
  }

  if (IS_EMBED) {
    setTimeout(() => map.invalidateSize(), 0);
  }
}

boot();
