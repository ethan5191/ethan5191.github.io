const articles = document.querySelectorAll('.expandable-article');

articles.forEach((article) => {
  const truncatedText = article.querySelector('.truncated-text');
  const fullText = article.querySelector('.full-text');

  truncatedText.addEventListener('click', function () {
    // Check if the article is already expanded
    const isExpanded = article.classList.contains('expanded');

    // Hide the full text of all other visible articles
    articles.forEach((otherArticle) => {
      if (otherArticle !== article && otherArticle.classList.contains('expanded')) {
        otherArticle.classList.remove('expanded');
      }
    });

    // Toggle the class to expand or collapse the article
    article.classList.toggle('expanded', !isExpanded);
  });
});

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