let navbar = document.querySelector(".navbar");

window.addEventListener("scroll" , () => {

    navbar.classList.toggle("shadow", window.scrollY > 1);
});