document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click',() => {
        navLinks.classList.toggle('nav-active'); 
    });
});
