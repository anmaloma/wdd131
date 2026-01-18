const menuButton = document.getElementById('menu');
const nav = document.getElementById('nav');

menuButton.addEventListener('click', () => {
    nav.classList.toggle('open');
});

document.getElementById("year")textcontent = new Date().getFullYear();