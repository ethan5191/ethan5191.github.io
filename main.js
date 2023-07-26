function displayDd(ele) {
    let temp = document.getElementById(ele);
    if (temp.style.display !== 'block') {
        temp.style.display = 'block';
    } else {
        temp.style.display = 'none';
    }
}