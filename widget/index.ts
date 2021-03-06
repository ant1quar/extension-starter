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
    case "SET_COLOR":
      document.body.style.backgroundColor = request.color;
      sendResponse(true);
      break;
    default:
      break;
  }
});
