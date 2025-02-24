// Toggle menu open/close
const hamburgerIcon = document.getElementById('hamburger-icon');
const menuContent = document.getElementById('menu-content');

hamburgerIcon.addEventListener('click', () => {
    hamburgerIcon.classList.toggle('open');
    menuContent.classList.toggle('open');
});

const asciiArt = document.getElementById('ascii-art');

