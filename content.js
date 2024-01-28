chrome.runtime.onMessage.addListener(function(request) {
  if(request.font) {
      document.body.style.fontFamily = request.font;
  } else if(request.reset) {
      document.body.style.fontFamily = '';
  }
});
