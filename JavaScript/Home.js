const menBTN = document.getElementById('menu-btn');
const navbar = document.getElementById('navbar');
const menu = document.getElementById('.menu');
const offset = 50;

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu-open');
});

window.addEventListener("scroll", () => {
    if(pageYOFFset > offset){
        navbar.classList.add('navbar-active');
    }else{
        navbar.classList.remove('navbar-active');
    }
});