(function () {
    document.addEventListener('DOMContentLoaded', function () {
        // SEARCH ADAPTIVE

        let search = function () {
            let searchBtn = document.querySelector('.search__btn');
            let searchBlock = document.querySelector('.search__block--adaptive');
            let closeBtn = document.querySelector('.search__closeBtn');

            searchBtn.addEventListener('click', function (e) {
                e.preventDefault();
                searchBlock.classList.toggle('search__adaptive--active');
                searchBtn.classList.add('search__btn--off');
            })


            closeBtn.addEventListener('click', function (e) {
                e.preventDefault();
                searchBlock.classList.remove('search__adaptive--active');
                searchBtn.classList.remove('search__btn--off');
            })

            document.addEventListener('click', function (e) {
                if (searchBlock.classList.contains("search__adaptive--active")) {
                    let target = e.target;
                    if (!target.closest('.header__container')) {
                        searchBlock.classList.remove('search__adaptive--active')
                        searchBtn.classList.remove('search__btn--off');
                    }
                }
            })
        }

        search();




        // BURGER MENU
        let burgerMove = function () {
            let burger = document.getElementById('burger');
            burger.addEventListener('click', function () {
                document.getElementById('menu').classList.add('burger__menu--active');
                burger.style.opacity = '0';
            })

            let burgerClose = document.getElementById('burger--close')
            burgerClose.addEventListener('click', function () {
                document.getElementById('menu').classList.remove('burger__menu--active');
                burger.style.opacity = '1';
            })

            document.addEventListener('click', function (e) {
                let target = e.target;
                if (!target.closest('.header__container')) {
                    document.getElementById('menu').classList.remove('burger__menu--active');
                }
            })
        }

        burgerMove();


        // DROPDOWN MENU

        document.querySelectorAll('.drop-menu__item__btn').forEach(item => {
            item.addEventListener('click', function () {
                let btn = this;
                let dropdown = this.parentElement.querySelector('.drop-menu__content-block');

                document.querySelectorAll('.drop-menu__item__btn').forEach(el => {
                    if (el != btn) {
                        el.classList.remove('active--btn');
                    }
                });

                document.querySelectorAll('.drop-menu__content-block').forEach(el => {
                    if (el != dropdown) {
                        el.classList.remove('active-list--item');
                    }
                });
                dropdown.classList.toggle('active-list--item');
                btn.classList.toggle('active--btn');
            })

            document.addEventListener('click', function (e) {
                let target = e.target;
                if (!target.closest('.drop-menu__list')) {
                    document.querySelectorAll('.drop-menu__content-block').forEach(el => {
                        el.classList.remove('active-list--item');
                    })
                    document.querySelectorAll('.drop-menu__item__btn').forEach(el => {
                        el.classList.remove('active--btn');
                    });
                }
            });
        });


        // Transfer to link(header)

        $('.nav__link').click(function (e) {
            e.preventDefault();

            let href = $(this).attr('href');
            let offset = $(href).offset().top + 1;

            $('body, html').animate({
                scrollTop: offset,
            }, 700);
        });

        // Transfer to contacts (hero)

        $('.hero__link').click(function (e) {
            e.preventDefault();

            let href = $(this).attr('href');
            let offset = $(href).offset().top + 1;

            $('body, html').animate({
                scrollTop: offset,
            }, 700);
        });


        // Transfer to artists (catalog-mobile) 
        let mobileScroll = function () {
            if (window.innerWidth < 650) {
                $('.artists-block__names__btn').click(function () {

                    let target = $('.catalog__content-block');

                    let offset = $(target).offset().top;

                    $('body, html').animate({
                        scrollTop: offset,
                    }, 700);

                });
            }
        }

        mobileScroll();



        // reset link

        $('.reset-link').click(function (e) {
            e.preventDefault();
        })



        // BTN "all events"

        let widhtScreener = function () {
            document.querySelectorAll('.events__item').forEach(item => {
                item.classList.add('events__item--hidden');
            })

            arr = document.querySelectorAll('.events__item');
            if (screen.width >= 1024) {
                for (let i = 0; i < 3; i++) {
                    arr[i].classList.remove('events__item--hidden');
                }
            }

            else if (screen.width < 1024 && screen.width >= 651) {
                for (let i = 0; i < 2; i++) {
                    arr[i].classList.remove('events__item--hidden');
                }
            }

            else {
                for (let i = 0; i < arr.length; i++) {
                    arr[i].classList.remove('events__item--hidden');
                }
            }
        }

        widhtScreener();

        window.addEventListener('resize', function () {
            widhtScreener();
        });


        let eventButton = document.querySelector('.events__btn');

        eventButton.addEventListener('click', function () {
            let eventItems = document.querySelectorAll('.events__item--hidden');

            eventItems.forEach(function (item) {
                item.classList.toggle('events__item--active')
            })

            if (eventItems[0].classList[2] == 'events__item--active') {
                eventButton.innerHTML = 'Свернуть';
            }

            else {
                eventButton.innerHTML = 'Все события';
            }

        });




        // SELECT

        const gallery = document.querySelector('#gallery__select');
        const gallerySelect = new Choices(gallery, {
            searchEnabled: false,
        });


        // TABS (countries) 

        document.querySelectorAll('.catalog__top-content_btn').forEach(function (tabsBtnСountries) {

            tabsBtnСountries.addEventListener('click', function (e) {
                let path = e.currentTarget.dataset.path;
                let country = this;

                document.querySelectorAll('.catalog__bottom-content').forEach(function (tabContentCountries) {
                    tabContentCountries.classList.remove('catalog__bottom-content--active');
                })

                document.querySelectorAll('.catalog__top-content_btn').forEach(function (item) {
                    item.classList.remove('country--active');
                })

                country.classList.add('country--active');

                document.querySelector(`[data-target = "${path}"]`).classList.add('catalog__bottom-content--active');
            })
        })

        // TABS (artists)

        document.querySelectorAll('.artists-block__names__btn').forEach(function (tabsBtnArtists) {

            tabsBtnArtists.addEventListener('click', function (e) {
                let path = e.currentTarget.dataset.path;
                let btn = this;

                document.querySelectorAll('.catalog__content-block').forEach(function (tabContentArtists) {
                    tabContentArtists.classList.remove('catalog__content-block--active');
                })

                document.querySelectorAll('.artists-block__names__btn').forEach(function (item) {
                    item.classList.remove('artist__btn--active');
                })

                btn.classList.add('artist__btn--active');

                document.querySelector(`[data-target = "${path}"]`).classList.add('catalog__content-block--active');
            })
        })



        // ACCORDION 

        $(function () {
            $("#accordion--italy").accordion({
                collapsible: true,
                heightStyle: 'auto',
            });
        });


        $(function () {
            $("#accordion--sample").accordion({
                collapsible: true,
                icons: false,
                heightStyle: 'content',
                active: false,
            });
        });



        // SWIPER (hero)

        const swiperHero = new Swiper('.hero__swiper', {
            autoplay: {
                delay: 2500,
            },

            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },

        });




        // SWIPER (gallery)
        const swiperGallery = new Swiper('.gallery__swiper', {
            slidesPerView: 3,
            spaceBetween: 50,
            slidesPerGroup: 3,
            grid: {
                rows: 2,
            },

            breakpoints: {
                320: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    grid: {
                        rows: 1
                    },
                    spaceBetween: 50,

                },

                530: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    grid: {
                        rows: 1
                    },
                    spaceBetween: 34
                },

                768: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    grid: {
                        rows: 2
                    },
                    spaceBetween: 34
                },

                1200: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                    grid: {
                        rows: 2
                    },
                    spaceBetween: 50
                }
            },

            loopFillGroupWithBlank: true,

            pagination: {
                el: ".gallery__swiper-pagination",
                type: "fraction",
            },

            // Navigation arrows
            navigation: {
                nextEl: '.gallery__swiper__btn--next',
                prevEl: '.gallery__swiper__btn--prev',
            },
        });





        // SWIPER (editions)
        const swiperEditions = new Swiper('.edition__swiper', {
            slidesPerView: 3,
            spaceBetween: 50,
            slidesPerGroup: 3,
            loopFillGroupWithBlank: true,

            breakpoints: {
                320: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    spaceBetween: 30
                },


                620: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    spaceBetween: 34
                },

                1024: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    spaceBetween: 50
                },

                1350: {
                    slidesPerView: 3,
                    spaceBetween: 50
                }
            },

            pagination: {
                el: ".edition__swiper-pagination",
                type: "fraction",
            },

            // Navigation arrows
            navigation: {
                nextEl: '.edition__swiper__btn--next',
                prevEl: '.edition__swiper__btn--prev',
            },
        });


        // SWIPER (project)

        const swiper = new Swiper('.project__partners__swiper', {
            slidesPerView: 3,
            spaceBetween: 50,

            breakpoints: {
                320: {
                    slidesPerGroup: 1,
                    slidesPerView: 1,
                },

                768: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    spaceBetween: 34
                },


                1024: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    spaceBetween: 50
                },

                1350: {
                    slidesPerView: 3,
                    spaceBetween: 50
                }
            },

            // Navigation arrows
            navigation: {
                nextEl: '.project__swiper-button-next',
                prevEl: '.project__swiper-button-prev',
            },

        });


        // TOOLTIP

        tippy('.tippy--one', {
            content: "Пример современных тенденций - современная методология разработки",
            trigger: 'focus',
            duration: 300,
            maxWidth: 264,
        });

        tippy('.tippy--two', {
            content: "Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции",
            trigger: 'focus',
            duration: 300,
            maxWidth: 264,
        });

        tippy('.tippy--three', {
            content: "В стремлении повысить качество",
            trigger: 'focus',
            duration: 300,
            maxWidth: 230,
        });




        // FORM (erorr and mask)
        let selector = document.querySelector("input[type='tel']");

        let im = new Inputmask("+7(999)-999-99-99");
        im.mask(selector);

        let validateForms = function (selector) {
            new window.JustValidate(selector, {
                colorWrong: 'red',

                rules: {
                    name: {
                        required: true,

                        strength: {
                            custom: '^[A-Za-zА-Яа-яЁё\s]{1,}'
                        },
                        minLength: 2,
                        maxLength: 30
                    },


                    tel: {
                        required: true,
                    },
                },

                messages: {


                    name: {
                        required: 'Обязательное поле для заполнения',
                        strength: 'Недопустимый формат',
                        minLength: 'Имя должно содержать не меньше 2 символов',
                        maxLength: 'Имя должно содержать не больше 30 символов',
                    },
                    tel: 'Обязательное поле для заполнения'
                },

                submitHandler: function (form) {
                    let formData = new FormData(form);

                    let xhr = new XMLHttpRequest();

                    xhr.onreadystatechange = function () {
                        if (xhr.readyState === 4) {
                            if (xhr.status === 200) {
                                console.log('Отправлено');
                            }
                        }
                    }

                    xhr.open('POST', '../mail.php', true);
                    xhr.send(formData);

                    form.reset();
                }

            });
        }

        validateForms('.contacts__form');




        // Yandex Map

        ymaps.ready(init);
        function init() {
            var myMap = new ymaps.Map("map", {
                // center: [55.7604768980000, 37.64487750000001],
                center: [55.75846806898367, 37.60108849999989],
                zoom: 14
            });

            var myPlacemark = new ymaps.Placemark([55.75846806898367, 37.60108849999989], {}, {
                iconLayout: 'default#image',
                iconImageHref: 'img/icon/iconYandexMap.svg',
                iconImageSize: [20, 20],
                iconImageOffset: [-15, -5],
            });
            myMap.geoObjects.add(myPlacemark);
        }



        //  swiperEditions destroy

        let destroySlider = function (slider) {
            if (window.innerWidth < 620) {
                slider.destroy();
            }
        }

        destroySlider(swiperEditions);


        window.addEventListener('resize', () => {
            destroySlider(swiperEditions);
        });





        // mobileSlider(events)
        const sliderContainer = document.querySelector('.mobileSlider__container');

        let eventSlider;

        function mobileSlider() {
            if (window.innerWidth <= 650 && sliderContainer.dataset.mobile == 'false') {
                eventSlider = new Swiper(sliderContainer, {
                    slidesPerView: 1,
                    spaceBetween: 10,
                    loop: true,
                    slideClass: 'events__item',
                    pagination: {
                        el: '.events__swiper-pagination',
                        clickable: true,
                    },
                });

                sliderContainer.dataset.mobile = 'true';
            }

            if (window.innerWidth > 650) {
                sliderContainer.dataset.mobile = 'false';
                if (sliderContainer.classList.contains('swiper-container-initialized')) {
                    eventSlider.destroy();
                }
            }
        }

        mobileSlider()

        window.addEventListener('resize', () => {
            mobileSlider();
        });

        // categories(mobile)

        let button = ".edition__categories";
        let labels = ".edition__categories__item";
        let labelsList = ".edition__categories__list";
        let labelsListActive = "checklist-active";
        let labelActive = "checkbox--item-active";
        let animationClass = "animation__fadeIn";
        let inputCheckbox = ".edition__checkbox--hidden";

        function checkboxToggle(a, b, c, labelsListActive, labelActive, animationClass, inputCheckbox) {
            let btn = document.querySelector(a);
            let labels = document.querySelectorAll(b);
            let listLabels = document.querySelector(c);
            btn.addEventListener("click", toggleSpoiler);
            btn.addEventListener("keyup", function (e) {
                console.log(e.key);
                if (e.code === "Enter") {
                    toggleSpoiler();
                }
            })


            function toggleSpoiler() {
                let editionBtn = document.querySelector('.edition__categories');
                editionBtn.classList.add('edition__arrow--active');
                if (listLabels.classList.contains(labelsListActive)) {
                    editionBtn.classList.remove('edition__arrow--active')
                }
                if (!listLabels.classList.contains(labelsListActive)) {
                    listLabels.classList.add(labelsListActive);
                    labels.forEach(item => {
                        // item.classList.add("checkbox--label-active");
                        animationItem(item, labelActive, animationClass, "add");
                    })
                } else {
                    listLabels.classList.remove(labelsListActive);
                    labels.forEach(item => {
                        if (item.querySelector(inputCheckbox).checked) {
                            animationItem(item, labelActive, animationClass, "add");
                        } else {
                            animationItem(item, labelActive, animationClass, "remove");
                        }
                    });
                }
                labels.forEach(item => {
                    item.addEventListener("click", function () {
                        if (!listLabels.classList.contains(labelsListActive)) {
                            animationItem(this, labelActive, animationClass, "remove");
                        }
                    });
                })
            }


            function animationItem(item, class1, class2, f) {
                if (f === "add") {
                    item.classList.add(class1);
                    setTimeout(function () {
                        item.classList.add(class2)
                    }, 100);

                } else {
                    item.classList.remove(class2);
                    setTimeout(function () {
                        item.classList.remove(class1)
                    }, 300);
                }
            }
        }

        checkboxToggle(button, labels, labelsList, labelsListActive, labelActive, animationClass, inputCheckbox);


        // categories btn-close


        let editionBtnClose = document.querySelectorAll('.edition__checkbox__close');


        editionBtnClose.forEach((el => {
            let input = el.previousElementSibling.children[0];

            input.addEventListener('input', function () {
                if (input.checked) {
                    el.classList.add('edition__checkbox__close--active');
                }

                else {
                    el.classList.remove('edition__checkbox__close--active');
                }
            });

            el.addEventListener('click', function () {
                input.checked = false;
                el.classList.remove('edition__checkbox__close--active');
            })
        }));







        // MODAL-WINDOWS

        let modalMoves = function () {
            let modalBtn = document.querySelectorAll('.gallery__swiper-slide');
            let modalOverlay = document.querySelector('.modal-overlay');
            modals = document.querySelectorAll('.modal');

            modalBtn.forEach((el => {
                el.addEventListener('click', function (e) {
                    let path = e.currentTarget.getAttribute('data-path');


                    modals.forEach((el => {
                        el.classList.remove('modal--visible');
                    }));

                    document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
                    modalOverlay.classList.add('modal-overlay--visible');

                    let modalBtnClose = document.querySelectorAll('.modal__btn-close');
                    modalBtnClose.forEach((el => {
                        el.addEventListener('click', function () {
                            modalOverlay.classList.remove('modal-overlay--visible');
                            el.parentElement.parentElement.classList.remove('modal--visible');
                        })
                    }))
                });
            }));

            modalOverlay.addEventListener('click', function (e) {
                if (e.target == modalOverlay) {
                    modals.forEach((el => {
                        el.classList.remove('modal--visible');
                    }));

                    modalOverlay.classList.remove('modal-overlay--visible');
                }
            })
        };

        modalMoves();

    })
})()