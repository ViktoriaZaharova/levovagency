$('.blog-slider').slick({
    slidesToShow: 3,
    arrows: true,
    appendArrows: '.blog-slider-nav',
    variableWidth: true,
    prevArrow: '<button type="button" class="slick-prev"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
        '     viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">\n' +
        '<g>\n' +
        '\t<g>\n' +
        '\t\t<path d="M501.333,245.333H36.417l141.792-141.792c4.167-4.167,4.167-10.917,0-15.083c-4.167-4.167-10.917-4.167-15.083,0l-160,160\n' +
        '\t\t\tc-4.167,4.167-4.167,10.917,0,15.083l160,160c2.083,2.083,4.813,3.125,7.542,3.125c2.729,0,5.458-1.042,7.542-3.125\n' +
        '\t\t\tc4.167-4.167,4.167-10.917,0-15.083L36.417,266.667h464.917c5.896,0,10.667-4.771,10.667-10.667S507.229,245.333,501.333,245.333z\n' +
        '\t\t\t"/>\n' +
        '\t</g>\n' +
        '</g>\n' +
        '</svg>\n</button>',
    nextArrow: '<button type="button" class="slick-next"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
        '\t viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">\n' +
        '<g>\n' +
        '\t<g>\n' +
        '\t\t<path d="M508.875,248.458l-160-160c-4.167-4.167-10.917-4.167-15.083,0c-4.167,4.167-4.167,10.917,0,15.083l141.792,141.792\n' +
        '\t\t\tH10.667C4.771,245.333,0,250.104,0,256s4.771,10.667,10.667,10.667h464.917L333.792,408.458c-4.167,4.167-4.167,10.917,0,15.083\n' +
        '\t\t\tc2.083,2.083,4.813,3.125,7.542,3.125c2.729,0,5.458-1.042,7.542-3.125l160-160C513.042,259.375,513.042,252.625,508.875,248.458z\n' +
        '\t\t\t"/>\n' +
        '\t</g>\n' +
        '</g>\n' +
        '</svg>\n</button>'
});

// scroll
$(window).on("load",function(){
    $(".box-scroll").mCustomScrollbar({
        autoDraggerLength: false
    });
});

// Инициализация карты
ymaps.ready(init);

function init () {

    //Центрирование и выбор масштаба карты
    var myMap = new ymaps.Map('map', {
        center: [53.186107, 45.010968],
        zoom: 12
    });

    // Создание своей метки
    var myPlacemark = new ymaps.Placemark(
        // Координаты метки
        [53.186107, 45.010968] , {
            // Свойства метки
            hintContent: '', //Подсказка при наведении на маркер
            iconContent: '',

        }, {
            iconImageHref: 'img/loc.png',  // картинка иконки
            iconImageSize: [50, 68],  // размеры картинки

        });

    // Добавление метки на карту
    myMap.geoObjects.add(myPlacemark);

    //Элементы управления
    myMap.controls
        // Кнопка изменения масштаба
        .add('zoomControl')
        // Список типов карты
        .add('typeSelector')
        // Кнопка изменения масштаба - справа
        .add('smallZoomControl', { right: 5, top: 75 })
        // Стандартный набор кнопок
        .add('mapTools')
        //Линейка масштаба
        .add(new ymaps.control.ScaleLine());
}