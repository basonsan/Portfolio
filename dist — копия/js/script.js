const hamburger = document.querySelector('.hamburger'), //справа наверху гамбургер
      menu = document.querySelector('.menu'), //меню слева
      closeElem = document.querySelector('.menu__close'), //крестик в меню
      overlay = document.querySelector('.menu__overlay'), //прозрачная пленка при появлении меню
      social = document.querySelector('.social'), //бокавая панель с значками социальных сетей
      moreOpen = document.querySelector('.skill__card-more-open'), //кнопка подробнее в скилах
      moreClose = document.querySelector('.skill__card-more-close'), //кнопка скрыть в скилах
      skillCard = document.querySelector('.skill__card'); //обертка скилов

moreOpen.addEventListener('click', () => {
    skillCard.classList.add('skill__card_active');
    moreOpen.classList.add('skill__card-more_hide');
    moreClose.classList.remove('skill__card-more_hide');
});

moreClose.addEventListener('click', () => {
    skillCard.classList.remove('skill__card_active');
    moreOpen.classList.remove('skill__card-more_hide');
    moreClose.classList.add('skill__card-more_hide');
});

//обработка нажатия на гамбургер
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