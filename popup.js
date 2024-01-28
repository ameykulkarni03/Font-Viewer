document.addEventListener('DOMContentLoaded', function() {
  const fontSelector = document.getElementById('font-selector');
  const resetButton = document.getElementById('reset');

  const fonts = [
    "Arial", "Verdana", "Helvetica", 
    "Times New Roman", "Georgia", "Garamond",
    "Courier New", "Brush Script MT", "Trebuchet MS", "Comic Sans MS",
    "Roboto", "Open Sans", "Lato", "Slabo", "Oswald",
    "Source Sans Pro", "Montserrat", "Raleway", "Ubuntu", "Merriweather"
  ];

  fonts.forEach(font => {
      let option = document.createElement('option');
      option.value = font;
      option.innerText = font;
      fontSelector.appendChild(option);
  });

  fontSelector.addEventListener('change', function() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.tabs.sendMessage(tabs[0].id, {font: fontSelector.value});
      });
  });

  resetButton.addEventListener('click', function() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.tabs.sendMessage(tabs[0].id, {reset: true});
      });
  });
});

