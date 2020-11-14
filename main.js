document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
});

//Usamos la funcion de aparecer cuando hacemos scroll
ScrollReveal().reveal('.cuerpo');
ScrollReveal().reveal('.news-cards', { delay: 200});
ScrollReveal().reveal('.cards-banner-one', { delay: 200});
ScrollReveal().reveal('.cards-banner-two', { delay: 200});
ScrollReveal().reveal('.social', { delay: 200});
ScrollReveal().reveal('.footer-links', { delay: 200});
ScrollReveal().reveal('.footer', { delay: 200});
