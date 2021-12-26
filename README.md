В рамках курса по web-верстка нужно было выполнить проект согласно техническому заданию.

Функциональные требования:

ШАПКА САЙТА
    1. Логотип 
    2. Ссылка "войти".
    3. Меню — при клике на пункт меню осуществляется плавный переход к
       соответствующему блоку.
    4. Нижнее меню — с выпадающими списками, внутри них должен быть
       реализован кастомный скролл (с определёнными стилями).
    5. Поиск по сайту.

    <!--В планшетной\мобильной версии: меню представляет собой кнопку 
        при нажатии на которую меню открывается и закрывается. Ссылка
        «войти» также переезжает в это меню. -->
HERO-БЛОК
    1. Фоновое изображение. Оно должно анимироваться — фон должен то приближаться,
       то удаляться от пользователя.

    2. Заголовок
    3. Описание
    4. Подписка — плавно переводит пользователя в конец сайта, к карте.

    <!--В мобильной версии: центрируются. -->

ОСНОВНОЙ КОНТЕНТ С СЕМЬЮ РАЗДЕЛАМИ.

    1. О нас: 
        заголок,
        описание.
    2. Галерея: 
        заголовок,
        селект для фильтрации галереи (без функционала),
        примечание,
        слайдер — возможность листать фотографии.

    <!--В мобильной версии:
        перелистывание слайдера должно работать по свайпу;
        перелистывание меняется, вместо шести элементов листается по одному. -->

    3. Каталог:
        заголовок,
        описание,
        табы с выбором языка\страны (переключение блоков табов должно быть плавным),
        аккордеон с возможностью выбора художественного деятеля,
        по клику на имя деятеля искусства слева меняется деятель.

    4. События: 
        заголовок,
        карточки с фото и описанием события,
        кнопка «все события» — изначально событий должно быть шесть, три из них
        скрыты; по клику на кнопку показываем все события, кнопку скрываем.

    <!--В мобильной версии: слайдер с точками. -->

    5. Издания: 
        заголовок,
        категории — кастомные чекбоксы,
        инпуты ввода цены,
        слайдер изданий,
        само издание — фото, описание, кнопка «заказать» (без функционала).

    <!--В мобильной версии: категории становятся спойлером, слайдер 
        превращается в обычные блоки. -->

    6. Проекты:
        заголовок,
        описание (нужно также правильно реализовать тултипы — всплывающие подсказки),
        слайдер партнёров проекта, показываем по три элемента; по наведении логотипы
        должны становиться цветными.
    
    7. Контакты: 
        заголовок,
        адрес,
        форма обратной связи — валидация полей формы,
        ссылки WhatsApp и Telegram с возможностью перехода,
        карта — реализация чёрно-белой карты с цветным маркером, адрес маркера указан.
    
ФУТЕР САЙТА

    1. Логотип
    2. Соцсети — три ссылки: «ВКонтакте», Instagram, Facebook.




Технологические требования

    1. Чистая, адаптивная, семантическая вёрстка. Стремитесь минимизировать
       в коде количество тегов и вложенностей.
    2. Пиксель-перфект вёрстка (под все разрешения). Возможны отличия на
       1–3 пикселя.
    3. В каждом из браузеров должна открываться абсолютно идентичная вёрстка.
    4. Проверяйте сайт и в портретных, и в альбомных режимах. Весь контент
       должен быть доступен.
    5. БЭМ-именование классов.
    6. Минимум медиазапросов для реализации адаптива.
    7. Избегайте дублирования кода для мобильной версии, насколько это
       возможно.
    8. Различный функционал — слайдеры, плавный скролл по якорям, табы,
       аккордеоны и прочее — должен работать.
    9. Использование SVG-иконок для создания иконок сайта.
    10.Удобный юзабилити для пользователя; все кнопки и ссылки явно дают понять,
       что на них можно кликнуть (имеют ховер-эффект) и курсор-лапку, также
       отменён outline, но заменён на всех кликабельных элементах на
       псевдокласс :focus.
    11.На мобильных устройствах ховеры не должны работать, вступает
       псевдокласс :active.
    12.Флексбокс-вёрстка, без использования фреймворков.
    13.Теги HTML- и CSS-документов должны быть валидными.


    Улучшение и дополнения

    1. Модальное окно 
    
    Большое спасибо за качественную вёрстку нашего сайта, всё на хорошем уровне, нам нравится =)
    Мы уже начали получать подписчиков в Telegram, сайт отлично справляется с задачей. Но теперь
    мы хотим пойти дальше, нужно реализовать несколько важных вещей, которых пока нет на сайте.


    Хочется, чтобы картины из нашей галереи можно было открыть в увеличенном виде и с
    описанием, чтобы улучшить пользовательский опыт и повысить конверсию. Гораздо лучше, когда
    пользователь видит не только картину, а ещё и то, что это за картина. Нужно реализовать
    модальное окно с этой информацией.

    2. Скролл на мобильной версии

    Пользователи начали писать нам, что на мобильном устройстве приходится постоянно
    пролистывать сайт к деятелю искусства после его выбора (блок «Каталог»). Хотелось бы, чтобы
    после клика на него (именно на мобильном устройстве) сайт самостоятельно доскроллил до
    нужного места. Мы за грамотный юзабилити.

    3. Отправка заявки

    Помимо подписчиков, мы плавно хотим вводить продажу прямо с сайта, пока в виде отправки
    заявки. Поэтому в самом низу сайта, рядом с картой, хочется, чтобы форма начала отправляться
    нам на почту. А там уже наши специалисты свяжутся с человеком, и так мы быстрее продадим
    картину.

    4. Смена картинок

    Ну и ещё небольшое пожелание =)
    Хочется немного живости на первом экране сайта. Там пока одно фоновое изображение, хотим,
    чтобы оно менялось раз в пару секунд. У нас есть три изображения, они туда как раз подойдут.




