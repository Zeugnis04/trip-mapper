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
  // Minimal, label-free basemaps — closest keyless option to a plain outline map.
  light_min: { url: 'https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png',
               attr: '© <a href="https://openstreetmap.org/copyright">OSM</a> contributors, © <a href="https://carto.com/">CARTO</a>', sub: 'abcd' },
  dark_min:  { url: 'https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png',
               attr: '© <a href="https://openstreetmap.org/copyright">OSM</a> contributors, © <a href="https://carto.com/">CARTO</a>', sub: 'abcd' },
};

// ── Route type metadata ───────────────────────────────────────────────────────
const ROUTE_META = {
  car:     { color: '#e67e22', dashArray: null,   weight: 4, routing: 'osrm-driving' },
  walk:    { color: '#27ae60', dashArray: '5 5',  weight: 3, routing: 'osrm-foot'    },
  bicycle: { color: '#f39c12', dashArray: '5 5',  weight: 3, routing: 'osrm-cycling' },
  flight:  { color: '#3498db', dashArray: '10 6', weight: 4, routing: 'greatcircle'  },
  ferry:   { color: '#16a085', dashArray: '5 10', weight: 3, routing: 'straight'     },
  subway:  { color: '#9b59b6', dashArray: null,   weight: 4, routing: 'straight'     },
  train:   { color: '#c0392b', dashArray: null,   weight: 4, routing: 'straight'     },
};

// ── SVG icon library ──────────────────────────────────────────────────────────
const ICONS = {
  moon:    `<svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor"><path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278z"/></svg>`,
  sun:     `<svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor"><path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707"/></svg>`,
  pin:     `<svg viewBox="0 0 16 16" width="13" height="13" fill="currentColor"><path d="M8 1a5 5 0 0 0-5 5c0 4 5 9 5 9s5-5 5-9a5 5 0 0 0-5-5m0 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/></svg>`,
  edit:    `<svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1.5 14.5 4 5.5 13 2 14l1-3.5z"/><path d="M11 2.5l2.5 2.5"/></svg>`,
  flyTo:   `<svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="8" cy="8" r="2.5"/><line x1="8" y1="1" x2="8" y2="5"/><line x1="8" y1="11" x2="8" y2="15"/><line x1="1" y1="8" x2="5" y2="8"/><line x1="11" y1="8" x2="15" y2="8"/></svg>`,
  del:     `<svg viewBox="0 0 16 16" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="4" y1="4" x2="12" y2="12"/><line x1="12" y1="4" x2="4" y2="12"/></svg>`,
  car:     `<svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor"><path d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.36c1 0 1.904.596 2.298 1.515l.792 1.848a.807.807 0 0 0 .381.404c.5.25.855.715.965 1.262l.335 1.679c.033.161.049.325.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413c0-.165.016-.329.049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.807.807 0 0 0 .381-.404zM3 10a1 1 0 1 0 2 0 1 1 0 0 0-2 0zm9 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg>`,
  walk:    `<svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor"><path d="M9.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M6.44 3.752A.75.75 0 0 1 7 3.5h1.445c.742 0 1.32.643 1.243 1.38l-.43 4.083a1.8 1.8 0 0 1-.088.395l-.318.906.213.242a.75.75 0 0 1-.28 1.2l-.158.055A.75.75 0 0 1 8 13.5v1.75a.75.75 0 0 1-1.5 0V13.5a.75.75 0 0 1 .14-.442l.65-.929-.327-1.164-2.2 1.246a.75.75 0 0 1-.74-1.302l2.53-1.437.368-3.502L7 8.25V10a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .44-.688l.5-.248"/></svg>`,
  bicycle: `<svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor"><path d="M4 4.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1v.5h4.14l.386-1.158A.5.5 0 0 1 11 4h1a.5.5 0 0 1 0 1h-.64l-.444 1.332A2.5 2.5 0 1 1 9.5 7.5l-.002-.068L8.75 6H5.614l-.39 1.17A2.5 2.5 0 1 1 2.5 7.5a2.5 2.5 0 0 1 2.395 1.786L4.5 8.5H5v-.5A.5.5 0 0 1 4.5 8H4a.5.5 0 0 1-.5-.5zm5.5 1-.386 1.158A2.5 2.5 0 0 1 11.5 6zm-7 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m7 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/></svg>`,
  flight:  `<svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor"><path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849z"/></svg>`,
  ferry:   `<svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor"><path d="M8 1.5 3.5 5h9zm-6 4h12v5H2zm0 6q2-1.5 4 0t4 0 4 0v1.5q-2-1.5-4 0t-4 0-4 0z"/></svg>`,
  subway:  `<svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor"><path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v8H3zm2 1v2h2.5V3zm3.5 0v2H11V3zm-3.5 3v2h6V6zM2 11h12l1 3H1zm3 1.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5zm6 0a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z"/></svg>`,
  train:   `<svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor"><path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v7.5H3zm2 1v3h2.5V3zm3.5 0v3H11V3zM2 10.5h12l1.5 4h-15zm3 2a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5zm6 0a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z"/></svg>`,
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

// ── Custom palettes ───────────────────────────────────────────────────────────
// User-defined palettes, persisted and merged into the built-ins for both pins
// and routes. Shape: [{ name, colors: ['#rrggbb', …] }].
let customPalettes = [];
function loadCustomPalettes() {
  try {
    const v = JSON.parse(localStorage.getItem('trip-mapper-custom-palettes') || '[]');
    customPalettes = Array.isArray(v) ? v.filter(p => p && p.name && Array.isArray(p.colors)) : [];
  } catch { customPalettes = []; }
}
function saveCustomPalettes() {
  localStorage.setItem('trip-mapper-custom-palettes', JSON.stringify(customPalettes));
}
// Built-ins first, then custom (custom can override a built-in by using its name).
function allPalettes() {
  const o = { ...PALETTES };
  customPalettes.forEach(p => { if (p.colors.length) o[p.name] = p.colors; });
  return o;
}
function getPaletteColors(name) {
  if (name in PALETTES) return PALETTES[name];
  const c = customPalettes.find(p => p.name === name);
  return c ? c.colors : null;
}

// Mode-of-transport emoji controls — per segment. `targets` is one route index or an
// array (bulk). On/Bg/size are stored on each route (route.emoji / emojiBg / emojiSize)
// so every segment toggles independently. State shown reflects the first target.
function makeRouteEmojiRow(targets) {
  const ids = (Array.isArray(targets) ? targets : [targets]).filter(i => routes[i]);
  const first = routes[ids[0]] || {};
  const on = !!first.emoji;
  const bg = !!first.emojiBg;
  const sz = first.emojiSize ?? 16;
  // Only the targeted segments' emoji markers need redrawing — not their geometry.
  const apply = async (fn) => {
    ids.forEach(i => { if (routes[i]) fn(routes[i]); });
    if (routes[ids[0]]) rememberRouteStyle(routes[ids[0]]);
    ids.forEach(i => redrawRouteEmojiOnly(i));
    renderLocList(); save();
  };

  const row = document.createElement('div');
  row.className = 'sp-row';
  row.innerHTML = '<span class="sp-label">Emoji</span>';

  const toggle = document.createElement('button');
  toggle.className = 'sp-btn' + (on ? ' active' : '');
  toggle.textContent = on ? 'On' : 'Off';
  toggle.title = 'Show the transport emoji at the middle of this segment';
  toggle.addEventListener('click', () => apply(r => { r.emoji = !on; }));
  row.appendChild(toggle);

  const bgToggle = document.createElement('button');
  bgToggle.className = 'sp-btn' + (bg ? ' active' : '');
  bgToggle.textContent = bg ? 'Bg on' : 'Bg off';
  bgToggle.title = 'Draw a circular background behind the emoji';
  bgToggle.addEventListener('click', () => apply(r => { r.emojiBg = !bg; }));
  row.appendChild(bgToggle);

  const slider = document.createElement('input');
  slider.type = 'range'; slider.min = 8; slider.max = 80; slider.step = 1;
  slider.value = sz; slider.className = 'sp-slider';
  const val = document.createElement('span');
  val.className = 'sp-slider-val'; val.textContent = `${sz}px`;
  slider.addEventListener('input', () => { val.textContent = `${slider.value}px`; });
  slider.addEventListener('change', () => {
    const v = parseInt(slider.value, 10);
    ids.forEach(i => { if (routes[i]) routes[i].emojiSize = v; });
    if (routes[ids[0]]) rememberRouteStyle(routes[ids[0]]);
    ids.forEach(i => redrawRouteEmojiOnly(i));
    save();
  });
  row.appendChild(slider); row.appendChild(val);
  return row;
}

// Button shown in each palette section that opens the custom-palette editor.
function makeManagePalettesBtn() {
  const btn = document.createElement('button');
  btn.className = 'palette-apply';
  btn.textContent = `✎ Custom palettes${customPalettes.length ? ` (${customPalettes.length})` : ''}`;
  btn.addEventListener('click', openPalettesModal);
  return btn;
}
function openPalettesModal() {
  renderPalettesEditor();
  document.getElementById('palettes-modal').hidden = false;
}
function closePalettesModal() {
  document.getElementById('palettes-modal').hidden = true;
  saveCustomPalettes();
  renderLocList();   // reflect new/edited palettes in any open palette list
}
// Parse a comma/space/newline-separated list of hex codes (# optional) into
// normalized #rgb/#rrggbb colors, dropping anything invalid.
function parseColorList(str) {
  return (str || '').split(/[,\s]+/).map(s => s.trim()).filter(Boolean).map(s => {
    const c = s.startsWith('#') ? s : '#' + s;
    return /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(c) ? c : null;
  }).filter(Boolean);
}
function renderPalettesEditor() {
  const host = document.getElementById('palettes-editor');
  host.innerHTML = '';
  if (!customPalettes.length) {
    const empty = document.createElement('div');
    empty.className = 'modal-hint';
    empty.textContent = 'No custom palettes yet — click “+ New palette”.';
    host.appendChild(empty);
  }
  customPalettes.forEach((pal, pi) => {
    const card = document.createElement('div'); card.className = 'cpal-card';

    const head = document.createElement('div'); head.className = 'cpal-head';
    const name = document.createElement('input');
    name.type = 'text'; name.className = 'lep-input'; name.value = pal.name;
    name.addEventListener('change', () => { pal.name = name.value.trim() || pal.name; name.value = pal.name; saveCustomPalettes(); });
    const del = document.createElement('button');
    del.className = 'btn btn-red'; del.textContent = 'Delete';
    del.addEventListener('click', () => { customPalettes.splice(pi, 1); saveCustomPalettes(); renderPalettesEditor(); });
    head.appendChild(name); head.appendChild(del);
    card.appendChild(head);

    // Quick entry: type/paste color codes separated by commas.
    const bulk = document.createElement('input');
    bulk.type = 'text'; bulk.className = 'lep-input'; bulk.value = pal.colors.join(', ');
    bulk.placeholder = '#ff0000, #00ff00, 0000ff …';
    bulk.title = 'Comma-separated hex codes (# optional)';
    bulk.addEventListener('change', () => {
      const parsed = parseColorList(bulk.value);
      if (!parsed.length) { toast('No valid color codes found.'); bulk.value = pal.colors.join(', '); return; }
      pal.colors = parsed;
      saveCustomPalettes(); renderPalettesEditor();
    });
    card.appendChild(bulk);

    const colors = document.createElement('div'); colors.className = 'cpal-colors';
    pal.colors.forEach((hex, ci) => {
      const wrap = document.createElement('div'); wrap.className = 'cpal-swatch';
      const inp = document.createElement('input'); inp.type = 'color'; inp.value = hex;
      inp.addEventListener('input', () => { pal.colors[ci] = inp.value; saveCustomPalettes(); });
      const rm = document.createElement('button'); rm.className = 'cpal-rm'; rm.textContent = '×'; rm.title = 'Remove color';
      rm.addEventListener('click', () => { pal.colors.splice(ci, 1); saveCustomPalettes(); renderPalettesEditor(); });
      wrap.appendChild(inp); wrap.appendChild(rm);
      colors.appendChild(wrap);
    });
    const add = document.createElement('button');
    add.className = 'sp-btn'; add.textContent = '+ Color';
    add.addEventListener('click', () => { pal.colors.push('#3498db'); saveCustomPalettes(); renderPalettesEditor(); });
    colors.appendChild(add);
    card.appendChild(colors);
    host.appendChild(card);
  });
}

// ── Font options ──────────────────────────────────────────────────────────────
const FONTS = [
  { name: 'Noto Sans KR',    stack: '"Noto Sans KR","Apple SD Gothic Neo","Malgun Gothic",var(--emoji-font-family),system-ui,sans-serif', gf: 'Noto+Sans+KR:wght@400;500;700;800' },
  { name: 'Noto Serif CJK',  stack: '"Noto Serif KR","Noto Serif SC","Noto Serif TC",var(--emoji-font-family),serif',                   gf: 'Noto+Serif+KR:wght@400;500;600;700&family=Noto+Serif+SC:wght@400;500;600;700&family=Noto+Serif+TC:wght@400;500;600;700' },
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
// `css` styles the marker div; shapes that need the marker colour reference the
// `--mk` custom property (set in markerIconHtml) so gradients/rings can use it.
const LOC_SHAPES = {
  circle:   { css: 'border-radius:50%;',                                                                                                     label: '●' },
  ring:     { css: 'border-radius:50%;',                                                                                                     label: '◎' },
  hollow:   { css: 'border-radius:50%;background:#0000;box-shadow:inset 0 0 0 3px var(--mk);',                                               label: '○' },
  square:   { css: 'border-radius:3px;',                                                                                                     label: '■' },
  diamond:  { css: 'border-radius:2px;transform:rotate(45deg);',                                                                             label: '◆' },
  triangle: { css: 'clip-path:polygon(50% 0%,100% 100%,0% 100%);border-radius:0;',                                                          label: '▲' },
  pentagon: { css: 'clip-path:polygon(50% 0,100% 38%,82% 100%,18% 100%,0 38%);border-radius:0;',                                            label: '⬠' },
  hexagon:  { css: 'clip-path:polygon(25% 0,75% 0,100% 50%,75% 100%,25% 100%,0 50%);border-radius:0;',                                       label: '⬡' },
  star:     { css: 'clip-path:polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%);border-radius:0;',   label: '★' },
};

// ── State ─────────────────────────────────────────────────────────────────────
let locations    = [];
let routes       = [];
// Areas recorded independently of map stops, including places merely passed through.
let travelHistory = [];
let pendingHistoryEntry = null;
let locMarkers   = [];
let routeLayers  = [];
let routeHitLayers = [];                            // invisible wide lines for easier clicking
let routeEmojiMarkers = [];                        // midpoint transport-emoji markers (optional)
let showRouteEmoji = false;                        // show mode-of-transport emoji at route midpoints
let routeEmojiSize = 16;                            // px size of the midpoint transport emoji
let routeEmojiBg   = false;                         // draw a circular background behind the emoji (off = transparent)
let nextRouteType    = 'car';
let expandedPalette  = null;  // which palette accordion is open in style panel
// Unified selection: one kind at a time ('loc' | 'route'), one or many indices.
// One selected → full edit panel; many → compact bulk panel that edits all together.
let sel = { kind: null, idxs: [] };
let selAnchor = null;                             // pivot for shift/range selection
let showPalettes = false;                         // palette section collapsed by default
let showAdvancedLabel = false;                    // advanced label/typography options collapsed
let activeTab = 'pins';                           // left panel tab: 'pins' | 'routes'
let multiSelect = false;                          // plain clicks add/remove from selection (no Ctrl needed)
let onlyPins = false;                             // global: suppress every route, show pins only
function clearSelection() { sel = { kind: null, idxs: [] }; selAnchor = null; expandedPalette = null; }
// mods: { range } shift = contiguous range from anchor; { toggle } ctrl/cmd = add/remove one.
function selectItem(kind, i, mods = {}) {
  if (sel.kind !== kind) { sel = { kind, idxs: [] }; selAnchor = null; expandedPalette = null; }
  if (mods.range && selAnchor != null) {
    const lo = Math.min(selAnchor, i), hi = Math.max(selAnchor, i);
    sel.idxs = [];
    for (let k = lo; k <= hi; k++) sel.idxs.push(k);
  } else if (mods.toggle) {
    const pos = sel.idxs.indexOf(i);
    if (pos >= 0) sel.idxs.splice(pos, 1); else sel.idxs.push(i);
    selAnchor = i;
    if (!sel.idxs.length) { sel.kind = null; selAnchor = null; }
  } else if (sel.idxs.length === 1 && sel.idxs[0] === i) {
    clearSelection();                             // plain click on the lone selection: close
  } else {
    sel.idxs = [i]; selAnchor = i; expandedPalette = null;   // plain click: select just this
  }
  // Keep the visible tab in step with what's being edited (e.g. clicking a route
  // line on the map surfaces it in the Routes tab).
  if (sel.kind) activeTab = sel.kind === 'route' ? 'routes' : 'pins';
}
// Translate a mouse event's modifier keys into a selection intent.
function clickMods(e) {
  if (e && e.shiftKey) return { range: true };
  if (e && (e.ctrlKey || e.metaKey)) return { toggle: true };
  // Multi-select mode: a plain click behaves like Ctrl+click, so items accumulate.
  if (multiSelect) return { toggle: true };
  return {};
}
let paletteApplyMode = 'same'; // 'same' | 'sequential' | 'bytype'
let markerPaletteApplyMode = 'all'; // 'all' | 'sequential'
const paletteOrder = {};
const panelScrollPositions = {};
let lastPinStyle = null;
let lastLabelStyle = null;
let lastRouteStyle = null;
let lastMarkerPalette = null;
let lastRoutePalette = null;
const URL_PARAMS = new URLSearchParams(window.location.search);
const IS_STATIC = URL_PARAMS.get('static') === '1';
const IS_EMBED  = IS_STATIC || URL_PARAMS.get('embed') === '1' || URL_PARAMS.get('embed') === 'true';

// ── Map ───────────────────────────────────────────────────────────────────────
// zoomSnap:0 lets the map settle on fractional zoom levels → smooth, continuous
// zoom (incl. trackpad pinch, which the browser sends as ctrl+wheel). Higher
// wheelPxPerZoomLevel makes each scroll notch a finer step.
// preferCanvas: draw route lines on a <canvas> instead of SVG. html2canvas copies
// canvas pixels exactly, so image export no longer offsets routes from the pins
// (SVG overlay panes get re-rasterized at a slightly wrong position by html2canvas).
const map = L.map('map', {
  zoomSnap: 0,
  zoomDelta: 0.5,
  // Trackpads emit many smaller wheel deltas than a mouse. A lower threshold
  // makes their zoom feel responsive while leaving the +/- controls unchanged.
  wheelPxPerZoomLevel: 25,
  doubleClickZoom: false,
  // OSM repeats horizontally. Keep the interaction in the canonical copy so
  // overlays and reverse-geocoded coordinates do not drift past ±180°.
  worldCopyJump: true,
  preferCanvas: true,
}).setView([20, 0], 2);
map.createPane('country-selection');
map.getPane('country-selection').style.zIndex = 350;
map.createPane('area-hover');
map.getPane('area-hover').style.zIndex = 340;
map.createPane('history-overlay');
map.getPane('history-overlay').style.zIndex = 330;
let tileLayer = null;
function setMapTheme(key) {
  const t = THEMES[key] || THEMES.voyager;
  if (tileLayer) map.removeLayer(tileLayer);
  // crossOrigin lets the loaded tiles be drawn into a canvas for image export.
  tileLayer = L.tileLayer(t.url, { attribution: t.attr, subdomains: t.sub, maxZoom: t.maxZoom ?? 19, crossOrigin: true }).addTo(map);
}

// ── UI Theme ──────────────────────────────────────────────────────────────────
function applyUiTheme(theme, { persist = true } = {}) {
  document.documentElement.setAttribute('data-theme', theme);
  document.getElementById('btn-ui-theme').innerHTML = theme === 'dark' ? ICONS.moon : ICONS.sun;
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
const NOMINATIM_LANG = (navigator.languages && navigator.languages.length ? navigator.languages.join(',') : navigator.language) || 'en';
const GEOCODE_LIMIT = 8;
const GEOCODE_CACHE_LIMIT = 60;
const GEOCODE_CACHE = new Map();
const SEARCH_FEATURE_TYPES = new Set(['country', 'state', 'city', 'settlement']);
const SEARCH_LAYERS = new Set(['address', 'poi', 'railway', 'natural', 'manmade']);
let nominatimQueue = Promise.resolve();
let nominatimAvailableAt = 0;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function preferredLanguageCodes() {
  const langs = (navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || 'en']);
  const codes = [];
  langs.forEach(lang => {
    if (!lang) return;
    const code = lang.toLowerCase();
    codes.push(code);
    const base = code.split('-')[0];
    if (base && base !== code) codes.push(base);
  });
  codes.push('en');
  return [...new Set(codes)];
}

function parseCoordinateSearch(query) {
  const match = query.trim().match(/^(-?\d+(?:\.\d+)?)\s*(?:,|\s)\s*(-?\d+(?:\.\d+)?)$/);
  if (!match) return null;
  let first = parseFloat(match[1]);
  let second = parseFloat(match[2]);
  if (!Number.isFinite(first) || !Number.isFinite(second)) return null;

  let lat = first;
  let lng = second;
  if (Math.abs(first) > 90 && Math.abs(second) <= 90) {
    lat = second;
    lng = first;
  }
  if (Math.abs(lat) > 90 || Math.abs(lng) > 180) return null;
  return { lat, lng };
}

function canonicalLatLng(latlng) {
  const lng = ((latlng.lng + 180) % 360 + 360) % 360 - 180;
  return L.latLng(latlng.lat, lng);
}

function parseSearchOptions(query) {
  const options = { countryCodes: '', featureType: '', layer: '' };
  const countryCodes = new Set();
  const layers = new Set();
  let text = ` ${query.trim()} `;

  text = text.replace(/\s(?:country|cc)\s*[:=]\s*([a-z]{2}(?:\s*,\s*[a-z]{2})*)/gi, (_, rawCodes) => {
    rawCodes.split(',').map(c => c.trim().toLowerCase()).filter(c => /^[a-z]{2}$/.test(c))
      .forEach(code => countryCodes.add(code));
    return ' ';
  });

  const typePattern = '(?:country|state|city|settlement|address|poi|railway|natural|manmade)';
  const typeRe = new RegExp(`\\s(?:type|layer)\\s*[:=]\\s*(${typePattern}(?:\\s*,\\s*${typePattern})*)`, 'gi');
  text = text.replace(typeRe, (_, rawTypes) => {
    rawTypes.split(',').map(t => t.trim().toLowerCase()).forEach(type => {
      if (SEARCH_FEATURE_TYPES.has(type)) {
        options.featureType = type;
      } else if (SEARCH_LAYERS.has(type)) {
        layers.add(type);
      }
    });
    return ' ';
  });

  options.countryCodes = [...countryCodes].join(',');
  options.layer = options.featureType ? '' : [...layers].join(',');
  return { text: text.replace(/\s+/g, ' ').trim(), ...options };
}

function getMapSearchViewbox() {
  if (!map || typeof map.getBounds !== 'function' || map.getZoom() < 4) return '';
  const bounds = map.getBounds();
  const west = Math.max(-180, Math.min(180, bounds.getWest()));
  const south = Math.max(-90, Math.min(90, bounds.getSouth()));
  const east = Math.max(-180, Math.min(180, bounds.getEast()));
  const north = Math.max(-90, Math.min(90, bounds.getNorth()));
  if (![west, south, east, north].every(Number.isFinite) || west >= east || south >= north) return '';
  if ((east - west) > 170 && (north - south) > 70) return '';
  return [west, south, east, north].map(v => v.toFixed(5)).join(',');
}

function cacheGeocodeResult(key, results) {
  GEOCODE_CACHE.set(key, results);
  while (GEOCODE_CACHE.size > GEOCODE_CACHE_LIMIT) {
    GEOCODE_CACHE.delete(GEOCODE_CACHE.keys().next().value);
  }
}

function buildNominatimSearchUrl(query, options) {
  const url = new URL('https://nominatim.openstreetmap.org/search');
  url.searchParams.set('format', 'jsonv2');
  url.searchParams.set('limit', String(GEOCODE_LIMIT));
  url.searchParams.set('q', query);
  url.searchParams.set('addressdetails', '1');
  url.searchParams.set('namedetails', '1');
  url.searchParams.set('dedupe', '1');
  url.searchParams.set('accept-language', NOMINATIM_LANG);
  if (options.countryCodes) url.searchParams.set('countrycodes', options.countryCodes);
  if (options.featureType) url.searchParams.set('featureType', options.featureType);
  if (options.layer) url.searchParams.set('layer', options.layer);
  if (options.viewbox) url.searchParams.set('viewbox', options.viewbox);
  return url;
}

async function fetchNominatimJson(url) {
  const run = nominatimQueue.then(async () => {
    const wait = nominatimAvailableAt - Date.now();
    if (wait > 0) await sleep(wait);
    nominatimAvailableAt = Date.now() + 1100;
    const res = await fetch(url, { headers: { 'Accept-Language': NOMINATIM_LANG } });
    if (!res.ok) throw new Error(`Nominatim returned ${res.status}`);
    return res.json();
  });
  nominatimQueue = run.catch(() => {});
  return run;
}

function formatAddress(address = {}) {
  const parts = [
    [address.house_number, address.road].filter(Boolean).join(' '),
    address.neighbourhood || address.suburb || address.city_district,
    address.city || address.town || address.village || address.hamlet,
    address.state,
    address.country,
  ].filter(Boolean);
  return parts.join(', ');
}

function pickResultName(result, displayName) {
  const details = result.namedetails || {};
  for (const code of preferredLanguageCodes()) {
    if (details[`name:${code}`]) return details[`name:${code}`];
  }
  return result.name || details.name || result.address?.amenity || result.address?.shop ||
    result.address?.tourism || result.address?.historic || displayName.split(',')[0].trim();
}

function normalizeNominatimResult(result) {
  const lat = parseFloat(result.lat);
  const lng = parseFloat(result.lon);
  if (!Number.isFinite(lat) || !Number.isFinite(lng)) return null;
  const displayName = result.display_name || formatAddress(result.address) || `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
  const sourceId = result.osm_type && result.osm_id ? `${result.osm_type}:${result.osm_id}` : '';
  return {
    name: pickResultName(result, displayName),
    displayName,
    lat,
    lng,
    sourceId,
    address: result.address || {},
    addresstype: result.addresstype || result.type || '',
    category: result.category || result.class || '',
  };
}

function dedupeGeocodeResults(results) {
  const seen = new Set();
  return results.filter(result => {
    const key = result.sourceId || `${result.name}|${result.lat.toFixed(5)}|${result.lng.toFixed(5)}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

async function geocodeSearch(query) {
  const coords = parseCoordinateSearch(query);
  if (coords) {
    return [{
      name: 'Coordinates',
      displayName: `${coords.lat.toFixed(5)}, ${coords.lng.toFixed(5)}`,
      lat: coords.lat,
      lng: coords.lng,
      sourceId: `coord:${coords.lat.toFixed(6)},${coords.lng.toFixed(6)}`,
    }];
  }

  const parsed = parseSearchOptions(query);
  if (!parsed.text) return [];
  const options = { ...parsed, viewbox: getMapSearchViewbox() };
  const cacheKey = JSON.stringify({ q: parsed.text, countryCodes: parsed.countryCodes, featureType: parsed.featureType, layer: parsed.layer, viewbox: options.viewbox, lang: NOMINATIM_LANG });
  if (GEOCODE_CACHE.has(cacheKey)) return GEOCODE_CACHE.get(cacheKey);

  const data = await fetchNominatimJson(buildNominatimSearchUrl(parsed.text, options));
  const results = dedupeGeocodeResults(data.map(normalizeNominatimResult).filter(Boolean));
  cacheGeocodeResult(cacheKey, results);
  return results;
}
async function reverseGeocode(lat, lng) {
  try {
    const data = await reverseGeocodeData(lat, lng);
    return (data.name || data.display_name || '').split(',')[0].trim() || 'My Location';
  } catch { return 'My Location'; }
}

// Nominatim provides both the administrative name under the pointer and (on a
// country-level request) a GeoJSON boundary. Requests use the same queue as the
// normal search, keeping the public service rate-limited.
async function reverseGeocodeData(lat, lng, { zoom, polygon = false } = {}) {
  const url = new URL('https://nominatim.openstreetmap.org/reverse');
  url.searchParams.set('format', 'jsonv2');
  url.searchParams.set('lat', lat);
  url.searchParams.set('lon', lng);
  url.searchParams.set('addressdetails', '1');
  url.searchParams.set('namedetails', '1');
  url.searchParams.set('accept-language', NOMINATIM_LANG);
  if (Number.isInteger(zoom)) url.searchParams.set('zoom', String(zoom));
  if (polygon) {
    url.searchParams.set('polygon_geojson', '1');
    // Keep the outline detailed enough to preserve coastlines and province edges.
    url.searchParams.set('polygon_threshold', '0.001');
  }
  return fetchNominatimJson(url);
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

// A simple, natural arc between two points: a quadratic Bézier. By default the
// control point is the midpoint pushed perpendicular by a fixed fraction of the
// segment length (DEFAULT_BEND). If the segment has a saved `curveCtrl` (set by
// dragging the line on the map), that geographic point is used instead — so both
// how much it bows and which way come straight from where the user dragged.
// Working in projected pixel space keeps the curve scale-invariant.
const CURVE_DEFAULT_BEND = 0.2;
const CURVE_PROJECT_ZOOM = 8;
function curveControlPoint(crs, p1, p2, route) {
  if (route && route.curveCtrl && Number.isFinite(route.curveCtrl.lat) && Number.isFinite(route.curveCtrl.lng)) {
    return crs.latLngToPoint(L.latLng(route.curveCtrl.lat, route.curveCtrl.lng), CURVE_PROJECT_ZOOM);
  }
  const dx = p2.x - p1.x, dy = p2.y - p1.y;
  return L.point((p1.x + p2.x) / 2 - dy * CURVE_DEFAULT_BEND, (p1.y + p2.y) / 2 + dx * CURVE_DEFAULT_BEND);
}
function curvedPoints(from, to, route, n = 64) {
  const crs = map.options.crs || L.CRS.EPSG3857;
  const z = CURVE_PROJECT_ZOOM;
  const p1 = crs.latLngToPoint(L.latLng(from.lat, from.lng), z);
  const p2 = crs.latLngToPoint(L.latLng(to.lat, to.lng), z);
  if (p1.x === p2.x && p1.y === p2.y) return [[from.lat, from.lng]];
  const c = curveControlPoint(crs, p1, p2, route);
  const pts = [];
  for (let i = 0; i <= n; i++) {
    const t = i / n, mt = 1 - t;
    const x = mt * mt * p1.x + 2 * mt * t * c.x + t * t * p2.x;
    const y = mt * mt * p1.y + 2 * mt * t * c.y + t * t * p2.y;
    const ll = crs.pointToLatLng(L.point(x, y), z);
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
  if (route.shape === 'curve') return curvedPoints(from, to, route);
  const { routing } = ROUTE_META[route.type];
  if (routing === 'greatcircle') return greatCirclePoints(from.lat, from.lng, to.lat, to.lng);
  if (routing.startsWith('osrm-')) {
    try { return await fetchOsrmPoints(routing.replace('osrm-',''), from, to); }
    catch { toast('Routing unavailable — drawing straight line.'); }
  }
  return [[from.lat, from.lng], [to.lat, to.lng]];
}

// ── Polyline options ──────────────────────────────────────────────────────────
// Base dash patterns. route.dashScale is *density*: higher → more dashes, so the
// pattern lengths shrink (scale = 1/density). Dotted uses round caps to read as
// dots; 'default' falls back to the transport type's own pattern.
const DASH_PATTERNS = {
  dashed:  [10, 7],
  dotted:  [1, 7],
  dashdot: [12, 6, 1, 6],
};
function polylineOpts(route) {
  const meta   = ROUTE_META[route.type];
  const color  = route.color ?? meta.color;
  const weight = route.weight ?? meta.weight;
  const scale  = 1 / (route.dashScale || 1);
  const base   = DASH_PATTERNS[route.dash];
  let dashArray, lineCap;
  if (route.dash === 'solid') {
    dashArray = null;
  } else if (base) {
    dashArray = base.map(n => Math.max(1, Math.round(n * scale))).join(' ');
    if (route.dash === 'dotted') lineCap = 'round';
  } else {
    dashArray = meta.dashArray;   // 'default' / auto
  }
  return { color, dashArray, weight, opacity: 0.88, ...(lineCap ? { lineCap } : {}) };
}

// ── Draw / clear routes ───────────────────────────────────────────────────────
async function drawRoute(idx) {
  const route = routes[idx]; if (!route) return;
  const from = locations[route.fromIdx], to = locations[route.toIdx];
  if (!from || !to) return;
  // "Only pins" (global) or a per-segment hide draws nothing — the stops stay, the
  // line and its midpoint emoji are removed. The segment lives on in the Routes tab,
  // so it can always be brought back from there.
  if (onlyPins || route.hidden) { clearRouteLayer(idx); return; }
  const points = await resolvePoints(route);
  if (!points.length) return;
  while (routeHitLayers.length <= idx) routeHitLayers.push(null);
  if (routeHitLayers[idx]) { map.removeLayer(routeHitLayers[idx]); routeHitLayers[idx] = null; }

  if (IS_EMBED) {
    const layer = L.polyline(points, polylineOpts(route)).addTo(map);
    layer.bindPopup(`<b>${TYPE_EMOJI[route.type]} ${route.type}</b><br/>${from.name} → ${to.name}`);
    while (routeLayers.length <= idx) routeLayers.push(null);
    if (routeLayers[idx]) map.removeLayer(routeLayers[idx]);
    routeLayers[idx] = layer;
  } else {
    // Visible line is non-interactive; a wide transparent "hit" line on top makes
    // thin routes easy to click/drag without changing how they look.
    const layer = L.polyline(points, { ...polylineOpts(route), interactive: false }).addTo(map);
    const hitWeight = Math.max((route.weight ?? ROUTE_META[route.type].weight) + 14, 22);
    const hit = L.polyline(points, { weight: hitWeight, opacity: 0, interactive: true }).addTo(map);
    hit.bindTooltip(`${from.name} → ${to.name}`, { sticky: true, direction: 'top', className: 'route-name-tooltip' });
    hit.on('click', e => {
      L.DomEvent.stop(e);
      selectItem('route', idx, clickMods(e.originalEvent));
      renderLocList();
    });
    if (route.shape === 'curve') enableCurveDrag(hit, idx);
    while (routeLayers.length <= idx) routeLayers.push(null);
    if (routeLayers[idx]) map.removeLayer(routeLayers[idx]);
    routeLayers[idx] = layer;
    routeHitLayers[idx] = hit;
  }
  drawRouteEmoji(idx, points);
}
// Optional transport-mode emoji at the midpoint of a route segment.
// True midpoint by path length (not array index), so straight 2-point segments
// place the emoji in the centre rather than on the destination.
function routeMidpoint(points) {
  if (points.length <= 1) return points[0];
  const seg = [];
  let total = 0;
  for (let i = 1; i < points.length; i++) {
    const d = Math.hypot(points[i][0] - points[i - 1][0], points[i][1] - points[i - 1][1]);
    seg.push(d); total += d;
  }
  let half = total / 2;
  for (let i = 0; i < seg.length; i++) {
    if (half <= seg[i]) {
      const t = seg[i] ? half / seg[i] : 0;
      return [points[i][0] + (points[i + 1][0] - points[i][0]) * t,
              points[i][1] + (points[i + 1][1] - points[i][1]) * t];
    }
    half -= seg[i];
  }
  return points[Math.floor(points.length / 2)];
}
function drawRouteEmoji(idx, points) {
  while (routeEmojiMarkers.length <= idx) routeEmojiMarkers.push(null);
  if (routeEmojiMarkers[idx]) { map.removeLayer(routeEmojiMarkers[idx]); routeEmojiMarkers[idx] = null; }
  const route = routes[idx];
  if (!route || !route.emoji || !points || !points.length) return;
  const emoji = TYPE_EMOJI[route.type] || '';
  const size = route.emojiSize || 16;
  const box = size + 8;
  const m = L.marker(routeMidpoint(points), {
    icon: L.divIcon({ className: 'route-emoji' + (route.emojiBg ? ' has-bg' : ''), html: `<span style="font-size:${size}px">${emoji}</span>`, iconSize: [box, box], iconAnchor: [box / 2, box / 2] }),
    interactive: false, keyboard: false,
  }).addTo(map);
  routeEmojiMarkers[idx] = m;
}
// Redraw only a segment's midpoint emoji, reusing the existing line's geometry so we
// don't refetch the route just to toggle/resize the emoji.
function redrawRouteEmojiOnly(idx) {
  const layer = routeLayers[idx];
  if (!layer) {
    if (routeEmojiMarkers[idx]) { map.removeLayer(routeEmojiMarkers[idx]); routeEmojiMarkers[idx] = null; }
    return;
  }
  const points = layer.getLatLngs().map(ll => [ll.lat, ll.lng]);
  drawRouteEmoji(idx, points);
}
function clearRouteLayer(idx) {
  if (routeLayers[idx]) { map.removeLayer(routeLayers[idx]); routeLayers[idx] = null; }
  if (routeHitLayers[idx]) { map.removeLayer(routeHitLayers[idx]); routeHitLayers[idx] = null; }
  if (routeEmojiMarkers[idx]) { map.removeLayer(routeEmojiMarkers[idx]); routeEmojiMarkers[idx] = null; }
}

// ── Curve drag ──────────────────────────────────────────────────────────────────
// Drag a curve segment on the map to reshape it. The point under the cursor (the
// curve's apex) follows the pointer; we solve for the Bézier control point that
// puts the apex there and store it as a geographic point so it survives zooming.
function setCurveControlFromApex(idx, apexLatLng) {
  const route = routes[idx];
  if (!route) return;
  const from = locations[route.fromIdx], to = locations[route.toIdx];
  if (!from || !to) return;
  const crs = map.options.crs || L.CRS.EPSG3857;
  const z = CURVE_PROJECT_ZOOM;
  const p1 = crs.latLngToPoint(L.latLng(from.lat, from.lng), z);
  const p2 = crs.latLngToPoint(L.latLng(to.lat, to.lng), z);
  const apex = crs.latLngToPoint(apexLatLng, z);
  // Quadratic Bézier apex (t=0.5) = 0.25*p1 + 0.5*ctrl + 0.25*p2  ⇒  solve for ctrl.
  const ctrl = L.point(2 * apex.x - 0.5 * (p1.x + p2.x), 2 * apex.y - 0.5 * (p1.y + p2.y));
  const cll = crs.pointToLatLng(ctrl, z);
  route.curveCtrl = { lat: cll.lat, lng: cll.lng };
  const pts = curvedPoints(from, to, route);
  if (routeLayers[idx]) routeLayers[idx].setLatLngs(pts);
  if (routeHitLayers[idx]) routeHitLayers[idx].setLatLngs(pts);
  if (routeEmojiMarkers[idx]) routeEmojiMarkers[idx].setLatLng(routeMidpoint(pts));
}

function enableCurveDrag(layer, idx) {
  layer.on('mousedown', e => {
    L.DomEvent.stop(e);
    map.dragging.disable();
    let moved = false;
    const onMove = ev => { moved = true; setCurveControlFromApex(idx, ev.latlng); };
    const onUp = () => {
      map.off('mousemove', onMove);
      map.off('mouseup', onUp);
      map.dragging.enable();
      if (moved) {
        layer.once('click', ev => L.DomEvent.stop(ev)); // swallow the click that ends a drag (no popup)
        save();
      }
    };
    map.on('mousemove', onMove);
    map.on('mouseup', onUp);
  });
}

// ── Location data normalizer ──────────────────────────────────────────────────
// Eight label positions (4 sides + 4 corners). `dir` is the underlying Leaflet
// tooltip direction; sx/sy is the offset sign that places it on that side/corner.
const LABEL_GAP = 14;
const LABEL_POS = {
  topleft:     { dir: 'left',   sx: -1, sy: -1 },
  top:         { dir: 'top',    sx:  0, sy: -1 },
  topright:    { dir: 'right',  sx:  1, sy: -1 },
  left:        { dir: 'left',   sx: -1, sy:  0 },
  right:       { dir: 'right',  sx:  1, sy:  0 },
  bottomleft:  { dir: 'left',   sx: -1, sy:  1 },
  bottom:      { dir: 'bottom', sx:  0, sy:  1 },
  bottomright: { dir: 'right',  sx:  1, sy:  1 },
};
function leafletLabelDirection(pos) { return (LABEL_POS[pos] || LABEL_POS.right).dir; }
// Default offset: pushes the label clear of the marker (radius + fixed gap) so the
// number and label keep a visible margin; diagonal positions offset on both axes.
function defaultLabelOffset(pos, markerSize = 18) {
  const d = Math.round((markerSize ?? 18) / 2) + LABEL_GAP;
  const p = LABEL_POS[pos] || LABEL_POS.right;
  return { x: p.sx * d, y: p.sy * d };
}
// 3×3 grid of label-position buttons (sides + corners). onPick(pos) handles it.
function makeLabelPosGrid(currentPos, onPick) {
  const grid = document.createElement('div');
  grid.className = 'label-pos-grid';
  [['topleft', '↖'], ['top', '↑'], ['topright', '↗'],
   ['left', '←'], [null, ''], ['right', '→'],
   ['bottomleft', '↙'], ['bottom', '↓'], ['bottomright', '↘']].forEach(([pos, icon]) => {
    if (!pos) { grid.appendChild(document.createElement('span')); return; }
    const b = document.createElement('button');
    b.className = 'shape-btn' + (currentPos === pos ? ' active' : '');
    b.textContent = icon; b.title = pos;
    b.addEventListener('click', () => onPick(pos));
    grid.appendChild(b);
  });
  return grid;
}

function normalizeLoc(l) {
  const labelPos = l.labelPos || 'right';
  const defOff = defaultLabelOffset(labelPos, l.markerSize ?? 18);
  return {
    name: l.name, lat: l.lat, lng: l.lng,
    description: l.description || '', date: l.date || '',
    shape: l.shape || 'circle', markerColor: l.markerColor || null,
    markerSize: l.markerSize ?? 18,
    ringGap: Number.isFinite(l.ringGap) ? l.ringGap : 6,
    markerBorderColor: l.markerBorderColor || null,
    markerShowNumber: l.markerShowNumber ?? true,
    markerNumberColor: l.markerNumberColor || '#18181b',
    labelMode:        l.labelMode        || 'always',
    labelPos,
    labelRound:       l.labelRound       ?? 4,
    labelSize:        l.labelSize        ?? 11,
    labelNumberSize:  l.labelNumberSize  ?? 85,
    labelTextAlign:   l.labelTextAlign   || 'center',
    labelTextColor:   l.labelTextColor   || '#18181b',
    labelNumberColor: l.labelNumberColor || l.labelTextColor || '#18181b',
    labelBg:          l.labelBg          ?? '#ffffff',
    labelBorderColor: l.labelBorderColor ?? null,
    labelArrow:       l.labelArrow       ?? false,
    labelOffsetX:     l.labelOffsetX     ?? defOff.x,
    labelOffsetY:     l.labelOffsetY     ?? defOff.y,
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
const MARKER_STYLE_KEYS = [
  'shape','markerColor','markerSize','ringGap','markerBorderColor','markerShowNumber','markerNumberColor',
];
const ROUTE_STYLE_KEYS = ['color','dash','dashScale','shape','weight','emoji','emojiSize','emojiBg'];

function styleFrom(source, keys) {
  if (!source) return null;
  const style = {};
  keys.forEach(key => {
    if (key in source) style[key] = source[key];
  });
  return Object.keys(style).length ? style : null;
}

function applyStyleKeys(target, style, keys) {
  if (!target || !style) return target;
  keys.forEach(key => {
    if (key in style) target[key] = style[key];
  });
  return target;
}

function effectiveLabelBorderColor(loc) {
  return loc?.labelBorderColor || loc?.markerColor || '#89b4fa';
}

function pinStyleFromLoc(loc) {
  return styleFrom(loc, MARKER_STYLE_KEYS);
}

function labelStyleFromLoc(loc) {
  const style = styleFrom(loc, LABEL_STYLE_KEYS);
  if (style) style.labelBorderColor = effectiveLabelBorderColor(loc);
  return style;
}

function routeStyleFromRoute(route) {
  return styleFrom(route, ROUTE_STYLE_KEYS);
}

function cleanStyleObject(value, keys) {
  if (!value || typeof value !== 'object') return null;
  return styleFrom(value, keys);
}

function cleanPaletteMemory(value, modes) {
  if (!value || typeof value !== 'object') return null;
  if (!modes.includes(value.mode) || !Array.isArray(value.colors) || !value.colors.length) return null;
  const colors = value.colors.filter(Boolean);
  return colors.length ? { mode: value.mode, colors } : null;
}

function rememberPinStyle(loc) {
  lastPinStyle = pinStyleFromLoc(loc) || lastPinStyle;
}

function rememberLabelStyle(loc) {
  lastLabelStyle = labelStyleFromLoc(loc) || lastLabelStyle;
}

function rememberRouteStyle(route) {
  lastRouteStyle = routeStyleFromRoute(route) || lastRouteStyle;
}

function rememberCurrentSelectionStyles() {
  if (sel.kind === 'loc' && sel.idxs.length === 1 && locations[sel.idxs[0]]) {
    rememberPinStyle(locations[sel.idxs[0]]);
    rememberLabelStyle(locations[sel.idxs[0]]);
  } else if (sel.kind === 'route' && sel.idxs.length === 1 && routes[sel.idxs[0]]) {
    rememberRouteStyle(routes[sel.idxs[0]]);
  }
}

function styleMemorySettings() {
  return {
    lastPinStyle,
    lastLabelStyle,
    lastRouteStyle,
    lastMarkerPalette,
    lastRoutePalette,
  };
}

function applyStyleMemorySettings(memory = {}) {
  lastPinStyle = cleanStyleObject(memory.lastPinStyle, MARKER_STYLE_KEYS);
  lastLabelStyle = cleanStyleObject(memory.lastLabelStyle, LABEL_STYLE_KEYS);
  lastRouteStyle = cleanStyleObject(memory.lastRouteStyle, ROUTE_STYLE_KEYS);
  lastMarkerPalette = cleanPaletteMemory(memory.lastMarkerPalette, ['sequential']);
  lastRoutePalette = cleanPaletteMemory(memory.lastRoutePalette, ['sequential', 'bytype']);
}

function markerPaletteColorForIndex(index) {
  const colors = lastMarkerPalette?.colors || [];
  if (lastMarkerPalette?.mode !== 'sequential' || !colors.length) return undefined;
  return colors[index % colors.length];
}

function routePaletteColorForIndex(index, type) {
  const colors = lastRoutePalette?.colors || [];
  if (!colors.length) return undefined;
  if (lastRoutePalette.mode === 'sequential') return colors[index % colors.length];
  if (lastRoutePalette.mode === 'bytype') {
    const typeIdx = Object.keys(TYPE_EMOJI).indexOf(type);
    return colors[(typeIdx >= 0 ? typeIdx : 0) % colors.length];
  }
  return undefined;
}

function rememberMarkerPalette(colors, selectedColor) {
  if (markerPaletteApplyMode === 'sequential') {
    lastMarkerPalette = { mode: 'sequential', colors: [...colors] };
  } else {
    lastMarkerPalette = null;
    lastPinStyle = { ...(lastPinStyle || {}), markerColor: selectedColor };
  }
}

function rememberRoutePalette(colors, selectedColor = undefined) {
  if (colors && (paletteApplyMode === 'sequential' || paletteApplyMode === 'bytype')) {
    lastRoutePalette = { mode: paletteApplyMode, colors: [...colors] };
  } else {
    lastRoutePalette = null;
    if (selectedColor !== undefined) lastRouteStyle = { ...(lastRouteStyle || {}), color: selectedColor };
  }
}

function locWithInheritedLabelStyle(loc, previousLoc) {
  const next = normalizeLoc(loc);
  applyStyleKeys(next, lastPinStyle || pinStyleFromLoc(previousLoc), MARKER_STYLE_KEYS);
  applyStyleKeys(next, lastLabelStyle || labelStyleFromLoc(previousLoc), LABEL_STYLE_KEYS);
  const markerColor = markerPaletteColorForIndex(locations.length);
  if (markerColor !== undefined) next.markerColor = markerColor;
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
  // The "# size" control (labelNumberSize, default 85) also scales the pin digit;
  // 85 keeps the original size, higher/lower grows or shrinks it.
  const numScale = (loc.labelNumberSize ?? 85) / 85;
  // Keep a tiny floor (not 7px) so the digit keeps shrinking with small pins / low
  // "# size" instead of plateauing.
  const fontSize = Math.max(1, +(size * 0.5 * numScale).toFixed(1));
  const hiddenStyle = hidden ? 'opacity:0;pointer-events:none;' : '';
  const numberStyle = shapeKey === 'diamond' ? ' style="transform:rotate(-45deg);"' : '';
  let shapeStyle;
  if (shapeKey === 'ring') {
    // Crisp ring: a solid border is the outline, padding is the gap, and a
    // content-box background is the inner dot (no aliased radial-gradient edges).
    const ringColor = loc.markerBorderColor || color;
    const ringT = Math.max(2, Math.round(size * 0.11));
    const maxPad = Math.max(0, Math.floor(size / 2 - ringT - 1));
    const gap = Math.min(Math.round(((loc.ringGap ?? 6) / 100) * (size / 2)), maxPad);
    shapeStyle = `border-radius:50%;box-sizing:border-box;border:${ringT}px solid ${ringColor};padding:${gap}px;background:${color};background-clip:content-box;`;
  } else {
    const borderColor = loc.markerBorderColor || 'rgba(255,255,255,.85)';
    shapeStyle = `background:${color};border-color:${borderColor};${shape.css}`;
  }
  return `<div class="map-marker-hover" style="width:${size}px;height:${size}px;${hiddenStyle}"><div class="map-marker-shape" style="width:100%;height:100%;font-size:${fontSize}px;--mk:${color};color:${numberColor};${shapeStyle}"><span${numberStyle}>${number}</span></div></div>`;
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
  if (width) {
    // Explicit (dragged) width overrides the default cap.
    tt.style.setProperty('width', `${width}px`, 'important');
    tt.style.setProperty('max-width', 'none', 'important');
  } else {
    tt.style.removeProperty('width');
    tt.style.removeProperty('max-width');
  }
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
  const dx = Math.round(before.left - after.left), dy = Math.round(before.top - after.top);
  // Guard against a not-yet-settled measurement flinging the label off-screen.
  if (Math.abs(dx) > 400 || Math.abs(dy) > 400) return;
  loc.labelOffsetX = (loc.labelOffsetX ?? 0) + dx;
  loc.labelOffsetY = (loc.labelOffsetY ?? 0) + dy;
  updateTooltipLayout(locMarkers[locIdx]?.marker, loc);
}

function addLocMarker(loc, locIdx) {
  const duplicateLoc = locations.findIndex(l => locKey(l) === locKey(loc)) !== locIdx;
  loc = { ...loc, visitNumber: locIdx + 1 };
  const icon = L.divIcon({
    // Hidden revisit markers stack exactly on the original; mark them so the whole
    // marker is click/hover-transparent (below), letting events reach the visible pin.
    className: `loc-mk-${locIdx}` + (duplicateLoc ? ' loc-mk-dup' : ''),
    html: markerIconHtml(loc, { hidden: duplicateLoc }),
    iconAnchor: [(loc.markerSize ?? 18) / 2, (loc.markerSize ?? 18) / 2],
    iconSize: [loc.markerSize ?? 18, loc.markerSize ?? 18],
  });
  const marker = L.marker([loc.lat, loc.lng], { icon, interactive: !duplicateLoc }).addTo(map);
  const mode = loc.labelMode || 'always';
  if (mode !== 'hidden') {
    marker.bindTooltip(labelTooltipHtml(loc), {
      direction: leafletLabelDirection(loc.labelPos),
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
      // Leaflet positions the tooltip from its measured size, before the element
      // is laid out and before the web font sets the final text width — so the
      // first open lands in a stale spot. Re-run positioning now, after layout
      // settles, and once fonts finish loading.
      e.tooltip.update();
      requestAnimationFrame(() => e.tooltip.update());
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => e.tooltip.update());
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
  marker.on('click', e => {
    // While placing a new stop ("Pick on map"), clicking an existing pin revisits
    // that place instead of selecting it — adding a fresh stop at the same spot.
    if (pickMode && pickEditIdx == null) {
      L.DomEvent.stop(e);
      exitPickMode();
      revisitLocation(locIdx);
      return;
    }
    selectItem('loc', locIdx, clickMods(e.originalEvent));
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
  // Permanent tooltips are positioned from their measured size; re-run once layout
  // has settled and again after web fonts load, otherwise top/left/bottom labels
  // sit in a stale spot until the first hover.
  requestAnimationFrame(applyAllTooltipLayoutStyles);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(applyAllTooltipLayoutStyles);
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
  routeLayers = []; routeHitLayers = []; routeEmojiMarkers = [];
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
  const colors = getPaletteColors(name);
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
  typeSwatch.addEventListener('click', async () => { lastRoutePalette = null; routes[routeIdx].color = null; await redrawRoute(routeIdx); });
  colorRow.appendChild(typeSwatch);

  // Solid color swatches
  SOLID_COLORS.forEach(hex => {
    const sw = document.createElement('div');
    sw.className = 'swatch' + (route.color === hex ? ' active' : '');
    sw.style.background = hex; sw.title = hex;
    sw.addEventListener('click', async () => { lastRoutePalette = null; routes[routeIdx].color = hex; await redrawRoute(routeIdx); });
    colorRow.appendChild(sw);
  });

  // Custom color picker
  const customWrap = document.createElement('div');
  customWrap.className = 'swatch-custom'; customWrap.title = 'Custom color';
  const customFill = document.createElement('div'); customFill.className = 'swatch-custom-fill';
  const colorInput = document.createElement('input'); colorInput.type = 'color';
  colorInput.value = route.color || typeMeta.color;
  colorInput.addEventListener('input', async () => { lastRoutePalette = null; routes[routeIdx].color = colorInput.value; await redrawRoute(routeIdx); });
  customWrap.appendChild(customFill); customWrap.appendChild(colorInput);
  colorRow.appendChild(customWrap);
  panel.appendChild(colorRow);

  // — Palette accordion (collapsed by default to reduce clutter) —
  const palToggle = document.createElement('button');
  palToggle.className = 'sp-section-toggle' + (showPalettes ? ' open' : '');
  palToggle.textContent = `${showPalettes ? '▾' : '▸'} Palettes`;
  palToggle.addEventListener('click', () => { showPalettes = !showPalettes; renderLocList(); });
  panel.appendChild(palToggle);

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
  paletteSection.appendChild(makeManagePalettesBtn());

  const typeKeys = Object.keys(TYPE_EMOJI);

  Object.entries(allPalettes()).forEach(([name, colors]) => {
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
        sw.addEventListener('click', async () => { lastRoutePalette = null; routes[routeIdx].color = hex; await redrawRoute(routeIdx); });
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
	        rememberRoutePalette(null, null);
	      } else if (paletteApplyMode === 'same') {
	        const color = currentRouteColor();
	        routes.forEach(r => { r.color = color; });
	        rememberRoutePalette(null, color);
	      } else if (paletteApplyMode === 'bytype') {
	        routes.forEach(r => {
	          const ti = typeKeys.indexOf(r.type);
	          r.color = orderedColors[(ti >= 0 ? ti : 0) % orderedColors.length];
	        });
	        rememberRoutePalette(orderedColors);
	      } else {
	        routes.forEach((r, i) => { r.color = orderedColors[i % orderedColors.length]; });
	        rememberRoutePalette(orderedColors);
	      }
	      rebuildMarkers();
	      await rebuildAllRoutes();
	      renderLocList(); save();
	    });
    body.appendChild(applyAllBtn);

    entry.appendChild(body);
    paletteSection.appendChild(entry);
  });
  if (showPalettes) panel.appendChild(paletteSection);

  // — Dash row (shape) —
  const dashRow = document.createElement('div');
  dashRow.className = 'sp-row-wrap';
  dashRow.innerHTML = '<span class="sp-label">Dash</span>';
  const dashes = [
    { key: 'solid',   label: '———' },
    { key: 'dashed',  label: '– –' },
    { key: 'dotted',  label: '· · ·' },
    { key: 'dashdot', label: '–·–' },
    { key: 'default', label: 'Auto' },
  ];
  dashes.forEach(({ key, label }) => {
    const btn = document.createElement('button');
    btn.className = 'sp-btn' + ((route.dash || 'solid') === key ? ' active' : '');
    btn.textContent = label;
    btn.addEventListener('click', async () => { routes[routeIdx].dash = key; await redrawRoute(routeIdx); });
    dashRow.appendChild(btn);
  });
  panel.appendChild(dashRow);

  // — Dash density (only meaningful for patterned dashes) —
  if (DASH_PATTERNS[route.dash]) {
    const densRow = document.createElement('div');
    densRow.className = 'sp-row';
    densRow.innerHTML = '<span class="sp-label">Density</span>';
    const densSlider = document.createElement('input');
    densSlider.type = 'range'; densSlider.min = 0.5; densSlider.max = 3; densSlider.step = 0.25;
    densSlider.value = route.dashScale ?? 1; densSlider.className = 'sp-slider';
    const densVal = document.createElement('span');
    densVal.className = 'sp-slider-val'; densVal.textContent = `${route.dashScale ?? 1}×`;
    densSlider.addEventListener('input', () => { densVal.textContent = `${densSlider.value}×`; });
    densSlider.addEventListener('change', async () => {
      routes[routeIdx].dashScale = parseFloat(densSlider.value);
      await redrawRoute(routeIdx);
    });
    densRow.appendChild(densSlider); densRow.appendChild(densVal);
    panel.appendChild(densRow);
  }

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
  panel.appendChild(shapeRow);

  // — Curve controls (only when this segment is a curve) —
  if ((route.shape || 'route') === 'curve') {
    const curveRow = document.createElement('div');
    curveRow.className = 'sp-row';
    const hint = document.createElement('span');
    hint.className = 'sp-hint';
    hint.textContent = 'Drag the line on the map to bend it.';
    curveRow.appendChild(hint);
    const resetBtn = document.createElement('button');
    resetBtn.className = 'sp-btn';
    resetBtn.textContent = 'Reset curve';
    resetBtn.title = 'Restore the default arc';
    resetBtn.disabled = !route.curveCtrl;
    resetBtn.addEventListener('click', async () => { routes[routeIdx].curveCtrl = null; await redrawRoute(routeIdx); });
    curveRow.appendChild(resetBtn);
    panel.appendChild(curveRow);
  }

  // — Width slider (1–10, null = auto = type default) —
  const widthRow = document.createElement('div');
  widthRow.className = 'sp-row';
  widthRow.innerHTML = '<span class="sp-label">Width</span>';

  const defaultWeight = typeMeta.weight;
  const currentVal = route.weight ?? defaultWeight;

  const slider = document.createElement('input');
  slider.type = 'range'; slider.min = 1; slider.max = 24; slider.step = 1;
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

  widthRow.appendChild(slider); widthRow.appendChild(valLabel);
  panel.appendChild(widthRow);

  // — Visibility: hide this segment's line on the map while keeping the stops —
  const visRow = document.createElement('div');
  visRow.className = 'sp-row';
  visRow.innerHTML = '<span class="sp-label">Show</span>';
  const visBtn = document.createElement('button');
  visBtn.className = 'sp-btn' + (route.hidden ? '' : ' active');
  visBtn.textContent = route.hidden ? 'Hidden' : 'Shown';
  visBtn.title = 'Toggle whether this route is drawn on the map';
  visBtn.addEventListener('click', async () => { routes[routeIdx].hidden = !routes[routeIdx].hidden; await redrawRoute(routeIdx); });
  visRow.appendChild(visBtn);
  if (onlyPins) {
    const note = document.createElement('span');
    note.className = 'sp-hint';
    note.textContent = '“Only pins” is on — all routes are hidden.';
    visRow.appendChild(note);
  }
  panel.appendChild(visRow);

  // — Mode-of-transport emoji at this segment's midpoint —
  panel.appendChild(makeRouteEmojiRow([routeIdx]));

  // — Apply line style (dash/density/line/width) to every segment, leaving each
  //   segment's colour untouched so sequential/by-type palettes survive —
  const allRow = document.createElement('div');
  allRow.className = 'lep-row'; allRow.style.justifyContent = 'flex-end';
  const allBtn = document.createElement('button');
  allBtn.className = 'palette-apply';
  allBtn.textContent = '↓ Apply line style to all segments';
  allBtn.title = 'Copy dash, density, line shape and width to every segment (colours unchanged)';
	  allBtn.addEventListener('click', async () => {
	    const src = routes[routeIdx];
	    rememberRouteStyle(src);
	    routes.forEach(r => { r.dash = src.dash; r.dashScale = src.dashScale; r.shape = src.shape; r.weight = src.weight; });
	    await rebuildAllRoutes(); renderLocList(); save();
	  });
  allRow.appendChild(allBtn);
  panel.appendChild(allRow);

  // — Assign this segment's full style to every segment of the SAME transport mode,
  //   so each mode (car, flight, …) can carry its own look ("style by type") —
  const typeStyleRow = document.createElement('div');
  typeStyleRow.className = 'lep-row'; typeStyleRow.style.justifyContent = 'flex-end';
  const sameType = routes.filter(r => r.type === route.type).length;
  const typeStyleBtn = document.createElement('button');
  typeStyleBtn.className = 'palette-apply';
  typeStyleBtn.textContent = `↓ Apply style to all ${TYPE_EMOJI[route.type] || ''} ${route.type} (${sameType})`;
  typeStyleBtn.title = `Copy this segment's full style — colour, dash, density, line shape, width and emoji — to every ${route.type} segment`;
	  typeStyleBtn.addEventListener('click', async () => {
	    const src = routes[routeIdx];
	    lastRoutePalette = null;
	    rememberRouteStyle(src);
	    routes.forEach(r => {
      if (r.type !== src.type) return;
      r.color = src.color; r.dash = src.dash; r.dashScale = src.dashScale;
      r.shape = src.shape; r.weight = src.weight;
      r.emoji = src.emoji; r.emojiSize = src.emojiSize; r.emojiBg = src.emojiBg;
    });
    await rebuildAllRoutes(); renderLocList(); save();
  });
  typeStyleRow.appendChild(typeStyleBtn);
  panel.appendChild(typeStyleRow);

  return panel;
}

async function redrawRoute(idx) {
  clearRouteLayer(idx);
  await drawRoute(idx);
  renderLocList();
  save();
}

function applyMarkerColorToAll(color) {
  lastMarkerPalette = null;
  lastPinStyle = { ...(lastPinStyle || {}), markerColor: color };
  locations.forEach(l => { l.markerColor = color; });
  rebuildMarkers(); renderLocList(); save();
}

function applyMarkerNumberStyleToAll(sourceLoc) {
  rememberPinStyle(sourceLoc);
  locations.forEach(l => {
    l.markerShowNumber = sourceLoc.markerShowNumber ?? true;
    l.markerNumberColor = sourceLoc.markerNumberColor || '#18181b';
  });
  rebuildMarkers(); renderLocList(); save();
}

function applyMarkerSizeToAll(size) {
  lastPinStyle = { ...(lastPinStyle || {}), markerSize: size };
  locations.forEach(l => { l.markerSize = size; });
  rebuildMarkers(); renderLocList(); save();
}

// Copy one pin's full visual style (color, shape, size, border, number style, ring
// gap) to every stop — the pin equivalent of "apply line style to all segments".
function applyMarkerStyleToAll(src) {
  if (!src) return;
  lastMarkerPalette = null;
  rememberPinStyle(src);
  locations.forEach(l => {
    l.markerColor = src.markerColor;
    l.shape = src.shape || 'circle';
    l.markerSize = src.markerSize ?? 18;
    l.markerBorderColor = src.markerBorderColor ?? null;
    l.markerShowNumber = src.markerShowNumber ?? true;
    l.markerNumberColor = src.markerNumberColor || '#18181b';
    l.ringGap = src.ringGap ?? 6;
  });
  rebuildMarkers(); renderLocList(); save();
}

function applyMarkerPalette(colors, selectedColor = colors[0]) {
  rememberMarkerPalette(colors, selectedColor);
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
  section.appendChild(makeManagePalettesBtn());

  Object.entries(allPalettes()).forEach(([name, colors]) => {
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
	        lastMarkerPalette = null;
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

// Palette accordion for a multi-selection of pins. Mirrors the single-pin controls
// but recolors only the pins in `targetIdxs`; "Sequential" distributes palette colors
// across the selected pins in their order (not all stops).
function appendMarkerPalettes(panel, targetIdxs) {
  const first = locations[targetIdxs[0]] || {};
  const recolor = (fn) => { targetIdxs.forEach((i, k) => { if (locations[i]) fn(locations[i], k); }); };
  const refresh = () => {
    if (locations[targetIdxs[0]]) rememberPinStyle(locations[targetIdxs[0]]);
    rebuildMarkers(); renderLocList(); save();
  };

  const palToggle = document.createElement('button');
  palToggle.className = 'sp-section-toggle' + (showPalettes ? ' open' : '');
  palToggle.textContent = `${showPalettes ? '▾' : '▸'} Palettes`;
  palToggle.addEventListener('click', () => { showPalettes = !showPalettes; renderLocList(); });
  panel.appendChild(palToggle);
  if (!showPalettes) return;

  const section = document.createElement('div');
  section.className = 'palette-section';
  section.dataset.scrollKey = 'marker-bulk';

  const modeRow = document.createElement('div'); modeRow.className = 'pal-mode-row';
  const label = document.createElement('span'); label.className = 'sp-label'; label.textContent = 'Palette';
  modeRow.appendChild(label);
  [
    ['all', 'Same', 'Apply one palette color to every selected pin'],
    ['sequential', 'Sequential', 'Assign palette colors across the selected pins, in order'],
  ].forEach(([mode, txt, title]) => {
    const b = document.createElement('button');
    b.className = 'sp-btn' + (markerPaletteApplyMode === mode ? ' active' : '');
    b.textContent = txt; b.title = title;
    b.addEventListener('click', () => { markerPaletteApplyMode = mode; renderLocList(); });
    modeRow.appendChild(b);
  });
  section.appendChild(modeRow);
  section.appendChild(makeManagePalettesBtn());

  Object.entries(allPalettes()).forEach(([name, colors]) => {
    if (!colors) return;
    const orderedColors = orderedPaletteColors('marker', name, colors);
    const key = `marker:${name}`;

    const entry = document.createElement('div'); entry.className = 'palette-entry';
    const header = document.createElement('div');
    header.className = 'palette-header' + (expandedPalette === key ? ' open' : '');
    const strip = document.createElement('div'); strip.className = 'palette-strip';
    orderedColors.forEach(c => { const s = document.createElement('span'); s.style.background = c; strip.appendChild(s); });
    header.appendChild(strip);
    const nameLbl = document.createElement('span'); nameLbl.className = 'palette-name'; nameLbl.textContent = name;
    const arrow = document.createElement('span'); arrow.className = 'palette-arrow';
    arrow.textContent = expandedPalette === key ? '▲' : '▼';
    header.appendChild(nameLbl); header.appendChild(arrow);
    header.addEventListener('click', () => { expandedPalette = expandedPalette === key ? null : key; renderLocList(); });
    entry.appendChild(header);

    const body = document.createElement('div');
    body.className = 'palette-body' + (expandedPalette === key ? ' open' : '');
    const swatchRow = document.createElement('div'); swatchRow.className = 'palette-swatches';
    orderedColors.forEach(hex => {
      const sw = document.createElement('div');
      sw.className = 'swatch' + (first.markerColor === hex ? ' active' : '');
      sw.style.cssText = `background:${hex};width:20px;height:20px;`;
	      sw.title = hex;
	      sw.addEventListener('click', () => { lastMarkerPalette = null; recolor(l => { l.markerColor = hex; }); refresh(); });
      swatchRow.appendChild(sw);
    });
    body.appendChild(swatchRow);

    const orderRow = document.createElement('div'); orderRow.className = 'palette-order-row';
    [['left', '↶ Rotate'], ['right', 'Rotate ↷'], ['reverse', 'Reverse']].forEach(([action, lbl]) => {
      const btn = document.createElement('button'); btn.className = 'sp-btn'; btn.textContent = lbl;
      btn.addEventListener('click', () => { adjustPaletteOrder('marker', name, action); renderLocList(); });
      orderRow.appendChild(btn);
    });
    body.appendChild(orderRow);

    const applyBtn = document.createElement('button');
    applyBtn.className = 'palette-apply';
	    applyBtn.textContent = markerPaletteApplyMode === 'sequential'
	      ? 'Apply sequentially across selected'
	      : 'Apply selected color to selected pins';
	    applyBtn.addEventListener('click', () => {
	      if (markerPaletteApplyMode === 'sequential') {
	        rememberMarkerPalette(orderedColors, orderedColors[0]);
	        recolor((l, k) => { l.markerColor = orderedColors[k % orderedColors.length]; });
	      } else {
	        const c = orderedColors.includes(first.markerColor) ? first.markerColor : orderedColors[0];
	        rememberMarkerPalette(orderedColors, c);
	        recolor(l => { l.markerColor = c; });
	      }
	      refresh();
	    });
    body.appendChild(applyBtn);

    entry.appendChild(body);
    section.appendChild(entry);
  });

  panel.appendChild(section);
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
    sw.addEventListener('click', () => { lastMarkerPalette = null; locations[locIdx].markerColor = hex; rebuildMarkers(); renderLocList(); save(); });
    colorRow.appendChild(sw);
  });
  const cWrap = document.createElement('div'); cWrap.className = 'swatch-custom'; cWrap.title = 'Custom';
  const cFill = document.createElement('div'); cFill.className = 'swatch-custom-fill';
  const cInput = document.createElement('input'); cInput.type = 'color';
  cInput.value = loc.markerColor || '#89b4fa';
  cInput.addEventListener('input', () => { lastMarkerPalette = null; locations[locIdx].markerColor = cInput.value; rebuildMarkers(); save(); });
  cWrap.appendChild(cFill); cWrap.appendChild(cInput);
  colorRow.appendChild(cWrap);
  panel.appendChild(colorRow);

  // Border color (outline for shapes; ring outline for the ring shape)
  const borderRow = document.createElement('div'); borderRow.className = 'lep-row';
  borderRow.innerHTML = '<span class="lep-label">Border</span>';
  const bInput = document.createElement('input'); bInput.type = 'color';
  bInput.value = loc.markerBorderColor || '#ffffff';
  bInput.style.cssText = 'width:34px;height:24px;border:none;border-radius:5px;cursor:pointer;padding:1px;flex-shrink:0;';
  bInput.addEventListener('input', () => { locations[locIdx].markerBorderColor = bInput.value; rebuildMarkers(); save(); });
  const bReset = document.createElement('button'); bReset.className = 'sp-btn'; bReset.textContent = 'Default';
  bReset.title = 'Reset to the default white outline';
  bReset.addEventListener('click', () => { locations[locIdx].markerBorderColor = null; rebuildMarkers(); renderLocList(); save(); });
  borderRow.appendChild(bInput); borderRow.appendChild(bReset);
  panel.appendChild(borderRow);

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
  const markerNumLabel = document.createElement('span');
  markerNumLabel.className = 'pin-number-label';
  markerNumLabel.textContent = 'Number color';
  markerNumRow.appendChild(markerNumBtn);
  markerNumRow.appendChild(markerNumLabel);
  markerNumRow.appendChild(markerNumColor);
  panel.appendChild(markerNumRow);

  const markerSizeRow = document.createElement('div');
  markerSizeRow.className = 'lep-row';
  markerSizeRow.innerHTML = '<span class="lep-label">Pin size</span>';
  const markerSizeSlider = document.createElement('input');
  markerSizeSlider.type = 'range';
  markerSizeSlider.min = 8;
  markerSizeSlider.max = 80;
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
  markerSizeRow.appendChild(markerSizeSlider);
  markerSizeRow.appendChild(markerSizeVal);
  panel.appendChild(markerSizeRow);

  // Ring gap (only meaningful for the ring shape)
  if ((loc.shape || 'circle') === 'ring') {
    const gapRow = document.createElement('div'); gapRow.className = 'lep-row';
    gapRow.innerHTML = '<span class="lep-label">Ring gap</span>';
    const gapSlider = document.createElement('input');
    gapSlider.type = 'range'; gapSlider.min = 0; gapSlider.max = 80; gapSlider.step = 1;
    gapSlider.value = loc.ringGap ?? 6; gapSlider.className = 'sp-slider';
    const gapVal = document.createElement('span'); gapVal.className = 'sp-slider-val';
    gapVal.textContent = `${loc.ringGap ?? 6}%`;
    gapSlider.addEventListener('input', () => { gapVal.textContent = `${gapSlider.value}%`; });
    gapSlider.addEventListener('change', () => {
      locations[locIdx].ringGap = parseInt(gapSlider.value, 10);
      rebuildMarkers(); save();
    });
    gapRow.appendChild(gapSlider); gapRow.appendChild(gapVal);
    panel.appendChild(gapRow);
  }

  // Apply this pin's whole style to every stop.
  const styleAllRow = document.createElement('div'); styleAllRow.className = 'lep-row';
  styleAllRow.innerHTML = '<span class="lep-label"></span>';
  const styleAllBtn = document.createElement('button');
  styleAllBtn.className = 'palette-apply';
  styleAllBtn.textContent = '↓ Apply pin style to all stops';
  styleAllBtn.title = "Copy this pin's color, shape, size, border and number style to every stop";
  styleAllBtn.addEventListener('click', () => applyMarkerStyleToAll(locations[locIdx]));
  styleAllRow.appendChild(styleAllBtn);
  panel.appendChild(styleAllRow);

  const markerPalToggle = document.createElement('button');
  markerPalToggle.className = 'sp-section-toggle' + (showPalettes ? ' open' : '');
  markerPalToggle.textContent = `${showPalettes ? '▾' : '▸'} Palettes`;
  markerPalToggle.addEventListener('click', () => { showPalettes = !showPalettes; renderLocList(); });
  panel.appendChild(markerPalToggle);
  if (showPalettes) panel.appendChild(makeMarkerPaletteControls(locIdx, loc));

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
      // A mode change keeps the same position/offset, so don't run screen-position
      // preservation here — measuring a not-yet-settled "always" tooltip corrupts
      // the offset and pushes the label off-screen.
      locations[locIdx].labelMode = m;
      rebuildMarkers(); renderLocList(); save();
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

  // Position — 3×3 grid (sides + corners)
  const lblPosRow = document.createElement('div'); lblPosRow.className = 'lep-row top';
  lblPosRow.innerHTML = '<span class="lep-label">Position</span>';
  lblPosRow.appendChild(makeLabelPosGrid(loc.labelPos || 'right', pos => {
    const l = locations[locIdx];
    l.labelPos = pos;
    // Snap to the chosen side/corner with the default margin, discarding any nudge.
    const off = defaultLabelOffset(pos, l.markerSize ?? 18);
    l.labelOffsetX = off.x; l.labelOffsetY = off.y;
    rebuildMarkers(); renderLocList(); save();
  }));
  panel.appendChild(lblPosRow);

  // Apply-position-to-all + arrow toggle
  const posExtraRow = document.createElement('div'); posExtraRow.className = 'lep-row';
  posExtraRow.innerHTML = '<span class="lep-label"></span>';
  const posAllBtn = document.createElement('button');
  posAllBtn.className = 'sp-btn'; posAllBtn.textContent = '↓ All stops';
  posAllBtn.title = 'Use this label position for all stops';
  posAllBtn.addEventListener('click', () => {
    const src = locations[locIdx];
    locations.forEach(l => { l.labelPos = src.labelPos; l.labelOffsetX = src.labelOffsetX; l.labelOffsetY = src.labelOffsetY; });
    rebuildMarkers(); renderLocList(); save();
  });
  posExtraRow.appendChild(posAllBtn);
  const posSpacer = document.createElement('span'); posSpacer.style.flex = '1';
  posExtraRow.appendChild(posSpacer);
  const arrowBtn = document.createElement('button');
  arrowBtn.className = 'shape-btn' + ((loc.labelArrow ?? false) ? ' active' : '');
  arrowBtn.textContent = '↗'; arrowBtn.title = 'Show arrow tip';
  arrowBtn.addEventListener('click', () => {
    locations[locIdx].labelArrow = !(loc.labelArrow ?? false);
    buildTooltipStyles(); renderLocList(); save();
  });
  posExtraRow.appendChild(arrowBtn);
  panel.appendChild(posExtraRow);

  // ── Advanced label options (collapsed by default) ────────────────────────────
  const advToggle = document.createElement('button');
  advToggle.className = 'sp-section-toggle' + (showAdvancedLabel ? ' open' : '');
  advToggle.textContent = `${showAdvancedLabel ? '▾' : '▸'} Advanced label`;
  advToggle.addEventListener('click', () => { showAdvancedLabel = !showAdvancedLabel; renderLocList(); });
  panel.appendChild(advToggle);
  const adv = document.createElement('div');
  adv.className = 'lep-advanced';

  // Drag hint + Reset position
  const dragRow = document.createElement('div'); dragRow.className = 'lep-row';
  dragRow.innerHTML = '<span class="lep-label" style="color:var(--fg2);">Offset</span><span style="font-size:10px;color:var(--fg2);flex:1;">drag label to reposition</span>';
  const resetBtn = document.createElement('button');
  resetBtn.className = 'sp-btn'; resetBtn.textContent = 'Reset';
  resetBtn.addEventListener('click', () => {
    const l = locations[locIdx];
    const off = defaultLabelOffset(l.labelPos || 'right', l.markerSize ?? 18);
    l.labelOffsetX = off.x; l.labelOffsetY = off.y; l.labelWidth = null;
    rebuildMarkers(); renderLocList(); save();
  });
  dragRow.appendChild(resetBtn);
  adv.appendChild(dragRow);

  // Roundness slider
  const roundRow = document.createElement('div'); roundRow.className = 'lep-row';
  roundRow.innerHTML = '<span class="lep-label">Round</span>';
  const roundSlider = document.createElement('input');
  roundSlider.type='range'; roundSlider.min=0; roundSlider.max=40; roundSlider.step=1;
  roundSlider.value = loc.labelRound ?? 4; roundSlider.className = 'sp-slider';
  const roundVal = document.createElement('span'); roundVal.className = 'sp-slider-val';
  roundVal.textContent = `${loc.labelRound ?? 4}px`;
  roundSlider.addEventListener('input', () => { roundVal.textContent = `${roundSlider.value}px`; });
  roundSlider.addEventListener('change', () => { locations[locIdx].labelRound = parseInt(roundSlider.value); buildTooltipStyles(); save(); });
  roundRow.appendChild(roundSlider); roundRow.appendChild(roundVal);
  adv.appendChild(roundRow);

  // Font size slider
  const lblSizeRow = document.createElement('div'); lblSizeRow.className = 'lep-row';
  lblSizeRow.innerHTML = '<span class="lep-label">Size</span>';
  const sizeSlider = document.createElement('input');
  sizeSlider.type='range'; sizeSlider.min=8; sizeSlider.max=48; sizeSlider.step=1;
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
  adv.appendChild(lblSizeRow);

  const numSizeRow = document.createElement('div');
  numSizeRow.className = 'lep-row';
  numSizeRow.innerHTML = '<span class="lep-label"># size</span>';
  const numSizeSlider = document.createElement('input');
  numSizeSlider.type = 'range';
  numSizeSlider.min = 20;
  numSizeSlider.max = 400;
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
  adv.appendChild(numSizeRow);

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
  adv.appendChild(alignRow);

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
    adv.appendChild(row);
  });

	  // Apply all labels button
	  const lblAllRow = document.createElement('div'); lblAllRow.className = 'lep-row';
	  lblAllRow.style.justifyContent = 'flex-end';
	  const lblAllBtn = document.createElement('button');
	  lblAllBtn.className = 'palette-apply'; lblAllBtn.textContent = '↓ Apply label style to all stops';
	  lblAllBtn.addEventListener('click', () => {
	    const src = locations[locIdx];
	    const borderColor = effectiveLabelBorderColor(src);
	    src.labelBorderColor = borderColor;
	    const keys = [
	      'labelMode','labelShowNumber','labelShowName','labelShowDate','labelShowNotes',
	      'labelPos','labelRound','labelSize','labelNumberSize','labelTextAlign','labelNumberColor','labelTextColor','labelBg','labelBorderColor','labelArrow',
	    ];
	    locations.forEach((l, j) => {
	      if (j === locIdx) return;
	      // A recurring stop (same place as an earlier stop) keeps its own label
	      // visibility — applying a style shouldn't re-reveal labels you've hidden to
	      // avoid overlap. Its other label styling is still synced.
	      const isRecurring = locations.findIndex(o => locKey(o) === locKey(l)) !== j;
	      keys.forEach(k => {
	        if (k === 'labelMode' && isRecurring) return;
	        l[k] = k === 'labelBorderColor' ? borderColor : src[k];
	      });
	    });
	    rememberLabelStyle(src);
	    rebuildMarkers(); renderLocList(); save();
	  });
  lblAllRow.appendChild(lblAllBtn);
  adv.appendChild(lblAllRow);

  if (showAdvancedLabel) panel.appendChild(adv);

  return panel;
}

// ── Bulk edit panels (multi-selection) ────────────────────────────────────────
// Compact panels shown when several routes/stops are selected; each control writes
// to every selected item at once. Intentionally a small, common subset of options.
// Palette accordion for a set of route segments. Unlike the single-segment panel
// (whose "apply" hits every route), this only recolors the segments in `targetIdxs`,
// so it works for a multi-selection. Same / Sequential / By type share the global mode.
function appendRoutePalettes(panel, targetIdxs) {
  const first = routes[targetIdxs[0]] || {};
  const typeKeys = Object.keys(TYPE_EMOJI);
  const recolor = (fn) => { targetIdxs.forEach((i, k) => { if (routes[i]) fn(routes[i], k); }); };
  const refresh = async () => {
    if (routes[targetIdxs[0]]) rememberRouteStyle(routes[targetIdxs[0]]);
    await rebuildAllRoutes(); renderLocList(); save();
  };

  const palToggle = document.createElement('button');
  palToggle.className = 'sp-section-toggle' + (showPalettes ? ' open' : '');
  palToggle.textContent = `${showPalettes ? '▾' : '▸'} Palettes`;
  palToggle.addEventListener('click', () => { showPalettes = !showPalettes; renderLocList(); });
  panel.appendChild(palToggle);
  if (!showPalettes) return;

  const section = document.createElement('div');
  section.className = 'palette-section';
  section.dataset.scrollKey = 'route-bulk';

  const palModeRow = document.createElement('div'); palModeRow.className = 'pal-mode-row';
  const palLbl = document.createElement('span'); palLbl.className = 'sp-label'; palLbl.textContent = 'Palette';
  palModeRow.appendChild(palLbl);
  [
    ['same', 'Same', 'Apply one color to every selected segment'],
    ['sequential', 'Sequential', 'Assign palette colors across the selected segments'],
    ['bytype', 'By type', 'One palette color per transport mode'],
  ].forEach(([mode, txt, title]) => {
    const b = document.createElement('button');
    b.className = 'sp-btn' + (paletteApplyMode === mode ? ' active' : '');
    b.textContent = txt; b.title = title;
    b.addEventListener('click', () => { paletteApplyMode = mode; renderLocList(); });
    palModeRow.appendChild(b);
  });
  section.appendChild(palModeRow);
  section.appendChild(makeManagePalettesBtn());

  Object.entries(allPalettes()).forEach(([name, colors]) => {
    const entry = document.createElement('div'); entry.className = 'palette-entry';
    const orderedColors = colors ? orderedPaletteColors('route', name, colors) : null;

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
    header.addEventListener('click', () => { expandedPalette = expandedPalette === name ? null : name; renderLocList(); });
    entry.appendChild(header);

    const body = document.createElement('div');
    body.className = 'palette-body' + (expandedPalette === name ? ' open' : '');
    if (orderedColors) {
      const swatchRow = document.createElement('div'); swatchRow.className = 'palette-swatches';
      orderedColors.forEach(hex => {
        const sw = document.createElement('div');
        sw.className = 'swatch' + (first.color === hex ? ' active' : '');
        sw.style.cssText = `background:${hex};width:20px;height:20px;`;
        sw.title = hex;
        sw.addEventListener('click', async () => { lastRoutePalette = null; recolor(r => { r.color = hex; }); await refresh(); });
        swatchRow.appendChild(sw);
      });
      body.appendChild(swatchRow);

      const orderRow = document.createElement('div'); orderRow.className = 'palette-order-row';
      [['left', '↶ Rotate'], ['right', 'Rotate ↷'], ['reverse', 'Reverse']].forEach(([action, label]) => {
        const btn = document.createElement('button'); btn.className = 'sp-btn'; btn.textContent = label;
        btn.addEventListener('click', () => { adjustPaletteOrder('route', name, action); renderLocList(); });
        orderRow.appendChild(btn);
      });
      body.appendChild(orderRow);
    }

    const applyBtn = document.createElement('button');
	    applyBtn.className = 'palette-apply';
	    applyBtn.textContent = !orderedColors ? 'Reset selected to type default' :
	      paletteApplyMode === 'same' ? 'Apply selected color to selected segments' : 'Apply to selected segments';
	    applyBtn.addEventListener('click', async () => {
	      if (!orderedColors) {
	        recolor(r => { r.color = null; });
	        rememberRoutePalette(null, null);
	      } else if (paletteApplyMode === 'same') {
	        const c = first.color ?? orderedColors[0];
	        recolor(r => { r.color = c; });
	        rememberRoutePalette(null, c);
	      } else if (paletteApplyMode === 'bytype') {
	        recolor(r => { const ti = typeKeys.indexOf(r.type); r.color = orderedColors[(ti >= 0 ? ti : 0) % orderedColors.length]; });
	        rememberRoutePalette(orderedColors);
	      } else {
	        recolor((r, k) => { r.color = orderedColors[k % orderedColors.length]; });
	        rememberRoutePalette(orderedColors);
	      }
	      await refresh();
	    });
    body.appendChild(applyBtn);

    entry.appendChild(body);
    section.appendChild(entry);
  });

  panel.appendChild(section);
}

function makeBulkRoutePanel(idxs) {
  const panel = document.createElement('div');
  panel.className = 'style-panel';
  const first = routes[idxs[0]] || {};
  const apply = fn => idxs.forEach(i => { if (routes[i]) fn(routes[i]); });
  const rememberBulkRouteStyle = () => { if (routes[idxs[0]]) rememberRouteStyle(routes[idxs[0]]); };
  const refresh = async () => { rememberBulkRouteStyle(); await rebuildAllRoutes(); renderLocList(); save(); };
  // Slider edits must not re-render the panel (would reset the slider mid-drag).
  const refreshRoutesOnly = async () => { rememberBulkRouteStyle(); await rebuildAllRoutes(); save(); };

  const colorRow = document.createElement('div');
  colorRow.className = 'sp-row-wrap';
  colorRow.innerHTML = '<span class="sp-label">Color</span>';
  const td = document.createElement('div');
  td.className = 'swatch';
  td.style.background = 'repeating-linear-gradient(45deg,#888,#888 3px,#bbb 3px,#bbb 6px)';
  td.title = 'Type default';
  td.addEventListener('click', async () => { apply(r => { r.color = null; }); await refresh(); });
  colorRow.appendChild(td);
  SOLID_COLORS.forEach(hex => {
    const sw = document.createElement('div');
    sw.className = 'swatch'; sw.style.background = hex; sw.title = hex;
    sw.addEventListener('click', async () => { apply(r => { r.color = hex; }); await refresh(); });
    colorRow.appendChild(sw);
  });
  const cw = document.createElement('div'); cw.className = 'swatch-custom'; cw.title = 'Custom color';
  const fill = document.createElement('div'); fill.className = 'swatch-custom-fill';
  const ci = document.createElement('input'); ci.type = 'color'; ci.value = '#3498db';
  ci.addEventListener('input', async () => { apply(r => { r.color = ci.value; }); await refresh(); });
  cw.appendChild(fill); cw.appendChild(ci); colorRow.appendChild(cw);
  panel.appendChild(colorRow);

  appendRoutePalettes(panel, idxs);

  const mkBtnRow = (label, pairs, fn) => {
    const row = document.createElement('div'); row.className = 'sp-row';
    row.innerHTML = `<span class="sp-label">${label}</span>`;
    pairs.forEach(([key, text]) => {
      const b = document.createElement('button'); b.className = 'sp-btn'; b.textContent = text;
      b.addEventListener('click', async () => { apply(r => fn(r, key)); await refresh(); });
      row.appendChild(b);
    });
    panel.appendChild(row);
  };
  mkBtnRow('Dash', [['solid', '———'], ['dashed', '– –'], ['dotted', '· · ·'], ['dashdot', '–·–'], ['default', 'Auto']], (r, k) => { r.dash = k; });
  mkBtnRow('Line', [['route', 'Route'], ['curve', 'Curve']], (r, k) => { r.shape = k; });

  const widthRow = document.createElement('div'); widthRow.className = 'sp-row';
  widthRow.innerHTML = '<span class="sp-label">Width</span>';
  const initWidth = first.weight ?? (ROUTE_META[first.type] ? ROUTE_META[first.type].weight : 4);
  const slider = document.createElement('input');
  slider.type = 'range'; slider.min = 1; slider.max = 24; slider.step = 1; slider.value = initWidth; slider.className = 'sp-slider';
  const val = document.createElement('span'); val.className = 'sp-slider-val'; val.textContent = `${initWidth}`;
  slider.addEventListener('input', () => { val.textContent = slider.value; });
  slider.addEventListener('change', async () => { const v = parseInt(slider.value, 10); apply(r => { r.weight = v; }); await refreshRoutesOnly(); });
  widthRow.appendChild(slider); widthRow.appendChild(val); panel.appendChild(widthRow);

  // Density — only when a selected route uses a patterned dash
  if (idxs.some(i => DASH_PATTERNS[routes[i]?.dash])) {
    const densRow = document.createElement('div'); densRow.className = 'sp-row';
    densRow.innerHTML = '<span class="sp-label">Density</span>';
    const initDens = first.dashScale ?? 1;
    const dens = document.createElement('input');
    dens.type = 'range'; dens.min = 0.5; dens.max = 3; dens.step = 0.25; dens.value = initDens; dens.className = 'sp-slider';
    const densVal = document.createElement('span'); densVal.className = 'sp-slider-val'; densVal.textContent = `${initDens}×`;
    dens.addEventListener('input', () => { densVal.textContent = `${dens.value}×`; });
    dens.addEventListener('change', async () => { const v = parseFloat(dens.value); apply(r => { r.dashScale = v; }); await refreshRoutesOnly(); });
    densRow.appendChild(dens); densRow.appendChild(densVal); panel.appendChild(densRow);
  }

  panel.appendChild(makeRouteEmojiRow(idxs));

  return panel;
}

function makeBulkLocPanel(idxs) {
  const panel = document.createElement('div');
  panel.className = 'loc-edit-panel';
  const first = locations[idxs[0]] || {};
  const apply = fn => idxs.forEach(i => { if (locations[i]) fn(locations[i]); });
  const rememberBulkLocStyle = () => {
    if (!locations[idxs[0]]) return;
    rememberPinStyle(locations[idxs[0]]);
    rememberLabelStyle(locations[idxs[0]]);
  };
  const refresh = () => { rememberBulkLocStyle(); rebuildMarkers(); renderLocList(); save(); };
  // Slider edits update the map but must NOT re-render this panel (that would
  // reset the slider/indicator mid-drag); they reflect the first selected stop.
  const refreshMarkersOnly = () => { rememberBulkLocStyle(); rebuildMarkers(); save(); };

  const colorRow = document.createElement('div');
  colorRow.className = 'sp-row-wrap';
  colorRow.innerHTML = '<span class="lep-label">Color</span>';
  SOLID_COLORS.forEach(hex => {
    const sw = document.createElement('div');
    sw.className = 'swatch'; sw.style.background = hex; sw.title = hex;
    sw.addEventListener('click', () => { apply(l => { l.markerColor = hex; }); refresh(); });
    colorRow.appendChild(sw);
  });
  const cw = document.createElement('div'); cw.className = 'swatch-custom'; cw.title = 'Custom color';
  const fill = document.createElement('div'); fill.className = 'swatch-custom-fill';
  const ci = document.createElement('input'); ci.type = 'color'; ci.value = '#89b4fa';
  ci.addEventListener('input', () => { apply(l => { l.markerColor = ci.value; }); refresh(); });
  cw.appendChild(fill); cw.appendChild(ci); colorRow.appendChild(cw);
  panel.appendChild(colorRow);

  appendMarkerPalettes(panel, idxs);

  // Border color
  const borderRow = document.createElement('div'); borderRow.className = 'sp-row';
  borderRow.innerHTML = '<span class="lep-label">Border</span>';
  const bInput = document.createElement('input'); bInput.type = 'color';
  bInput.value = first.markerBorderColor || '#ffffff';
  bInput.style.cssText = 'width:34px;height:24px;border:none;border-radius:5px;cursor:pointer;padding:1px;flex-shrink:0;';
  bInput.addEventListener('input', () => { apply(l => { l.markerBorderColor = bInput.value; }); refreshMarkersOnly(); });
  const bReset = document.createElement('button'); bReset.className = 'sp-btn'; bReset.textContent = 'Default';
  bReset.addEventListener('click', () => { apply(l => { l.markerBorderColor = null; }); refresh(); });
  borderRow.appendChild(bInput); borderRow.appendChild(bReset);
  panel.appendChild(borderRow);

  const shapeRow = document.createElement('div'); shapeRow.className = 'sp-row';
  shapeRow.innerHTML = '<span class="lep-label">Shape</span>';
  Object.entries(LOC_SHAPES).forEach(([key, s]) => {
    const b = document.createElement('button'); b.className = 'shape-btn'; b.textContent = s.label; b.title = key;
    b.addEventListener('click', () => { apply(l => { l.shape = key; }); refresh(); });
    shapeRow.appendChild(b);
  });
  panel.appendChild(shapeRow);

  const sizeRow = document.createElement('div'); sizeRow.className = 'sp-row';
  sizeRow.innerHTML = '<span class="lep-label">Size</span>';
  const slider = document.createElement('input');
  slider.type = 'range'; slider.min = 8; slider.max = 80; slider.step = 1; slider.value = first.markerSize ?? 18; slider.className = 'sp-slider';
  const val = document.createElement('span'); val.className = 'sp-slider-val'; val.textContent = `${first.markerSize ?? 18}`;
  slider.addEventListener('input', () => { val.textContent = slider.value; });
  slider.addEventListener('change', () => { const v = parseInt(slider.value, 10); apply(l => { l.markerSize = v; }); refreshMarkersOnly(); });
  sizeRow.appendChild(slider); sizeRow.appendChild(val); panel.appendChild(sizeRow);

  // Ring gap — only when at least one selected pin uses the ring shape
  if (idxs.some(i => (locations[i]?.shape) === 'ring')) {
    const gapRow = document.createElement('div'); gapRow.className = 'sp-row';
    gapRow.innerHTML = '<span class="lep-label">Ring gap</span>';
    const gapSlider = document.createElement('input');
    gapSlider.type = 'range'; gapSlider.min = 0; gapSlider.max = 80; gapSlider.step = 1; gapSlider.value = first.ringGap ?? 6; gapSlider.className = 'sp-slider';
    const gapVal = document.createElement('span'); gapVal.className = 'sp-slider-val'; gapVal.textContent = `${first.ringGap ?? 6}%`;
    gapSlider.addEventListener('input', () => { gapVal.textContent = `${gapSlider.value}%`; });
    gapSlider.addEventListener('change', () => { const v = parseInt(gapSlider.value, 10); apply(l => { l.ringGap = v; }); refreshMarkersOnly(); });
    gapRow.appendChild(gapSlider); gapRow.appendChild(gapVal); panel.appendChild(gapRow);
  }

  // Number size (# size) — scales the digit on the pin and in the label
  const numSizeRow = document.createElement('div'); numSizeRow.className = 'sp-row';
  numSizeRow.innerHTML = '<span class="lep-label"># size</span>';
  const numSlider = document.createElement('input');
  numSlider.type = 'range'; numSlider.min = 20; numSlider.max = 400; numSlider.step = 5;
  numSlider.value = first.labelNumberSize ?? 85; numSlider.className = 'sp-slider';
  const numSliderVal = document.createElement('span'); numSliderVal.className = 'sp-slider-val'; numSliderVal.textContent = `${first.labelNumberSize ?? 85}%`;
  numSlider.addEventListener('input', () => { numSliderVal.textContent = `${numSlider.value}%`; });
  numSlider.addEventListener('change', () => { const v = parseInt(numSlider.value, 10); apply(l => { l.labelNumberSize = v; }); refreshMarkersOnly(); });
  numSizeRow.appendChild(numSlider); numSizeRow.appendChild(numSliderVal); panel.appendChild(numSizeRow);

  // Number color (pin digit + label number)
  const numColorRow = document.createElement('div'); numColorRow.className = 'sp-row';
  numColorRow.innerHTML = '<span class="lep-label"># color</span>';
  const nc = document.createElement('input'); nc.type = 'color';
  nc.value = first.markerNumberColor || '#18181b';
  nc.style.cssText = 'width:34px;height:24px;border:none;border-radius:5px;cursor:pointer;padding:1px;flex-shrink:0;';
  nc.addEventListener('input', () => { apply(l => { l.markerNumberColor = nc.value; l.labelNumberColor = nc.value; }); refreshMarkersOnly(); });
  numColorRow.appendChild(nc); panel.appendChild(numColorRow);

  const modeRow = document.createElement('div'); modeRow.className = 'sp-row';
  modeRow.innerHTML = '<span class="lep-label">Label</span>';
  [['always', 'Always'], ['hover', 'Hover'], ['hidden', 'Hidden']].forEach(([key, label]) => {
    const b = document.createElement('button'); b.className = 'sp-btn'; b.textContent = label;
    b.addEventListener('click', () => { apply(l => { l.labelMode = key; }); refresh(); });
    modeRow.appendChild(b);
  });
  panel.appendChild(modeRow);

  const posRow = document.createElement('div'); posRow.className = 'sp-row top';
  posRow.innerHTML = '<span class="lep-label">Position</span>';
  posRow.appendChild(makeLabelPosGrid(null, pos => {
    apply(l => { l.labelPos = pos; const o = defaultLabelOffset(pos, l.markerSize ?? 18); l.labelOffsetX = o.x; l.labelOffsetY = o.y; });
    refresh();
  }));
  panel.appendChild(posRow);

  return panel;
}

// ── Drag-and-drop reordering ──────────────────────────────────────────────────
let dragSrcIdx = null;
function clearDragMarkers() {
  document.querySelectorAll('.list-item').forEach(el =>
    el.classList.remove('dragging', 'drag-over-top', 'drag-over-bottom'));
}
function attachDragReorder(item, i) {
  item.addEventListener('dragstart', e => {
    dragSrcIdx = i;
    item.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
    try { e.dataTransfer.setData('text/plain', String(i)); } catch {}
  });
  item.addEventListener('dragend', () => { dragSrcIdx = null; clearDragMarkers(); });
  item.addEventListener('dragover', e => {
    if (dragSrcIdx === null) return;
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    const r = item.getBoundingClientRect();
    const after = e.clientY > r.top + r.height / 2;
    item.classList.toggle('drag-over-bottom', after);
    item.classList.toggle('drag-over-top', !after);
  });
  item.addEventListener('dragleave', () => item.classList.remove('drag-over-top', 'drag-over-bottom'));
  item.addEventListener('drop', e => {
    e.preventDefault();
    if (dragSrcIdx === null) return;
    const r = item.getBoundingClientRect();
    const after = e.clientY > r.top + r.height / 2;
    let to = i + (after ? 1 : 0);
    if (dragSrcIdx < to) to -= 1;          // account for removal of the dragged item
    const from = dragSrcIdx;
    dragSrcIdx = null; clearDragMarkers();
    if (from !== to) moveLocation(from, to);
  });
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

function detailPanelScrollKey() {
  return sel.kind && sel.idxs.length ? `detail:${sel.kind}:${sel.idxs.join(',')}` : '';
}

// Reflect the active tab and the multi-select toggle in the tab bar chrome.
function updateTabBar() {
  document.getElementById('tab-pins')?.classList.toggle('active', activeTab === 'pins');
  document.getElementById('tab-routes')?.classList.toggle('active', activeTab === 'routes');
  document.getElementById('btn-history')?.classList.toggle('active', activeTab === 'history');
  const ms = document.getElementById('btn-multiselect');
  if (ms) {
    ms.hidden = activeTab === 'history';
    ms.classList.toggle('active', multiSelect);
    ms.title = multiSelect
      ? 'Multi-select on: click items to add/remove without Ctrl'
      : 'Multi-select off: click selects one (Ctrl/Shift for many)';
  }
}

function renderLocList() {
  renderNextModeBtns();
  updateTabBar();
  document.body.classList.toggle('history-active', activeTab === 'history');
  const el = document.getElementById('loc-list');
  const listScrollTop = el.scrollTop;
  rememberPanelScrollPositions(el);

  el.innerHTML = '';

  if (activeTab === 'history') {
    renderHistoryList(el);
    renderSavedHistoryOverlays();
    return;
  }

  if (!locations.length) {
    el.innerHTML = '<div class="empty-hint">Search a place or click "Pick on map" to start your trip.</div>';
    clearSelection();
    renderDetailPanel();
    return;
  }

  if (activeTab === 'routes') renderRoutesList(el);
  else renderPinsList(el);

  renderDetailPanel();

  const restoreScroll = () => {
    el.scrollTop = listScrollTop;
    restorePanelScrollPositions(el);
  };
  restoreScroll();
  requestAnimationFrame(restoreScroll);
}

// ── Pins tab ──────────────────────────────────────────────────────────────────
function renderPinsList(el) {
  locations.forEach((loc, i) => {
    const item = document.createElement('div');
    item.className = 'list-item'; item.id = `loc-item-${i}`;
    item.draggable = true;
    // If the same place appears more than once, tag the stop with its visit ordinal.
    const key = locKey(loc);
    const visitTotal = locations.reduce((n, l) => n + (locKey(l) === key ? 1 : 0), 0);
    const visitOrd = locations.slice(0, i + 1).reduce((n, l) => n + (locKey(l) === key ? 1 : 0), 0);
    const visitTag = visitTotal > 1 ? `Visit ${visitOrd}/${visitTotal}` : '';
    const sub = [loc.date, visitTag, `${loc.lat.toFixed(4)}, ${loc.lng.toFixed(4)}`].filter(Boolean).join(' · ');
    item.innerHTML =
      `<span class="drag-handle" title="Drag to reorder">⠿</span>
       <div class="loc-num" style="background:${loc.markerColor||'var(--accent)'};">${i+1}</div>
       <div class="item-body">
         <div class="item-name">${loc.name}</div>
         <div class="item-sub">${sub}</div>
       </div>
       <button class="btn-sm edit" title="Edit">${ICONS.edit}</button>
       <button class="btn-sm fly"  title="Fly to">${ICONS.flyTo}</button>
       <button class="btn-sm del"  title="Remove">${ICONS.del}</button>`;
    // Click anywhere on the row (except the action buttons) to select it; Shift =
    // range, Ctrl/Cmd (or multi-select mode) = toggle. Edit does the same.
    item.addEventListener('click', e => {
      if (e.target.closest('.btn-sm')) return;
      selectItem('loc', i, clickMods(e));
      renderLocList();
    });
    item.querySelector('.edit').addEventListener('click', e => {
      selectItem('loc', i, clickMods(e));
      renderLocList();
    });
    item.querySelector('.fly').addEventListener('click', () => map.flyTo([loc.lat, loc.lng], 10));
    item.querySelector('.del').addEventListener('click', () => deleteLocation(i));
    attachDragReorder(item, i);
    el.appendChild(item);
  });

  // Highlight every selected row so the list reads as active while editing.
  if (sel.kind === 'loc') {
    sel.idxs.forEach(i => el.querySelector(`#loc-item-${i}`)?.classList.add('selected'));
  }
}

// ── Routes tab ──────────────────────────────────────────────────────────────────
// Each segment gets its own row: travel-mode buttons (which also un-hide), a colour
// dot, a Show/Hide toggle and the ✦ style toggle. A global "Only pins" switch up top
// hides every route at once. Because this list exists independently of the map lines,
// a hidden route can always be brought back from here.
function renderRoutesList(el) {
  const head = document.createElement('div');
  head.className = 'routes-head';
  const onlyBtn = document.createElement('button');
  onlyBtn.className = 'routes-onlypins' + (onlyPins ? ' active' : '');
  onlyBtn.textContent = onlyPins ? 'Only pins: ON' : 'Only pins: OFF';
  onlyBtn.title = 'Hide every route on the map, keeping only the pins';
  onlyBtn.addEventListener('click', () => setOnlyPins(!onlyPins));
  head.appendChild(onlyBtn);
  el.appendChild(head);

  if (locations.length < 2) {
    const hint = document.createElement('div');
    hint.className = 'empty-hint';
    hint.textContent = 'Add at least two stops to connect them with routes.';
    el.appendChild(hint);
    return;
  }

  for (let i = 1; i < locations.length; i++) {
    const r = routes.find(r => r.fromIdx === i - 1 && r.toIdx === i);
    if (!r) continue;
    const rIdx = routes.indexOf(r);
    const selected = sel.kind === 'route' && sel.idxs.includes(rIdx);
    const hidden = onlyPins || r.hidden;

    const item = document.createElement('div');
    item.className = 'route-item' + (selected ? ' selected' : '') + (hidden ? ' is-hidden' : '');
    item.id = `route-item-${rIdx}`;

    const rowHead = document.createElement('div');
    rowHead.className = 'route-head';
    rowHead.innerHTML =
      `<div class="route-num">${i}<span class="route-arrow">→</span>${i + 1}</div>
       <div class="route-name">${locations[i - 1].name} → ${locations[i].name}</div>`;
    const hideBtn = document.createElement('button');
    hideBtn.className = 'route-hide' + (r.hidden ? ' off' : '');
    hideBtn.textContent = r.hidden ? 'Show' : 'Hide';
    hideBtn.title = r.hidden ? 'Show this route on the map' : 'Hide this route, keep the stops';
    hideBtn.addEventListener('click', async e => {
      e.stopPropagation();
      routes[rIdx].hidden = !routes[rIdx].hidden;
      await redrawRoute(rIdx);
    });
    rowHead.appendChild(hideBtn);
    const styleBtn = document.createElement('button');
    styleBtn.className = 'style-toggle' + (selected ? ' open' : '');
    styleBtn.textContent = '✦'; styleBtn.title = 'Style segment (Shift+click to select multiple)';
    styleBtn.addEventListener('click', e => {
      e.stopPropagation();
      selectItem('route', rIdx, clickMods(e));
      renderLocList();
    });
    rowHead.appendChild(styleBtn);
    item.appendChild(rowHead);

    const modes = document.createElement('div');
    modes.className = 'route-modes';
    modes.appendChild(makeSegmentModeBtns(rIdx, r.type));
    const swatch = document.createElement('div');
    swatch.className = 'route-swatch';
    swatch.style.background = r.color ?? ROUTE_META[r.type].color;
    modes.appendChild(swatch);
    item.appendChild(modes);

    // Clicking the row body (not a button) selects the segment too.
    item.addEventListener('click', e => {
      if (e.target.closest('button')) return;
      selectItem('route', rIdx, clickMods(e));
      renderLocList();
    });

    el.appendChild(item);
  }
}

// ── History tab ──────────────────────────────────────────────────────────────
function renderHistoryList(el) {
  const intro = document.createElement('div');
  intro.className = 'history-intro';
  intro.textContent = 'Use Add from map, then pause over an area to preview it. Click for a province/state; double-click for a country.';
  el.appendChild(intro);

  const mapPick = document.createElement('button');
  mapPick.className = 'btn btn-accent btn-full';
  mapPick.textContent = historyMapPick ? 'Cancel map selection' : 'Add from map';
  mapPick.addEventListener('click', () => {
    historyMapPick = !historyMapPick;
    if (!historyMapPick) clearAreaHover();
    renderLocList();
  });
  el.appendChild(mapPick);

  if (selectedArea) {
    const card = document.createElement('div'); card.className = 'history-selection';
    const title = document.createElement('div'); title.className = 'history-selection-title'; title.textContent = selectedArea.name;
    const type = document.createElement('div'); type.className = 'history-selection-type'; type.textContent = HISTORY_KIND_LABELS[selectedArea.kind];
    const actions = document.createElement('div'); actions.className = 'history-selection-actions';
    const saved = travelHistory.find(item => item.kind === selectedArea.kind && item.name.toLocaleLowerCase() === selectedArea.name.toLocaleLowerCase());
    [['visited', 'Traveled'], ['stopped', 'Stopped by'], ['passed', 'Passed through'], ['lived', 'Lived']].forEach(([status, label]) => {
      const button = document.createElement('button'); button.className = `history-status-btn ${status}`;
      button.textContent = label; button.classList.toggle('active', saved?.status === status);
      button.addEventListener('click', () => saveAreaToHistory(selectedArea.name, selectedArea.kind, status, selectedArea.countryName, selectedArea.geometry));
      actions.appendChild(button);
    });
    card.append(title, type, actions); el.appendChild(card);
  }

  if (pendingHistoryEntry) {
    const card = document.createElement('div'); card.className = 'history-selection';
    const title = document.createElement('div'); title.className = 'history-selection-title'; title.textContent = pendingHistoryEntry.name;
    const type = document.createElement('div'); type.className = 'history-selection-type'; type.textContent = 'Choose your stay mode before adding';
    const actions = document.createElement('div'); actions.className = 'history-selection-actions';
    [['visited', 'Traveled'], ['stopped', 'Stopped by'], ['passed', 'Passed through'], ['lived', 'Lived']].forEach(([status, label]) => {
      const button = document.createElement('button'); button.className = `history-status-btn ${status}`; button.textContent = label;
      button.addEventListener('click', () => {
        addTravelHistoryEntry(pendingHistoryEntry.name, pendingHistoryEntry.kind, status, pendingHistoryEntry.country);
        pendingHistoryEntry = null; renderLocList(); scrollHistoryToLast();
      });
      actions.appendChild(button);
    });
    card.append(title, type, actions); el.appendChild(card);
  }

  const form = document.createElement('div'); form.className = 'history-form';
  const place = document.createElement('input'); place.type = 'text'; place.placeholder = 'Search country or province…'; place.maxLength = 120;
  const results = document.createElement('div'); results.className = 'history-search-results';
  let timer = null;
  place.addEventListener('input', () => {
    clearTimeout(timer); results.innerHTML = '';
    const query = place.value.trim(); if (query.length < 2) return;
    timer = setTimeout(async () => {
      try {
        const matches = (await geocodeSearch(query)).filter(r => ['country', 'state', 'province', 'region'].includes(r.addresstype) || r.category === 'boundary').slice(0, 6);
        matches.forEach(r => {
          const item = document.createElement('button'); item.className = 'history-search-result';
          item.textContent = r.displayName;
          item.addEventListener('click', () => {
            const kind = r.addresstype === 'country' || r.address?.country === r.name ? 'country' : 'province';
            pendingHistoryEntry = { name: r.name, kind, country: r.address?.country || '' };
            renderLocList();
          });
          results.appendChild(item);
        });
        if (!matches.length) results.textContent = 'No country or province found.';
      } catch { results.textContent = 'Search unavailable.'; }
    }, 250);
  });
  form.append(place); el.appendChild(form); el.appendChild(results);

  const counts = travelHistory.reduce((all, item) => { all[item.status] = (all[item.status] || 0) + 1; return all; }, {});
  const summary = document.createElement('div'); summary.className = 'history-summary';
  summary.textContent = travelHistory.length
    ? `${travelHistory.length} saved · ${counts.visited || 0} traveled · ${counts.stopped || 0} stopped by · ${counts.passed || 0} passed through · ${counts.lived || 0} lived`
    : 'No places saved yet.';
  el.appendChild(summary);

  const list = document.createElement('div'); list.className = 'history-list';
  [...travelHistory].sort((a, b) => a.name.localeCompare(b.name)).forEach(item => {
    const idx = travelHistory.indexOf(item);
    const row = document.createElement('div'); row.className = 'history-item';
    row.style.setProperty('--history-status-color', TRAVEL_STATUS_COLORS[item.status]);
    const info = document.createElement('div'); info.className = 'history-item-info';
    const name = document.createElement('div'); name.className = 'history-item-name'; name.textContent = item.name;
    const meta = document.createElement('div'); meta.className = 'history-item-meta';
    meta.textContent = `${HISTORY_KIND_LABELS[item.kind]} · ${HISTORY_STATUS_LABELS[item.status]}`;
    info.append(name, meta);
    const itemStatus = document.createElement('select'); itemStatus.className = 'history-item-status';
    Object.entries(HISTORY_STATUS_LABELS).forEach(([value, label]) => itemStatus.add(new Option(label, value, false, value === item.status)));
    itemStatus.addEventListener('change', () => {
      travelHistory[idx].status = itemStatus.value;
      refreshSelectedAreaStyle(item.name, item.kind, itemStatus.value);
      save(); renderLocList();
    });
    const remove = document.createElement('button'); remove.className = 'btn btn-red history-remove'; remove.textContent = 'Remove';
    remove.addEventListener('click', () => {
      travelHistory.splice(idx, 1);
      refreshSelectedAreaStyle(item.name, item.kind, null);
      save(); renderLocList();
    });
    row.append(info, itemStatus, remove); list.appendChild(row);
  });
  el.appendChild(list);
}

function setOnlyPins(v) {
  onlyPins = !!v;
  localStorage.setItem('trip-mapper-only-pins', onlyPins ? '1' : '0');
  rebuildAllRoutes(); renderLocList(); save();
}

// ── Detail panel (right side) ───────────────────────────────────────────────────
// Hosts the style/edit controls for the currently-selected route segment or stop,
// so they no longer crowd the left list. Mutually exclusive: at most one is open.
function renderDetailPanel() {
  const panel = document.getElementById('detail-panel');
  if (!panel) return;
  rememberPanelScrollPositions(panel);
  panel.innerHTML = '';

  // Drop any selected indices that no longer exist (after deletes, etc.).
  if (sel.kind === 'route') sel.idxs = sel.idxs.filter(i => routes[i]);
  if (sel.kind === 'loc')   sel.idxs = sel.idxs.filter(i => locations[i]);
  if (!sel.idxs.length) sel.kind = null;

  let title = '', content = null;
  if (sel.kind === 'route' && sel.idxs.length === 1) {
    const i = sel.idxs[0], r = routes[i];
    title = `${TYPE_EMOJI[r.type] || ''} Segment ${r.fromIdx + 1} → ${r.toIdx + 1}`;
    content = makeStylePanel(i, r);
  } else if (sel.kind === 'route' && sel.idxs.length > 1) {
    title = `${sel.idxs.length} segments`;
    content = makeBulkRoutePanel([...sel.idxs]);
  } else if (sel.kind === 'loc' && sel.idxs.length === 1) {
    const i = sel.idxs[0];
    title = `Stop ${i + 1} · ${locations[i].name}`;
    content = makeLocEditPanel(i);
  } else if (sel.kind === 'loc' && sel.idxs.length > 1) {
    title = `${sel.idxs.length} stops`;
    content = makeBulkLocPanel([...sel.idxs]);
  }

  if (!content) {
    panel.classList.add('is-empty');
    panel.innerHTML = '<div class="detail-empty">Select a stop or route segment to style it.<br><br>Shift+click to select several and edit them together.</div>';
    return;
  }

  panel.classList.remove('is-empty');
  const header = document.createElement('div');
  header.className = 'detail-header';
  const titleEl = document.createElement('span');
  titleEl.className = 'detail-title';
  titleEl.textContent = title;
  const close = document.createElement('button');
  close.className = 'btn-icon';
  close.title = 'Close';
  close.innerHTML = ICONS.del;
  close.addEventListener('click', () => { clearSelection(); renderLocList(); });
  header.appendChild(titleEl);
  header.appendChild(close);
  panel.appendChild(header);

  const body = document.createElement('div');
  body.className = 'detail-body';
  const scrollKey = detailPanelScrollKey();
  if (scrollKey) body.dataset.scrollKey = scrollKey;
  body.appendChild(content);
  panel.appendChild(body);
  restorePanelScrollPositions(panel);
  requestAnimationFrame(() => restorePanelScrollPositions(panel));
}

// ── Change route type ─────────────────────────────────────────────────────────
async function changeRouteType(idx, newType) {
  routes[idx].type = newType;
  // Picking a transport mode is an intent to show the route, so un-hide it. (The
  // global "only pins" switch still wins until it's turned off.)
  routes[idx].hidden = false;
  clearRouteLayer(idx);
  await drawRoute(idx);
  renderLocList();
  save();
}

// ── Fit map ───────────────────────────────────────────────────────────────────
function fitAll() {
  if (!locations.length) return;
  map.invalidateSize();
  const bounds = L.latLngBounds(locations.map(l => [l.lat, l.lng]));
  // Tight pixel padding (instead of a large ratio pad) keeps the view close to the
  // cluster; a higher maxZoom lets small/single-stop trips zoom in meaningfully.
  map.fitBounds(bounds, { padding: [50, 50], maxZoom: 14 });
}

function fitRecentPins(count = 3) {
  if (!locations.length) return;
  map.invalidateSize();
  const recent = locations.slice(-count);
  const bounds = L.latLngBounds(recent.map(l => [l.lat, l.lng]));
  map.fitBounds(bounds, { padding: [50, 50], maxZoom: 14 });
}

// ── Storage ───────────────────────────────────────────────────────────────────
function save() {
  if (IS_EMBED) return;
  rememberCurrentSelectionStyles();
  localStorage.setItem('trip-mapper-v2', JSON.stringify(makeTripData()));
}

function normalizeRoute(r) {
  const shape = r.shape === 'curve' ? 'curve' : 'route';
  const cc = r.curveCtrl;
  return {
    fromIdx: r.fromIdx, toIdx: r.toIdx, type: r.type || 'car',
    color:  r.color  ?? (r.colorMode === 'custom' ? r.customColor : null),
    dash:   r.dash   ?? (r.style === 'dashed' ? 'dashed' : r.style === 'dotted' ? 'dotted' : 'solid'),
    dashScale: Number.isFinite(r.dashScale) ? r.dashScale : 1,
    shape,
    weight: r.weight ?? null,
    curveCtrl: cc && Number.isFinite(cc.lat) && Number.isFinite(cc.lng) ? { lat: cc.lat, lng: cc.lng } : null,
    hidden: !!r.hidden,
    emoji: !!r.emoji,
    emojiSize: Number.isFinite(r.emojiSize) ? r.emojiSize : 16,
    emojiBg: !!r.emojiBg,
  };
}

// ── Custom CSS ────────────────────────────────────────────────────────────────
const _customCssEl = (() => {
  const el = document.createElement('style'); el.id = 'trip-mapper-custom-css';
  document.head.appendChild(el); return el;
})();

function applyCustomCss(css, { persist = true } = {}) {
  _customCssEl.textContent = css || '';
  if (persist) localStorage.setItem('trip-mapper-custom-css', css || '');
}

function loadCustomCss() {
  applyCustomCss(localStorage.getItem('trip-mapper-custom-css') || '');
}

function currentSettings() {
  return {
    uiTheme: document.documentElement.getAttribute('data-theme') || 'dark',
    mapTheme: document.getElementById('theme-select').value || 'voyager',
    labelFont: document.getElementById('label-font-select').value || 'Noto Sans KR',
    numberFont: document.getElementById('number-font-select').value || 'Noto Sans KR',
    showRouteEmoji,
    routeEmojiSize,
    routeEmojiBg,
    onlyPins,
    customPalettes: customPalettes.map(p => ({ name: p.name, colors: [...p.colors] })),
    customCss: localStorage.getItem('trip-mapper-custom-css') || '',
    paletteOrder: paletteOrderSettings(),
    styleMemory: styleMemorySettings(),
  };
}

function makeTripData() {
  return {
    version: 2,
    settings: currentSettings(),
    locations,
    routes,
    travelHistory,
  };
}

function normalizeTravelHistory(items) {
  if (!Array.isArray(items)) return [];
  const validKinds = new Set(['country', 'province']);
  const validStatuses = new Set(['visited', 'stopped', 'passed', 'lived']);
  const seen = new Set();
  return items.reduce((history, item) => {
    const name = typeof item?.name === 'string' ? item.name.trim().replace(/\s+/g, ' ') : '';
    const kind = validKinds.has(item?.kind) ? item.kind : 'country';
    const status = validStatuses.has(item?.status) ? item.status : 'visited';
    const key = `${kind}:${name.toLocaleLowerCase()}`;
    if (!name || seen.has(key)) return history;
    seen.add(key);
    const country = typeof item?.country === 'string' ? item.country.trim().replace(/\s+/g, ' ') : '';
    const geometry = item?.geometry && ['Polygon', 'MultiPolygon'].includes(item.geometry.type) ? item.geometry : null;
    history.push({ name, kind, status, country, geometry });
    return history;
  }, []);
}

function applyTripSettings(settings = {}, { persist = !IS_EMBED } = {}) {
  const uiTheme = settings.uiTheme || localStorage.getItem('trip-mapper-ui-theme') || 'dark';
  const mapTheme = settings.mapTheme || localStorage.getItem('trip-mapper-map-theme') || 'voyager';
  const labelFont = settings.labelFont || settings.font || localStorage.getItem('trip-mapper-label-font') || localStorage.getItem('trip-mapper-font') || 'Noto Sans KR';
  // Number font defaults to the label font so existing trips keep their look.
  const numberFont = settings.numberFont || localStorage.getItem('trip-mapper-number-font') || labelFont;
  showRouteEmoji = settings.showRouteEmoji ?? (localStorage.getItem('trip-mapper-route-emoji') === '1');
  routeEmojiSize = settings.routeEmojiSize ?? (parseInt(localStorage.getItem('trip-mapper-route-emoji-size'), 10) || 16);
  routeEmojiBg = settings.routeEmojiBg ?? (localStorage.getItem('trip-mapper-route-emoji-bg') === '1');
  onlyPins = settings.onlyPins ?? (localStorage.getItem('trip-mapper-only-pins') === '1');
  if (persist) localStorage.setItem('trip-mapper-only-pins', onlyPins ? '1' : '0');
  if (Array.isArray(settings.customPalettes)) {
    customPalettes = settings.customPalettes.filter(p => p && p.name && Array.isArray(p.colors));
    saveCustomPalettes();
  }

  applyPaletteOrderSettings(settings.paletteOrder || {});
  applyStyleMemorySettings(settings.styleMemory || {});
  applyUiTheme(uiTheme, { persist });
  document.getElementById('theme-select').value = mapTheme;
  setMapTheme(mapTheme);
  if (labelFont.startsWith(LOCAL_FONT_PREFIX)) addLocalFontOption(labelFont.slice(LOCAL_FONT_PREFIX.length));
  if (numberFont.startsWith(LOCAL_FONT_PREFIX)) addLocalFontOption(numberFont.slice(LOCAL_FONT_PREFIX.length));
  document.getElementById('label-font-select').value = labelFont;
  document.getElementById('number-font-select').value = numberFont;
  applyLabelFont(labelFont, { persist });
  applyNumberFont(numberFont, { persist });
  if (settings.customCss != null) applyCustomCss(settings.customCss, { persist });
}

// Legacy trips stored emoji visibility globally (settings.showRouteEmoji). If a trip
// predates per-segment emoji (no route carries an `emoji` field), carry the old global
// settings onto every segment so its look is preserved.
function migrateLegacyRouteEmoji(rawRoutes, settings) {
  if (!settings || !settings.showRouteEmoji) return;
  if ((rawRoutes || []).some(r => r && 'emoji' in r)) return;
  routes.forEach(r => {
    r.emoji = true;
    r.emojiSize = Number.isFinite(settings.routeEmojiSize) ? settings.routeEmojiSize : 16;
    r.emojiBg = !!settings.routeEmojiBg;
  });
}

async function applyTripData(data, { persist = true } = {}) {
  const d = Array.isArray(data) ? { locations: data, routes: [], settings: {} } : (data || {});
  locations = (d.locations || []).map(normalizeLoc);
  routes = (d.routes || []).map(normalizeRoute);
  travelHistory = normalizeTravelHistory(d.travelHistory);
  migrateLegacyRouteEmoji(d.routes, d.settings || {});
  applyTripSettings(d.settings || {}, { persist });
  clearSelection();
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
    travelHistory = normalizeTravelHistory(d.travelHistory);
    migrateLegacyRouteEmoji(d.routes, d.settings || {});
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
  routeLayers = []; routeHitLayers = []; routeEmojiMarkers = [];
  buildTooltipStyles();
  locations.forEach(addLocMarker);
  for (let i = 0; i < routes.length; i++) await drawRoute(i);
  renderLocList();
}

// ── Add location with auto-route ──────────────────────────────────────────────
function makeRoute(fromIdx, toIdx) {
  // New trip segments use the editable curved path by default. Existing saved
  // trips retain their own `shape` setting when they are loaded.
  const route = { fromIdx, toIdx, type: nextRouteType, color: null, dash: 'solid', dashScale: 1, shape: 'curve', weight: null, curveCtrl: null, hidden: false, emoji: false, emojiSize: 16, emojiBg: false };
  applyStyleKeys(route, lastRouteStyle, ROUTE_STYLE_KEYS);
  route.fromIdx = fromIdx;
  route.toIdx = toIdx;
  route.type = nextRouteType;
  route.curveCtrl = null;
  route.hidden = false;
  const paletteColor = routePaletteColorForIndex(routes.length, route.type);
  if (paletteColor !== undefined) route.color = paletteColor;
  return route;
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

  fitRecentPins(3); renderLocList(); save();
  toast(`Added "${name}"`);
}

// Add another stop at an existing pin's place — a revisit. The new stop reuses the
// source's location and visual style (so it looks identical) but starts with its own
// blank date/notes and a fresh default label position. Multiple stops sharing the same
// coordinates are how a repeated visit is stored; the list shows "Visit k/N".
async function revisitLocation(srcIdx) {
  const src = locations[srcIdx];
  if (!src) return;
  const prevIdx = locations.length - 1;
  const locIdx  = locations.length;
  const clone = JSON.parse(JSON.stringify(src));
  clone.date = '';
  clone.description = '';
  // A revisit sits on top of the original pin, so start with its label hidden to
  // avoid stacking two labels in the same spot — turn it on per-stop if wanted.
  clone.labelMode = 'hidden';
  // Drop the source's per-instance label nudge so the revisit gets a clean default.
  delete clone.labelOffsetX; delete clone.labelOffsetY; delete clone.labelWidth;
  locations.push(clone);
  addLocMarker(clone, locIdx);

  if (prevIdx >= 0) {
    const rIdx = routes.length;
    routes.push(makeRoute(prevIdx, locIdx));
    await drawRoute(rIdx);
  }

  fitRecentPins(3); renderLocList(); save();
  const n = locations.filter(l => locKey(l) === locKey(clone)).length;
  toast(`Revisiting "${clone.name}" (visit ${n})`);
}

// ── Delete location (chain reconnect) ─────────────────────────────────────────
async function deleteLocation(idx) {
  const hasPrev = idx > 0, hasNext = idx < locations.length - 1;
  const nextR = routes.find(r => r.fromIdx === idx && r.toIdx === idx+1);
  const prevR = routes.find(r => r.toIdx === idx && r.fromIdx === idx-1);
  const reconnectType = (nextR || prevR)?.type || 'car';

  clearLocMarkers();
  routeLayers.forEach((_, i) => clearRouteLayer(i));
  routeLayers = []; routeHitLayers = []; routeEmojiMarkers = [];
  clearSelection();  // indices shift after removal — simplest to reset selection

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

// Reorder a stop (drag-and-drop in the list). Pin numbers follow the new order and
// routes re-link consecutive stops automatically, keeping each segment's style by
// position. Curve geometry is reset since a segment now joins different stops.
async function moveLocation(from, to) {
  if (from === to || from < 0 || to < 0 || from >= locations.length || to >= locations.length) return;
  const [item] = locations.splice(from, 1);
  locations.splice(to, 0, item);
  const newRoutes = [];
  for (let i = 0; i < locations.length - 1; i++) {
    const r = routes[i] || makeRoute(i, i + 1);
    r.fromIdx = i; r.toIdx = i + 1; r.curveCtrl = null;
    newRoutes.push(r);
  }
  routes = newRoutes;
  clearSelection();
  await rebuildAll();
  renderLocList(); save();
}

// ── Search ────────────────────────────────────────────────────────────────────
const searchInput = document.getElementById('loc-search');
const searchDrop = document.getElementById('search-drop');
const searchHelpBtn = document.getElementById('btn-search-help');
const searchGuide = document.getElementById('search-guide');

function setSearchGuideOpen(open) {
  searchGuide.hidden = !open;
  searchHelpBtn.classList.toggle('active', open);
  searchHelpBtn.setAttribute('aria-expanded', String(open));
}

function showSearchResults(results) {
  searchDrop.innerHTML = '';
  if (!results.length) {
    const empty = document.createElement('div');
    empty.className = 's-item search-empty';
    empty.textContent = 'No results found. Try adding a city, country:xx, or type:address,poi.';
    searchDrop.appendChild(empty);
    searchDrop.style.display = 'flex'; return;
  }
  results.forEach(r => {
    const item = document.createElement('div');
    item.className = 's-item';
    const name = document.createElement('div');
    name.className = 's-item-name';
    name.textContent = r.name;
    const sub = document.createElement('div');
    sub.className = 's-item-sub';
    sub.textContent = r.displayName;
    item.title = r.displayName;
    item.appendChild(name);
    item.appendChild(sub);
    item.addEventListener('click', () => {
      searchDrop.style.display = 'none';
      searchInput.value = '';
      addLocationAuto(r.name, r.lat, r.lng);
    });
    searchDrop.appendChild(item);
  });
  searchDrop.style.display = 'flex';
}

async function doSearch() {
  const q = searchInput.value.trim(); if (!q) return;
  const btn = document.getElementById('btn-search');
  setSearchGuideOpen(false);
  btn.textContent = '…'; btn.disabled = true;
  try { showSearchResults(await geocodeSearch(q)); }
  catch { toast('Search failed. Check your connection.'); }
  btn.textContent = 'Go'; btn.disabled = false;
}

searchInput.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); doSearch(); } });
searchInput.addEventListener('input', () => {
  searchDrop.style.display = 'none';
});
document.getElementById('btn-search').addEventListener('click', doSearch);
searchHelpBtn.addEventListener('click', () => setSearchGuideOpen(searchGuide.hidden));
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    searchDrop.style.display = 'none';
    setSearchGuideOpen(false);
  }
});
document.addEventListener('click', e => {
  if (!e.target.closest('#search-drop') && !e.target.closest('#loc-search') && e.target.id !== 'btn-search')
    searchDrop.style.display = 'none';
  if (!e.target.closest('#search-guide') && !e.target.closest('#btn-search-help') && !e.target.closest('#loc-search'))
    setSearchGuideOpen(false);
});

// ── Pick on map ───────────────────────────────────────────────────────────────
let pickMode = false;
let pickEditIdx = null;

function enterPickMode(editIdx = null) {
  pickMode = true;
  pickEditIdx = Number.isInteger(editIdx) ? editIdx : null;
  document.getElementById('map').classList.add('pick-mode');
  const btn = document.getElementById('btn-pick-loc');
  btn.innerHTML = pickEditIdx == null ? `${ICONS.del} Cancel pick` : `${ICONS.del} Cancel move ${pickEditIdx + 1}`;
  btn.classList.remove('btn-green');
  btn.classList.add('btn-red');
  toast(pickEditIdx == null ? 'Click anywhere on the map to place a stop.' : `Click the map to move stop ${pickEditIdx + 1}.`);
}

function exitPickMode() {
  pickMode = false;
  pickEditIdx = null;
  document.getElementById('map').classList.remove('pick-mode');
  const btn = document.getElementById('btn-pick-loc');
  btn.innerHTML = `${ICONS.pin} Pick on map`;
  btn.classList.remove('btn-red');
  btn.classList.add('btn-green');
  btn.disabled = false;
}

document.getElementById('btn-pick-loc').addEventListener('click', () => {
  if (pickMode) { exitPickMode(); return; }
  enterPickMode();
});

document.addEventListener('keydown', e => { if (e.key === 'Escape' && pickMode) exitPickMode(); });

// ── Left-panel tabs + multi-select toggle ─────────────────────────────────────
multiSelect = localStorage.getItem('trip-mapper-multi-select') === '1';
activeTab = ['pins', 'routes', 'history'].includes(localStorage.getItem('trip-mapper-active-tab')) ? localStorage.getItem('trip-mapper-active-tab') : 'pins';
function setActiveTab(tab) {
  activeTab = ['pins', 'routes', 'history'].includes(tab) ? tab : 'pins';
  if (activeTab === 'history') {
    clearSelection();
    // Province/state borders are easiest to recognise around this level. Keep
    // the user's current centre, only backing out when they were zoomed in.
    if (map.getZoom() > 6) map.setZoom(6, { animate: true });
  }
  if (activeTab !== 'history') {
    clearTimeout(areaHoverTimer);
    areaHoverToken++;
    queuedHoverLookup = null;
    areaHoverEl?.setAttribute('hidden', '');
    if (hoverAreaLayer) { map.removeLayer(hoverAreaLayer); hoverAreaLayer = null; }
  }
  localStorage.setItem('trip-mapper-active-tab', activeTab);
  renderLocList();
}
document.getElementById('tab-pins').addEventListener('click', () => setActiveTab('pins'));
document.getElementById('tab-routes').addEventListener('click', () => setActiveTab('routes'));
document.getElementById('btn-history').addEventListener('click', () => setActiveTab('history'));
document.getElementById('btn-multiselect').addEventListener('click', () => {
  multiSelect = !multiSelect;
  localStorage.setItem('trip-mapper-multi-select', multiSelect ? '1' : '0');
  updateTabBar();
});

map.on('click', async e => {
  if (!pickMode) return;
  e._tripMapperPicking = true;
  const editIdx = pickEditIdx;
  exitPickMode();
  const { lat, lng } = canonicalLatLng(e.latlng);
  const btn = document.getElementById('btn-pick-loc');
  btn.innerHTML = `${ICONS.pin} Resolving…`; btn.disabled = true;
  const name = await reverseGeocode(lat, lng);
  btn.innerHTML = `${ICONS.pin} Pick on map`; btn.disabled = false;
  if (editIdx == null) {
    await addLocationAuto(name, lat, lng);
  } else {
    await updateLocationFromPlace(editIdx, { name, lat, lng });
  }
});

// ── Map area lookup and country selection ────────────────────────────────────
const areaHoverEl = document.getElementById('area-hover');
const areaNameCache = new Map();
let areaHoverTimer = null;
let areaHoverToken = 0;
let hoverLookupBusy = false;
let queuedHoverLookup = null;
let hoverAreaLayer = null;
let countrySelectionLayer = null;
let countrySelectionToken = 0;
let selectedArea = null;
let historyMapPick = false;
let historyOverlayLayer = null;
const TRAVEL_STATUS_COLORS = { visited: '#22a06b', stopped: '#d08b12', passed: '#3b82f6', lived: '#8b5cf6' };

function selectedAreaStyle(status) {
  const color = TRAVEL_STATUS_COLORS[status] || '#a78bfa';
  return { color, weight: 2.5, fillColor: color, fillOpacity: status ? 0.2 : 0.13 };
}

function renderSavedHistoryOverlays() {
  if (historyOverlayLayer) { map.removeLayer(historyOverlayLayer); historyOverlayLayer = null; }
  if (activeTab !== 'history') return;
  const features = travelHistory.filter(entry => entry.geometry).map(entry => ({
    type: 'Feature', geometry: entry.geometry,
    properties: {
      status: entry.status,
      name: entry.kind === 'province' && entry.country ? `${entry.name}, ${entry.country}` : entry.name,
    },
  }));
  if (!features.length) return;
  historyOverlayLayer = L.geoJSON({ type: 'FeatureCollection', features }, {
    pane: 'history-overlay', interactive: true,
    style: feature => selectedAreaStyle(feature.properties.status),
    onEachFeature: (feature, layer) => {
      layer.bindTooltip(feature.properties.name, { sticky: true, direction: 'top', className: 'history-area-tooltip' });
    },
  }).addTo(map);
}

function administrativeName(data) {
  const address = data?.address || {};
  return address.state || address.province || address.region || address.county || address.country || '';
}

function positionAreaHover(point) {
  const padding = 14;
  areaHoverEl.style.left = `${Math.min(point.x + padding, map.getSize().x - 250)}px`;
  areaHoverEl.style.top = `${Math.min(point.y + padding, map.getSize().y - 30)}px`;
}

function clearAreaHover() {
  clearTimeout(areaHoverTimer); areaHoverToken++; queuedHoverLookup = null;
  areaHoverEl.textContent = ''; areaHoverEl.hidden = true;
  if (hoverAreaLayer) { map.removeLayer(hoverAreaLayer); hoverAreaLayer = null; }
}

map.on('mousemove', e => {
  if (pickMode || activeTab !== 'history' || !historyMapPick) return;
  const latlng = canonicalLatLng(e.latlng);
  positionAreaHover(map.latLngToContainerPoint(e.latlng));
  const key = `${latlng.lat.toFixed(2)},${latlng.lng.toFixed(2)}`;
  clearTimeout(areaHoverTimer);
  const token = ++areaHoverToken;
  const cached = areaNameCache.get(key);
  if (cached) {
    areaHoverEl.textContent = cached.name;
    areaHoverEl.hidden = false;
    drawHoverArea(cached.geojson);
    return;
  }
  areaHoverEl.textContent = 'Loading boundary…';
  areaHoverEl.hidden = false;
  if (hoverAreaLayer) { map.removeLayer(hoverAreaLayer); hoverAreaLayer = null; }
  queuedHoverLookup = { latlng, key, token };
  startHoverLookup();
});

function startHoverLookup() {
  if (hoverLookupBusy || !queuedHoverLookup || activeTab !== 'history') return;
  clearTimeout(areaHoverTimer);
  areaHoverTimer = setTimeout(async () => {
    const request = queuedHoverLookup;
    queuedHoverLookup = null;
    hoverLookupBusy = true;
    try {
      const data = await reverseGeocodeData(request.latlng.lat, request.latlng.lng, { zoom: 5, polygon: true });
      const name = administrativeName(data);
      const geojson = data?.geojson && ['Polygon', 'MultiPolygon'].includes(data.geojson.type) ? data.geojson : null;
      if (name) areaNameCache.set(request.key, { name, geojson });
      if (request.token === areaHoverToken && activeTab === 'history') {
        areaHoverEl.textContent = name;
        areaHoverEl.hidden = false;
        drawHoverArea(geojson);
      }
    } catch (err) {
      if (request.token === areaHoverToken && activeTab === 'history') {
        areaHoverEl.textContent = `Boundary unavailable: ${err.message}`;
        areaHoverEl.hidden = false;
      }
    }
    finally {
      hoverLookupBusy = false;
      if (queuedHoverLookup) startHoverLookup();
    }
  }, 100);
}
function drawHoverArea(geojson) {
  if (hoverAreaLayer) { map.removeLayer(hoverAreaLayer); hoverAreaLayer = null; }
  if (!geojson) return;
  hoverAreaLayer = L.geoJSON(geojson, {
    pane: 'area-hover', interactive: false,
    style: { color: '#f43f8e', weight: 3, opacity: 1, fillColor: '#f43f8e', fillOpacity: 0.04 },
  }).addTo(map);
}
map.on('mouseout', () => {
  clearAreaHover();
});

async function selectAdministrativeArea(latlng, kind) {
  // At most one stale hover lookup may remain; do not let a stream of hover
  // requests delay a deliberate selection.
  queuedHoverLookup = null;
  areaHoverToken++;
  const token = ++countrySelectionToken;
  historyMapPick = false;
  clearAreaHover();
  toast(`Selecting ${kind === 'country' ? 'country' : 'province/state'}…`);
  try {
    const data = await reverseGeocodeData(latlng.lat, latlng.lng, { zoom: kind === 'country' ? 3 : 5, polygon: true });
    if (token !== countrySelectionToken) return;
    const name = kind === 'country'
      ? (data?.address?.country || data?.name || 'Selected country')
      : (data?.address?.state || data?.address?.province || data?.name || 'Selected province/state');
    if (!data?.geojson || !['Polygon', 'MultiPolygon'].includes(data.geojson.type)) throw new Error(`No boundary found for ${name}`);
    if (countrySelectionLayer) map.removeLayer(countrySelectionLayer);
    const savedStatus = travelHistory.find(item => item.kind === kind && item.name.toLocaleLowerCase() === name.toLocaleLowerCase())?.status;
    countrySelectionLayer = L.geoJSON(data.geojson, {
      pane: 'country-selection',
      style: selectedAreaStyle(savedStatus),
      interactive: false,
    }).addTo(map);
    selectedArea = { name, kind, countryName: data?.address?.country || '', geometry: data.geojson };
    if (activeTab === 'history') renderLocList();
    toast(`${name} selected.`);
  } catch (err) {
    if (token === countrySelectionToken) toast(`Area selection failed: ${err.message}`);
  }
}

let areaSelectionTimer = null;
map.on('click', e => {
  if (pickMode || e._tripMapperPicking || activeTab !== 'history' || !historyMapPick) return;
  clearTimeout(areaSelectionTimer);
  // Wait just long enough to distinguish a normal click from a double-click.
  areaSelectionTimer = setTimeout(() => selectAdministrativeArea(canonicalLatLng(e.latlng), 'province'), 260);
});
map.on('dblclick', e => {
  if (activeTab !== 'history' || !historyMapPick) return;
  clearTimeout(areaSelectionTimer);
  selectAdministrativeArea(canonicalLatLng(e.latlng), 'country');
});

// ── Map theme ─────────────────────────────────────────────────────────────────
document.getElementById('theme-select').addEventListener('change', e => {
  setMapTheme(e.target.value);
  localStorage.setItem('trip-mapper-map-theme', e.target.value);
});

// ── Static embed modal ────────────────────────────────────────────────────────
const embedModal    = document.getElementById('embed-modal');
const embedPathIn   = document.getElementById('embed-json-path');
const embedCodeArea = document.getElementById('embed-code');
const embedWarn     = document.getElementById('embed-warn');

function buildEmbedCode() {
  const jsonPath = embedPathIn.value.trim();
  const base     = `${location.origin}${location.pathname}`;
  const interactive = document.getElementById('embed-interactive').checked;
  const fontVal  = document.getElementById('embed-font').value.trim();
  // Interactive embeds keep pan/zoom/hover; static ones freeze the map.
  const flags    = interactive ? 'embed=1' : 'embed=1&static=1';
  const fontParam = fontVal ? `&font=${encodeURIComponent(fontVal)}` : '';
  let src, warn = '';

  if (jsonPath) {
    const tripUrl = jsonPath.startsWith('http') ? jsonPath : `${location.origin}/${jsonPath.replace(/^\//, '')}`;
    src = `${base}?${flags}${fontParam}&trip=${encodeURIComponent(tripUrl)}`;
  } else {
    const b64 = btoa(unescape(encodeURIComponent(JSON.stringify(makeTripData()))))
                  .replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
    src = `${base}?${flags}${fontParam}&data=${b64}`;
    if (src.length > 8000) warn = `URL is ${src.length} chars — too large for most browsers. Export JSON, host it, and enter the path above.`;
  }

  embedWarn.textContent = warn;
  embedWarn.hidden = !warn;
  embedCodeArea.value =
`<iframe
  src="${src}"
  width="800" height="500"
  style="border:none;border-radius:8px;"
  loading="lazy"
></iframe>`;
}

document.getElementById('btn-embed').addEventListener('click', () => {
  embedPathIn.value = '';
  buildEmbedCode();
  embedModal.hidden = false;
});
embedPathIn.addEventListener('input', buildEmbedCode);
document.getElementById('embed-interactive').addEventListener('change', buildEmbedCode);
document.getElementById('embed-font').addEventListener('input', buildEmbedCode);
document.getElementById('embed-copy-btn').addEventListener('click', () => {
  navigator.clipboard.writeText(embedCodeArea.value)
    .then(() => toast('Embed code copied!'))
    .catch(() => { embedCodeArea.select(); document.execCommand('copy'); toast('Embed code copied!'); });
});
function closeEmbedModal() { embedModal.hidden = true; }
document.getElementById('embed-modal-close').addEventListener('click', closeEmbedModal);
document.getElementById('embed-close-btn').addEventListener('click', closeEmbedModal);
embedModal.addEventListener('click', e => { if (e.target === embedModal) closeEmbedModal(); });

// ── Image export (screenshot) ─────────────────────────────────────────────────
// Renders the live map element to a canvas with html2canvas, so pins, label
// shapes/text, numbers and fonts match exactly. Optionally hides the basemap.
function downloadBlob(blob, name) {
  const a = Object.assign(document.createElement('a'), { href: URL.createObjectURL(blob), download: name });
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}
async function exportTripPng(transparent, includeMap) {
  if (!locations.length) { toast('Nothing to export yet.'); return; }
  if (typeof html2canvas !== 'function') { toast('Image library not loaded.'); return; }
  const mapEl = document.getElementById('map');
  // Hide map controls (and optionally the basemap tiles) just for the capture.
  const hidden = [];
  const hide = el => { if (el) { hidden.push([el, el.style.display]); el.style.display = 'none'; } };
  hide(mapEl.querySelector('.leaflet-control-container'));
  if (!includeMap) hide(mapEl.querySelector('.leaflet-tile-pane'));
  try {
    await (document.fonts ? document.fonts.ready : Promise.resolve());
    const canvas = await html2canvas(mapEl, {
      useCORS: true,
      backgroundColor: includeMap ? null : (transparent ? null : '#ffffff'),
      scale: Math.min(Math.max(window.devicePixelRatio || 1, 1), 3),
      logging: false,
    });
    canvas.toBlob(b => { if (b) downloadBlob(b, 'trip-map.png'); else toast('Export failed.'); }, 'image/png');
  } catch (err) {
    toast('Image export failed: ' + (err && err.message ? err.message : err));
  } finally {
    hidden.forEach(([el, d]) => { el.style.display = d; });
  }
}
const imageModal = document.getElementById('image-modal');
const imgTransparentEl = document.getElementById('image-transparent');
const imgIncludeMapEl = document.getElementById('image-include-map');
document.getElementById('btn-image').addEventListener('click', () => { imageModal.hidden = false; });
// Transparent background only applies when the map basemap isn't included.
imgIncludeMapEl.addEventListener('change', () => { imgTransparentEl.disabled = imgIncludeMapEl.checked; });
function closeImageModal() { imageModal.hidden = true; }
document.getElementById('image-modal-close').addEventListener('click', closeImageModal);
document.getElementById('image-close-btn').addEventListener('click', closeImageModal);
imageModal.addEventListener('click', e => { if (e.target === imageModal) closeImageModal(); });
document.getElementById('image-png-btn').addEventListener('click', () => { exportTripPng(imgTransparentEl.checked, imgIncludeMapEl.checked); closeImageModal(); });

// ── Travel history ───────────────────────────────────────────────────────────
const HISTORY_STATUS_LABELS = { visited: 'Traveled', stopped: 'Stopped by', passed: 'Passed through', lived: 'Lived' };
const HISTORY_KIND_LABELS = { country: 'Country', province: 'Province / state' };

function addTravelHistoryEntry(rawName, rawKind, rawStatus, rawCountry = '', geometry = null) {
  const name = (rawName || '').trim().replace(/\s+/g, ' ');
  if (!name) { toast('Enter a country or province first.'); return false; }
  const kind = rawKind === 'province' ? 'province' : 'country';
  const status = ['visited', 'stopped', 'passed', 'lived'].includes(rawStatus) ? rawStatus : 'visited';
  const country = (rawCountry || '').trim().replace(/\s+/g, ' ');
  const existing = travelHistory.find(item => item.kind === kind && item.name.toLocaleLowerCase() === name.toLocaleLowerCase());
  if (existing) {
    existing.name = name;
    existing.status = status;
    if (country) existing.country = country;
    if (geometry) existing.geometry = geometry;
    toast(`Updated ${name}.`);
  } else {
    travelHistory.push({ name, kind, status, country, geometry });
    toast(`Saved ${name}.`);
  }
  save();
  return true;
}

function saveAreaToHistory(name, kind, status, country = '', geometry = null) {
  if (!addTravelHistoryEntry(name, kind, status, country, geometry)) return;
  refreshSelectedAreaStyle(name, kind, status);
  renderSavedHistoryOverlays();
  if (activeTab === 'history') { renderLocList(); scrollHistoryToLast(); }
}

function scrollHistoryToLast() {
  requestAnimationFrame(() => {
    const list = document.getElementById('loc-list');
    if (list) list.scrollTop = list.scrollHeight;
  });
}

function refreshSelectedAreaStyle(name, kind, status) {
  if (!selectedArea || selectedArea.kind !== kind || selectedArea.name.toLocaleLowerCase() !== name.toLocaleLowerCase()) return;
  countrySelectionLayer?.setStyle(selectedAreaStyle(status));
}

// ── Custom CSS modal ──────────────────────────────────────────────────────────
const cssModal    = document.getElementById('css-modal');
const cssTextarea = document.getElementById('css-editor');

document.getElementById('btn-css')?.addEventListener('click', () => {
  cssTextarea.value = localStorage.getItem('trip-mapper-custom-css') || '';
  cssModal.hidden = false;
  cssTextarea.focus();
});
cssTextarea.addEventListener('input', () => applyCustomCss(cssTextarea.value));
function closeCssModal() { cssModal.hidden = true; }
document.getElementById('css-modal-close').addEventListener('click', closeCssModal);
document.getElementById('css-close-btn').addEventListener('click', closeCssModal);
cssModal.addEventListener('click', e => { if (e.target === cssModal) closeCssModal(); });
document.getElementById('css-reset-btn').addEventListener('click', () => {
  cssTextarea.value = '';
  applyCustomCss('');
});

// Custom palettes modal wiring
const palettesModal = document.getElementById('palettes-modal');
document.getElementById('palette-new-btn').addEventListener('click', () => {
  const taken = new Set([...Object.keys(PALETTES), ...customPalettes.map(p => p.name)]);
  let n = customPalettes.length + 1, nm = `Custom ${n}`;
  while (taken.has(nm)) { n++; nm = `Custom ${n}`; }
  customPalettes.push({ name: nm, colors: ['#ff006e', '#3a86ff', '#06d6a0', '#ffbe0b'] });
  saveCustomPalettes(); renderPalettesEditor();
});
document.getElementById('palettes-done-btn').addEventListener('click', closePalettesModal);
document.getElementById('palettes-modal-close').addEventListener('click', closePalettesModal);
palettesModal.addEventListener('click', e => { if (e.target === palettesModal) closePalettesModal(); });

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
  locations = []; routes = []; routeLayers = []; routeHitLayers = []; routeEmojiMarkers = []; clearSelection();
  renderLocList(); save();
});
// Ctrl/Cmd+A selects every item in the active tab — all routes on the Routes tab, all
// stops on the Pins tab (unless typing in a field), for bulk editing.
document.addEventListener('keydown', e => {
  if (!(e.ctrlKey || e.metaKey) || (e.key !== 'a' && e.key !== 'A')) return;
  const t = e.target;
  if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)) return;
  if (!locations.length) return;
  if (activeTab === 'routes') {
    if (!routes.length) return;
    sel = { kind: 'route', idxs: routes.map((_, i) => i) };
  } else {
    sel = { kind: 'loc', idxs: locations.map((_, i) => i) };
  }
  selAnchor = sel.idxs[sel.idxs.length - 1];
  expandedPalette = null;
  e.preventDefault();
  renderLocList();
});

// Snap every label back to the tidy default position (marker edge + margin) for
// its current side, clearing any hand-dragged offset and custom width.
document.getElementById('btn-reset-labels').addEventListener('click', () => {
  if (!locations.length) { toast('No labels to reset.'); return; }
  if (!confirm('Reset all label positions to their defaults?')) return;
  locations.forEach(l => {
    const off = defaultLabelOffset(l.labelPos || 'right', l.markerSize ?? 18);
    l.labelOffsetX = off.x; l.labelOffsetY = off.y; l.labelWidth = null;
  });
  rebuildMarkers(); renderLocList(); save();
  toast('Label positions reset.');
});

// ── Fonts ───────────────────────────────────────────────────────────────────────
// Values for locally-installed fonts are stored as "local:<family name>" so they
// can be told apart from the bundled FONTS entries in the dropdowns and storage.
const LOCAL_FONT_PREFIX = 'local:';

// Wrap a locally-installed family with the same CJK/emoji fallbacks the bundled
// stacks use, so non-Latin text still renders even when the chosen font lacks it.
function localFontStack(family) {
  const safe = family.replace(/"/g, '');
  return `"${safe}","Noto Sans KR","Noto Serif KR","Noto Serif SC","Noto Serif TC",var(--emoji-font-family),system-ui,sans-serif`;
}

// A font "slot" applies the chosen font to one CSS variable, lazily managing its
// own Google-Fonts <link> and self-hosted <style>, and persisting the choice.
function makeFontSlot({ cssVar, storageKey, cssId }) {
  let link = null, styleEl = null;
  return function apply(name, { persist = true } = {}) {
    if (!styleEl) { styleEl = document.createElement('style'); styleEl.id = cssId; document.head.appendChild(styleEl); }
    if (typeof name === 'string' && name.startsWith(LOCAL_FONT_PREFIX)) {
      const family = name.slice(LOCAL_FONT_PREFIX.length);
      if (link) link.href = '';                       // no remote webfont for local fonts
      styleEl.textContent = '';
      document.documentElement.style.setProperty(cssVar, localFontStack(family));
    } else {
      const font = FONTS.find(f => f.name === name) || FONTS[0];
      if (font.gf) {
        if (!link) { link = document.createElement('link'); link.rel = 'stylesheet'; document.head.appendChild(link); }
        link.href = `https://fonts.googleapis.com/css2?family=${font.gf}&display=swap`;
      } else if (link) {
        link.href = '';
      }
      styleEl.textContent = font.css || '';
      document.documentElement.style.setProperty(cssVar, font.stack);
      name = font.name;                               // normalize when falling back to default
    }
    if (persist) localStorage.setItem(storageKey, name);
    return name;
  };
}

const applyLabelFont  = makeFontSlot({ cssVar: '--label-font-family',  storageKey: 'trip-mapper-label-font',  cssId: 'trip-mapper-label-font-css'  });
const applyNumberFont = makeFontSlot({ cssVar: '--number-font-family', storageKey: 'trip-mapper-number-font', cssId: 'trip-mapper-number-font-css' });

// Re-position permanent tooltips after a font swap, since the new (possibly web)
// font changes label dimensions that Leaflet's positioning depends on.
function repositionLabelsAfterFonts() {
  applyAllTooltipLayoutStyles();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(applyAllTooltipLayoutStyles);
}
document.getElementById('label-font-select').addEventListener('change', e => { applyLabelFont(e.target.value); repositionLabelsAfterFonts(); });
document.getElementById('number-font-select').addEventListener('change', e => { applyNumberFont(e.target.value); repositionLabelsAfterFonts(); });

// ── Local (installed) fonts ─────────────────────────────────────────────────────
// Uses the Local Font Access API (queryLocalFonts) where available — Chromium
// browsers and the packaged extension. Adds each installed family to every picker.
const FONT_SELECTS = ['label-font-select', 'number-font-select']
  .map(id => document.getElementById(id))
  .filter(Boolean);
const _localFontGroups = new Map();   // select element -> its "Installed fonts" <optgroup>
const _localFontNames = new Set();

function ensureLocalFontGroup(select) {
  let g = _localFontGroups.get(select);
  if (g && g.isConnected) return g;
  g = document.createElement('optgroup');
  g.label = 'Installed fonts';
  select.appendChild(g);
  _localFontGroups.set(select, g);
  return g;
}

// Adds a "local:" option to every picker (used both when enumerating and to
// reflect a saved selection before the user has granted enumeration permission).
function addLocalFontOption(family) {
  if (_localFontNames.has(family)) return;
  _localFontNames.add(family);
  FONT_SELECTS.forEach(select => {
    const opt = document.createElement('option');
    opt.value = LOCAL_FONT_PREFIX + family;
    opt.textContent = family;
    ensureLocalFontGroup(select).appendChild(opt);
  });
}

async function loadLocalFonts() {
  if (!('queryLocalFonts' in window)) {
    toast('Local fonts aren’t supported in this browser.');
    return;
  }
  try {
    const fonts = await window.queryLocalFonts();
    const before = _localFontNames.size;
    [...new Set(fonts.map(f => f.family))].sort((a, b) => a.localeCompare(b)).forEach(addLocalFontOption);
    const added = _localFontNames.size - before;
    toast(added ? `Loaded ${added} installed font${added === 1 ? '' : 's'}.` : 'No new fonts found.');
  } catch (err) {
    toast(err?.name === 'SecurityError' || err?.name === 'NotAllowedError'
      ? 'Permission to read local fonts was denied.'
      : 'Could not read local fonts.');
  }
}
document.getElementById('btn-local-fonts').addEventListener('click', loadLocalFonts);

// ── Boot ──────────────────────────────────────────────────────────────────────
// Populate both font pickers with the bundled fonts.
FONT_SELECTS.forEach(select => {
  FONTS.forEach(f => {
    const opt = document.createElement('option'); opt.value = f.name; opt.textContent = f.name;
    select.appendChild(opt);
  });
});
// Reflect any previously-selected local fonts immediately (full list returns on "+").
[localStorage.getItem('trip-mapper-label-font'), localStorage.getItem('trip-mapper-number-font')]
  .forEach(v => { if (v && v.startsWith(LOCAL_FONT_PREFIX)) addLocalFontOption(v.slice(LOCAL_FONT_PREFIX.length)); });

// ── Panel resize handles ─────────────────────────────────────────────────────────
// Drag the dividers to set the left sidebar and right detail-panel widths; both
// persist. Widths are confined to sane bounds; the map is kept in sync on drag.
function setupPanelResize() {
  const clamp = (v, lo, hi) => Math.min(Math.max(v, lo), hi);
  const SIDEBAR = { min: 190, max: 560, key: 'trip-mapper-sidebar-width' };
  const DETAIL  = { min: 220, max: 620, key: 'trip-mapper-detail-width'  };
  const sidebar = document.getElementById('sidebar');
  const detail  = document.getElementById('detail-panel');

  const savedS = parseInt(localStorage.getItem(SIDEBAR.key), 10);
  if (Number.isFinite(savedS)) sidebar.style.width = clamp(savedS, SIDEBAR.min, SIDEBAR.max) + 'px';
  const savedD = parseInt(localStorage.getItem(DETAIL.key), 10);
  if (Number.isFinite(savedD)) detail.style.width = clamp(savedD, DETAIL.min, DETAIL.max) + 'px';

  // dir: +1 when dragging right grows the panel (left sidebar), -1 for the right panel.
  function bindHandle(handleId, panel, dir, bounds) {
    const handle = document.getElementById(handleId);
    if (!handle) return;
    handle.addEventListener('mousedown', e => {
      e.preventDefault();
      const startX = e.clientX;
      const startW = panel.getBoundingClientRect().width;
      handle.classList.add('dragging');
      document.body.style.cursor = 'col-resize';
      document.body.style.userSelect = 'none';
      const onMove = ev => {
        panel.style.width = clamp(startW + dir * (ev.clientX - startX), bounds.min, bounds.max) + 'px';
        map.invalidateSize();
      };
      const onUp = () => {
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup', onUp);
        handle.classList.remove('dragging');
        document.body.style.cursor = '';
        document.body.style.userSelect = '';
        localStorage.setItem(bounds.key, String(Math.round(panel.getBoundingClientRect().width)));
        map.invalidateSize();
      };
      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup', onUp);
    });
  }

  bindHandle('resize-left',  sidebar, 1,  SIDEBAR);
  bindHandle('resize-right', detail, -1,  DETAIL);
}

async function boot() {
  if (IS_EMBED) document.body.classList.add('embed-mode');
  if (IS_STATIC) {
    document.body.classList.add('static-mode');
    map.dragging.disable();
    map.touchZoom.disable();
    map.doubleClickZoom.disable();
    map.scrollWheelZoom.disable();
    map.boxZoom.disable();
    map.keyboard.disable();
  }

  loadCustomCss();
  loadCustomPalettes();
  applyTripSettings();
  if (!IS_EMBED) { enableLabelDrag(); setupPanelResize(); }

  const tripUrl  = URL_PARAMS.get('trip');
  const tripData = URL_PARAMS.get('data');
  if (tripUrl) {
    await loadTripFromUrl(tripUrl);
  } else if (tripData) {
    try {
      const json = JSON.parse(decodeURIComponent(escape(atob(tripData.replace(/-/g, '+').replace(/_/g, '/')))));
      await applyTripData(json, { persist: false });
    } catch { toast('Could not decode embedded trip data.'); await rebuildAll(); fitAll(); }
  } else {
    load();
    await rebuildAll();
    fitAll();
  }

  // Host-supplied font override (?font=…): the embedding site passes a font-family
  // stack (e.g. "Georgia, serif") so the map's type matches their page.
  const fontOverride = URL_PARAMS.get('font');
  if (fontOverride) {
    document.documentElement.style.setProperty('--label-font-family', fontOverride);
    document.documentElement.style.setProperty('--number-font-family', fontOverride);
    document.documentElement.style.setProperty('--ui-font-family', fontOverride);
  }

  if (IS_EMBED) {
    setTimeout(() => { map.invalidateSize(); fitAll(); }, 0);
  }
}

boot();
