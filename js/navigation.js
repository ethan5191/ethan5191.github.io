document.getElementById("MrowsHeader").addEventListener('click', mrowsHeader);
document.getElementById("McpdtHeader").addEventListener('click', mcpdtHeader);

function mrowsHeader() {
    var mainContent = document.querySelector('.main_content');
    mainContent.style.display = 'none';
    var mrowsContent = document.querySelector('.mrows-content');
    mrowsContent.style.display = 'block';
    displayHome();
}

function mcpdtHeader() {
    var mainContent = document.querySelector('.main_content');
    mainContent.style.display = 'none';
    var mcpdtContent = document.querySelector('.mcpdt-content');
    mcpdtContent.style.display = 'block';
    displayHome();
}

function displayHome() {
    var home = document.getElementById('home');
    home.style.display = 'block';
 }