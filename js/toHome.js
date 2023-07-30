document.getElementById("home").addEventListener('click', home);

function home() {
    var mainContent = document.querySelector('.main_content');
    mainContent.style.display = 'block';
    var mrowsContent = document.querySelector('.mrows-content');
    mrowsContent.style.display = 'none';
    var mcpdtContent = document.querySelector('.mcpdt-content');
    mcpdtContent.style.display = 'none';
    var home = document.getElementById('home');
    home.style.display = 'none';
}