# trip-mapper

A lightweight browser-based tool for mapping trips with custom stops, routes, and labels. Runs as a plain website *and* as a Chrome extension.

The **History** tab keeps a separate list of countries and provinces/states you
have visited, stopped by, or passed through. Click the map to select a
province/state, or double-click to select a country. History is saved with the
trip and is included in exported JSON.

History can also be exported as a PNG independently of pins and routes. Its
export menu supports the current canvas, the whole world (−180° to 180°), and
the eastern hemisphere (0° to 180°). Each Pins, Routes, and History tab also
has a **View only** control that expands the map and hides the editing UI.

## Install as a Chrome extension

**From a release (easiest):** download `trip-mapper-extension.zip` from the
[Releases](../../releases) page, unzip it, then:

1. Open `chrome://extensions`.
2. Enable **Developer mode** (top-right).
3. Click **Load unpacked** and select the unzipped `trip-mapper` folder.
4. Click the Trip Mapper toolbar icon — the app opens in a full browser tab.

**From source:** clone the repo and Load unpacked the project folder directly.
(The release zip is built by `.github/workflows/release.yml`: pushing a `v*` tag
publishes a Release with the zip; running the workflow manually produces a
downloadable build artifact.)

Leaflet is vendored locally under `vendor/leaflet/`, so the app loads without a
CDN. Map tiles, geocoding (Nominatim), and routing (OSRM) still require a network
connection. The extension requests no special permissions.

## Custom & local fonts

The **Label Font** menu lists bundled web fonts plus the **`+`** button beside it,
which loads fonts installed on your device via the
[Local Font Access API](https://developer.mozilla.org/docs/Web/API/Window/queryLocalFonts)
(Chromium browsers and the extension; the browser asks permission the first time).
Installed fonts appear under an *Installed fonts* group and are saved with your
other settings. Browsers without the API simply show the bundled fonts.

## Embedding a static map

The app can be embedded as a fully static, non-interactive map (no pan, no zoom) using the **Embed** button in the toolbar. It copies an `<iframe>` snippet you can paste anywhere.

There are two modes depending on how large your trip data is.

---

### Option A — Self-contained (small trips)

No hosting needed. The trip data is encoded directly into the URL.

1. Build your trip in the app.
2. Click **Embed** in the toolbar.
3. Leave the *Hosted JSON path* field blank.
4. Click **Copy code** and paste the `<iframe>` wherever you need it.

If the trip is too large for a URL (the warning will say so), use Option B.

---

### Option B — Hosted JSON (large trips)

Host the exported JSON file somewhere accessible and point the embed at it.

1. Build your trip and click **Export** to download `trip-mapper.json`.
2. Upload the JSON file to your server, GitHub Pages, or any static host.\
   Example path: `https://yourdomain.com/trips/europe.json`
3. Click **Embed** in the toolbar.
4. Enter the JSON path in the *Hosted JSON path* field:
   - Absolute URL: `https://yourdomain.com/trips/europe.json`
   - Root-relative path (same host as the app): `/trips/europe.json`
5. Click **Copy code** and paste the `<iframe>`.

The generated code looks like this:

```html
<iframe
  src="https://yourdomain.com/trip-mapper/index.html?embed=1&static=1&trip=https%3A%2F%2Fyourdomain.com%2Ftrips%2Feurope.json"
  width="800" height="500"
  style="border:none;border-radius:8px;"
  loading="lazy"
></iframe>
```

---

### Font embeds

The selected **Label Font** is carried into exported JSON and generated iframe
embeds. Bundled web fonts travel with the embed; locally-installed fonts only
render on machines where that font is installed.

Custom CSS from the **CSS** modal is also included in exported JSON and inline
embed data, so iframe maps can load their own font rules instead of depending on
the parent blog page.

---

### URL parameters reference

| Parameter | Value  | Description                                                         |
|-----------|--------|---------------------------------------------------------------------|
| `embed`   | `1`    | Hides the toolbar and sidebar, shows only the map.                  |
| `static`  | `1`    | Freezes the map (no pan/zoom). Implies `embed=1`.                   |
| `trip`    | URL    | Loads trip JSON from the given URL instead of localStorage.         |
| `data`    | base64 | Loads trip JSON encoded inline in the URL (set by the Embed button).|
