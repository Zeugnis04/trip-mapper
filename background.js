// Open Trip Mapper in a full browser tab when the toolbar icon is clicked.
// Best-effort re-focus of an already-open tab without requesting any permissions:
// chrome.tabs.get/update/create work on the extension's own tabs without the
// "tabs" permission. The remembered id is lost if the worker unloads, in which
// case a fresh tab is opened.
const APP_URL = chrome.runtime.getURL('index.html');
let appTabId = null;

chrome.action.onClicked.addListener(async () => {
  if (appTabId != null) {
    try {
      const tab = await chrome.tabs.get(appTabId);
      await chrome.tabs.update(tab.id, { active: true });
      if (tab.windowId != null) await chrome.windows.update(tab.windowId, { focused: true });
      return;
    } catch {
      appTabId = null; // tab was closed
    }
  }
  const tab = await chrome.tabs.create({ url: APP_URL });
  appTabId = tab.id;
});

chrome.tabs.onRemoved.addListener(id => { if (id === appTabId) appTabId = null; });
