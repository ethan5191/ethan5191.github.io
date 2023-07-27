function displayDd(ele) {
    let temp = document.getElementById(ele);
    if (temp.style.display !== 'block') {
        temp.style.display = 'block';
    } else {
        temp.style.display = 'none';
    }
}

function toggleFullText(articleNumber) {
  // Get all full text elements
  const fullTextElements = document.querySelectorAll(".full-text");
  const partialTextElements = document.querySelectorAll(".truncated-text");

  // Hide all full text elements
  fullTextElements.forEach((element) => {
    element.style.display = "none";
  });
  partialTextElements.forEach((element) => {
    element.classList.remove("selected-partial");
  });

  // Get the full text element that corresponds to the clicked partial text
  const fullText = document.getElementById(`article${articleNumber}`);
  // Show the corresponding full text
  fullText.style.display = "block";

  const clickedPartialText = document.querySelector(`[onclick="toggleFullText(${articleNumber})"]`);
  clickedPartialText.classList.add("selected-partial");
}