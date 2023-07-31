document.getElementById("MrowsHeader").addEventListener('click', mrowsHeader);
document.getElementById("McpdtHeader").addEventListener('click', mcpdtHeader);

function mrowsHeader() {
    var mainContent = document.querySelector('.main_content');
    mainContent.classList.add('none');
    var mrowsContent = document.querySelector('.mrows-content');
    mrowsContent.classList.remove('none');
    displayHome();
}

function mcpdtHeader() {
    var mainContent = document.querySelector('.main_content');
    mainContent.classList.add('none');
    var mcpdtContent = document.querySelector('.mcpdt-content');
    mcpdtContent.classList.remove('none');
    displayHome();
}

function displayHome() {
    var home = document.getElementById('home');
    home.classList.remove('none');
 }