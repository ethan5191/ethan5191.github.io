const mainContainer = document.querySelector('.main_content');
const darkModeToggle = document.getElementById('dark-mode-toggle');
const crimsonModeToggle = document.getElementById('crimson-mode-toggle');


function toggleDarkMode() {
  var container = determineContainer();
  var crimsonBox = document.getElementById('crimson-mode-label');
  if (darkModeToggle.checked) {
    container.classList.add('dark-mode');
    crimsonBox.style.display = 'none';
  } else {
    container.classList.remove('dark-mode');
    crimsonBox.style.display = 'inline';
  }
}

function toggleCrimsonMode() {
  var container = determineContainer();
  var darkBox = document.getElementById('dark-mode-label');
  if (crimsonModeToggle.checked) {
    container.classList.add('crimson-cream');
    darkBox.style.display = 'none';
  } else {
    container.classList.remove('crimson-cream');
    darkBox.style.display = 'inline';
  }
}

function determineContainer() {
    if (!mainContainer.classList.contains('none')) {
        return mainContainer;
    } else {
        var mrowsContainer = document.querySelector('.mrows-content');
        if (!mrowsContainer.classList.contains('none')) {
            return mrowsContainer;
        } else {
            var mcpdtContainer = document.querySelector('.mcpdt-content');
            return mcpdtContainer;
        }
    }
}