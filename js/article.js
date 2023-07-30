const darkModeToggle = document.getElementById('dark-mode-toggle');
const darkModeContainer = document.querySelector('.main_content');

function toggleDarkMode() {
  var crimsonBox = document.getElementById('crimson-mode-label');
  if (darkModeToggle.checked) {
    darkModeContainer.classList.add('dark-mode');
    crimsonBox.style.display = 'none';
  } else {
    darkModeContainer.classList.remove('dark-mode');
    crimsonBox.style.display = 'inline';
  }
}

const crimsonModeToggle = document.getElementById('crimson-mode-toggle');
const crimsonModeContainer = document.querySelector('.main_content');

function toggleCrimsonMode() {
  var darkBox = document.getElementById('dark-mode-label');
  if (crimsonModeToggle.checked) {
    crimsonModeContainer.classList.add('crimson-cream');
    darkBox.style.display = 'none';
  } else {
    crimsonModeContainer.classList.remove('crimson-cream');
    darkBox.style.display = 'inline';
  }
}