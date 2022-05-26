import JustValidate from 'just-validate';


(() => {
  document.addEventListener("DOMContentLoaded", function () {

    const validate = new JustValidate('#form-subscribe');
    const contactsValidate = new JustValidate('#contacts-form')

    validate.addField('#subscribe', [
      {
        rule: 'required',
        errorMessage: 'Обязательное поле',
      },
      {
        rule: 'email',
        errorMessage: 'Недопустимый формат',
      },
    ]);



    contactsValidate
      .addField('#name', [
        {
          rule: 'minLength',
          value: 3,
          errorMessage: 'Минимум 3 символа',
        },
        {
          rule: 'maxLength',
          value: 30,
          errorMessage: 'Максимум 30 сиволов',
        },

        {
          rule: 'required',
          errorMessage: 'Обязательное поле',
        },

        {
          rule: 'customRegexp',
          value: /^[a-zA-Zа-яА-Я]+$/ui,
          errorMessage: 'Недопустимый формат',
        },
      ])

      .addField('#contacts-email', [
        {
          rule: 'required',
          errorMessage: 'Обязательное поле',
        },
        {
          rule: 'email',
          errorMessage: 'Недопустимый формат',
        },
      ]);






    // transfer to link

    const smoothLinks = document.querySelectorAll('a[href^="#"]');
    for (let smoothLink of smoothLinks) {
      smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    };

    // burger menu

    const yandexBtnClose = document.querySelector('.yandex-map__content__btn')
    const burger = document.getElementById('burger');
    const burgerClose = document.querySelector('.nav-mobile__btn');
    const burgerMenu = document.querySelector('.nav-mobile');
    const btnSearch = document.querySelector('.header-form__btn');
    const inputSearch = document.querySelector('.header-form__container');
    const btnClose = document.querySelector('.header-form__btn-close');
    const content = document.querySelector('.yandex-map__content');

    burger.addEventListener('click', function () {
      burgerMenu.classList.add('active')
    })

    burgerClose.addEventListener('click', function () {
      burgerMenu.classList.remove('active')
    })

    btnSearch.addEventListener('click', function () {
      inputSearch.classList.toggle('active-search')
    })

    btnClose.addEventListener('click', function () {
      const input = document.querySelector('.header-form__input');
      input.value = '';
    })

    yandexBtnClose.addEventListener('click', function() {
      content.style.transform = 'scaleY(0)';
    })


    // yandex map
    ymaps.ready(init);
    function init() {
      var myMap = new ymaps.Map("map", {
        center: [55.766555, 37.622433],
        zoom: 14
      });

      var myPlacemark = new ymaps.Placemark([55.770411, 37.629035], {
        hintContent: 'Студия “High pass”',
      }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/circle.svg',
        iconImageSize: [20, 20],
        iconImageOffset: [-15, -5],
      });
      myMap.geoObjects.add(myPlacemark);
    }
  });
})()

