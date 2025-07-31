chrome.action.onClicked.addListener((tab) => {
  if (!tab || !tab.url) return;

  chrome.windows.create({
    url: tab.url,
    type: "popup",
    width: 700,
    height: 700,
    top: 100,
    left: 100
  });
});
