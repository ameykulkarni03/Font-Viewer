// content.js
chrome.runtime.onMessage.addListener((request) => {
  if (request.action === "changeFont") {
    document.body.style.fontFamily = request.font;
  }
});
  
function resetFont() {
  document.body.style.fontFamily = '';
}
chrome.runtime.onMessage.addListener((request) => {
  if (request.action === "resetFont") {
    resetFont();
  }
});
  