# Trip Mapper — Privacy Policy

_Last updated: 2026-06-21_

Trip Mapper is a tool for planning trips and visualizing routes on a map. It is
designed to keep your data on your own device.

## What we collect

**Nothing is sent to the developer.** Trip Mapper has no backend server, no
account system, and no analytics or tracking. The extension requests no special
browser permissions.

## Where your data lives

- **Your trips** (stops, routes, labels, styles, settings) are stored locally in
  your browser via `localStorage` and never leave your device unless *you* choose
  to export them (the **Export** button downloads a JSON file you control) or embed
  them (the **Embed** button generates an iframe snippet you paste where you want).

## Third-party services used for map functionality

To draw maps and find places, the app makes requests directly from your browser to
the following third-party services. These requests are necessary for core features
and are not routed through, logged by, or visible to the developer:

| Service | Purpose | Data sent |
|---|---|---|
| OpenStreetMap **Nominatim** (`nominatim.openstreetmap.org`) | Place search & reverse geocoding | Your search text or a clicked coordinate |
| Project **OSRM** (`router.project-osrm.org`) | Driving/walking/cycling routes | Start and end coordinates of a segment |
| **CARTO** / **OpenStreetMap** tile servers | Map background tiles | The map area you are viewing |
| **Google Fonts** (`fonts.googleapis.com`, `fonts.gstatic.com`) | Label fonts | Standard font-file requests |

Each of these services has its own privacy policy governing requests they receive.
Trip Mapper sends them only the minimum needed to render the map and resolve places.

## Local fonts

If you use the **`+`** "add local fonts" feature, the browser asks your permission
to read the list of fonts installed on your device (via the Local Font Access API).
Selected font names are saved with your settings locally; they are not transmitted.

## Children

Trip Mapper is a general-audience utility and does not knowingly collect any
personal information from anyone, including children.

## Changes

If this policy changes, the updated version will be published in this repository.

## Contact

Questions: open an issue at
<https://github.com/Zeugnis04/trip-mapper/issues>.
