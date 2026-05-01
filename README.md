# trip-mapper
Mapping trips.

## Embed a Trip

1. Build your trip in the app and click `Export`.
2. Commit/publish these files together:
   - `index.html`
   - `style.css`
   - `app.js`
   - your exported `trip-mapper.json`
3. Embed the published page in your blog:

```html
<iframe
  src="https://your-domain.example/trip-mapper/index.html?trip=trip-mapper.json&embed=1"
  width="100%"
  height="650"
  style="border:0;border-radius:12px;overflow:hidden;"
  loading="lazy">
</iframe>
```