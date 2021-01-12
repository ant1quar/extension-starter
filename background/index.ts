import Tab = chrome.tabs.Tab;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  // eslint-disable-next-line no-console
  console.log(
    sender.tab
      ? `from a content script:${sender.tab.url}`
      : "from the extension"
  );
  // eslint-disable-next-line no-console
  console.log(request);
  switch (request.type) {
    case "CHANGE_COLOR":
      try {
        chrome.tabs.getSelected(function (tab: Tab) {
          if (tab.id) {
            chrome.tabs.sendMessage(
              tab.id,
              { type: "SET_COLOR", color: request.color },
              (res) => {
                if (res) {
                  chrome.storage.local.set({ color: request.color }, () => {
                    sendResponse(true);
                  });
                } else {
                  sendResponse(false);
                }
              }
            );
          }
        });
      } catch {
        sendResponse(false);
      }
      break;
    default:
      break;
  }
  return true;
});
