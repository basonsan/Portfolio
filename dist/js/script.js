const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close'),
      overlay = document.querySelector('.menu__overlay'),
      social = document.querySelector('.social');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
    social.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
    social.classList.remove('active');
});

overlay.addEventListener('click', () => {
    menu.classList.remove('active');
    social.classList.remove('active');
});