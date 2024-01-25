document.addEventListener('DOMContentLoaded', function() {
  const fontSelector = document.getElementById('font-selector');
  const output = document.getElementById('output');
  const textInput = document.getElementById('text-input');

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
    const selectedFont = fontSelector.value;
    output.style.fontFamily = selectedFont;
    output.innerText = textInput.value;
  });

  textInput.addEventListener('input', function() {
    output.innerText = textInput.value;
  });
});
