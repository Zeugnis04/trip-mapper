# Chrome Web Store listing kit

Everything needed to fill out the Chrome Web Store (CWS) developer dashboard for
Trip Mapper. Copy/paste the text fields below; gather the assets in the checklist.

---

## Store listing — text fields

**Name**

```
Trip Mapper
```

**Summary** (the short description, max 132 chars)

```
Plan trips and visualize routes between stops on an interactive map. No account, no tracking; trips stay in your browser.
```

**Category**

```
Travel  (alternatively: Productivity)
```

**Language**

```
English
```

**Detailed description**

```
Trip Mapper is a fast, private way to plan a trip and turn it into a clean,
shareable map. Drop stops, connect them with routes, style everything to taste,
and export an image or an embeddable map — all in your browser, with no account
and no tracking.

FEATURES
• Add stops by searching a place or clicking the map; drag to reorder.
• Connect stops with routes per segment: car, walking, cycling, flight, ferry,
  subway, or train — or hide a route entirely ("only pins").
• Curve any route by dragging it, and tune color, width, dash, and a midpoint
  transport emoji per segment.
• Separate Pins and Routes tabs, multi-select, and bulk styling with reusable
  color palettes.
• Revisit a place: click an existing pin to add it again as a new stop; the list
  tracks "Visit 2/3".
• Rich labels: choose what each label shows (number, name, date, notes), position
  it, and pick from bundled or locally-installed fonts.
• Export / import trips as JSON, download a PNG image of the current view, or copy
  an iframe to embed a static or interactive map on your own site.
• Light and dark themes, multiple map styles, and custom CSS.

PRIVACY
Trip Mapper has no backend and asks for no special permissions. Your trips are
stored locally in your browser. Map tiles, place search (OpenStreetMap Nominatim),
and routing (OSRM) are fetched directly from those services to make the map work —
nothing is sent to the developer. See the privacy policy for details.

Works as a Chrome extension and as a plain website.
```

---

## Privacy practices tab

**Single purpose** (one sentence)

```
Trip Mapper lets a user plan a trip by placing map stops and routes, and export or
embed the resulting map.
```

**Permission justifications**

- The extension declares **no permissions** and **no host permissions** — there is
  nothing to justify. (`background.js` only uses `chrome.action`/`chrome.tabs` on
  the extension's own tab, which need no permission.)

**Remote code**: **No.** All executable code (Leaflet, html2canvas, app.js) is
bundled in the package. Google Fonts are stylesheet/font files, not executable code.

**Data usage** — in the "Data collected" form, declare the following as **NOT
collected by the developer**. The app does send the items below directly to
third-party map services for functionality only (disclose if the form asks):

- Location: approximate map coordinates / place-search text → sent to OSM
  Nominatim and OSRM to resolve places and routes. Not collected by the developer.
- Everything else: none. No personally identifiable info, no analytics, no auth.

**Privacy policy URL**

```
https://github.com/Zeugnis04/trip-mapper/blob/main/PRIVACY.md
```

---

## Assets checklist

| Asset | Spec | Status |
|---|---|---|
| Store icon | 128×128 PNG | ✅ `icons/icon128.png` (in package) |
| Screenshot(s) | 1280×800 or 640×400 PNG/JPEG, at least **1**, up to 5 | ⬜ capture from the app (use the in-app **Image** export or a screen grab) |
| Small promo tile | 440×280 PNG/JPEG | ⬜ optional but recommended |
| Marquee promo tile | 1400×560 PNG/JPEG | ⬜ optional |

Tip for screenshots: build a nice sample trip, then use the toolbar **Image**
button (or a 1280×800 browser window grab) to produce clean shots.

---

## Submission steps

1. Bump `version` in `manifest.json` (CWS requires a new, higher version per upload).
2. Build the zip — push a `v*` tag to run `.github/workflows/release.yml`, or zip
   the extension files locally:
   `zip -r trip-mapper-extension.zip manifest.json background.js index.html app.js style.css icons vendor README.md`
3. Go to the [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole)
   (one-time US$5 registration fee).
4. **Add new item** → upload the zip.
5. Fill in the **Store listing** text (above) and upload the **Assets**.
6. Complete the **Privacy practices** tab (above) and add the privacy policy URL.
7. Submit for review.
