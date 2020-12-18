const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');
const footer = document.querySelector("footer")
const main = document.querySelector("main")
const inicio = document.getElementById("inicio");

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle("open");
    footer.classList.toggle("visibility");
    main.classList.toggle("visibility");
    inicio.remove();
})