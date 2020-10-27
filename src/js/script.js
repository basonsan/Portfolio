const hamburger = document.querySelector('.hamburger'), //справа наверху гамбургер
    menu = document.querySelector('.menu'), //меню слева
    closeElem = document.querySelector('.menu__close'), //крестик в меню
    overlay = document.querySelector('.menu__overlay'), //прозрачная пленка при появлении меню
    social = document.querySelector('.social'), //бокавая панель с значками социальных сетей
    moreOpen = document.querySelector('.skill__card-more-open'), //кнопка подробнее в скилах
    moreClose = document.querySelector('.skill__card-more-close'), //кнопка скрыть в скилах
    skillCard = document.querySelector('.skill__card'), //обертка скилов
    menuList = document.querySelector('.menu__list'), //список меню
    btnSubmit = document.querySelector('.btn_form'), //кнопка внизу формы отправить
    btnWorks = document.getElementById('btn__works'), //кнопка портфолио наверху
    works = document.getElementById('works'), //блок с моими работами
    btnAbout = document.getElementById('btn__about'), //кнопка портфолио наверху
    about = document.getElementById('about'); //блок с моими работами
    upArrow = document.querySelector('.up-arrow'),
    promo = document.getElementById('promo'),
    aboutLink = document.getElementById('about__link'),
    
    expLink = document.getElementById('exp__link'),
    skillLink = document.getElementById('skill__link'),
    worksLink = document.getElementById('works__link'),
    contactLink = document.getElementById('contact__link');

function links (aLink, idElement) {
    aLink.addEventListener('click', (event) => {
        event.preventDefault();
        idElement.scrollIntoView({behavior: "smooth"});
    });
}

links (btnWorks, works);
links (btnAbout, about);
links (aboutLink, about);
links (expLink, exp);
links (skillLink, skill);
links (worksLink, works);
links (contactLink, contact);
links (upArrow, promo);


window.addEventListener('scroll', function() {
    if (document.documentElement.scrollTop>848) {
        upArrow.classList.add('up-arrow_active');
    } else {
        upArrow.classList.remove('up-arrow_active');
    }
    //document.getElementById('showScroll').innerHTML = pageYOffset + 'px';
  });

//обработка нажатия подробнее в разделе мои навыки
moreOpen.addEventListener('click', () => {
    skillCard.classList.add('skill__card_active');
    moreOpen.classList.add('skill__card-more_hide');
    moreClose.classList.remove('skill__card-more_hide');
});

//обработка нажатия скрыть в разделе мои навыки
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

//обработка нажатия на крестик в меню
closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
    social.classList.remove('active');
});

//обработка нажатия на прозрачную пленку справа от меню
overlay.addEventListener('click', () => {
    menu.classList.remove('active');
    social.classList.remove('active');
});

//обработка нажатия на элемент списка
menuList.addEventListener('click', () => {
    menu.classList.remove('active');
    social.classList.remove('active');
});

btnSubmit.addEventListener('click', () => {
    alert ('Извините, но отправка формы временно не возможна, свяжитесь со мной с использованием социальных сетей или месенджеров');
});

