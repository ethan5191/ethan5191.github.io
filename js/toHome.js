document.getElementById("home").addEventListener('click', home);

function home() {
    var mainContent = document.querySelector('.main_content');
    mainContent.classList.remove('none');
    var mrowsContent = document.querySelector('.mrows-content');
    mrowsContent.classList.add('none');
    var mcpdtContent = document.querySelector('.mcpdt-content');
    mcpdtContent.classList.add('none');
    var home = document.getElementById('home');
    home.classList.add('none');
}