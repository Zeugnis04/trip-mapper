# trip-mapper

A lightweight browser-based tool for mapping trips with custom stops, routes, and labels.

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

### URL parameters reference

| Parameter | Value  | Description                                                         |
|-----------|--------|---------------------------------------------------------------------|
| `embed`   | `1`    | Hides the toolbar and sidebar, shows only the map.                  |
| `static`  | `1`    | Freezes the map (no pan/zoom). Implies `embed=1`.                   |
| `trip`    | URL    | Loads trip JSON from the given URL instead of localStorage.         |
| `data`    | base64 | Loads trip JSON encoded inline in the URL (set by the Embed button).|
