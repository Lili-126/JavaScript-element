const body = document.getElementsByTagName('body');
const slides = Array.from(document.querySelectorAll('.slider'));
const wrapper = document.querySelector('.wrapper');
const arrows = document.querySelector('.arrows');


let count = 0;
let width = document.documentElement.clientWidth;
console.log(width);

    /* перебор массива слайдера */
    for (const slider of slides) {
        slider.addEventListener('click', () => {
            clearActiveClasses();
            slider.classList.add('active');
        });
    };
    /* удаляем класс activ с неактивного слайда */
    function clearActiveClasses() {
        slides.forEach((slider) => {
        slider.classList.remove('active');
        });
    };



    function calcSizes() {
        console.log('resize');
        slides.forEach(item => {
            item.style.width = width + 'px';  /* ширина картинки слайдера */
            console.log(item)
        });
        arrows.style.width = width + 'px'; /* ширина контейнера для кнопок */
        console.log(arrows)
    }
 
    document.body.addEventListener('resize', calcSizes);   /* автоматический пересчет размеров */
    calcSizes();

    document.querySelector('.arrows__next').addEventListener('click', () => {
        count++;
        if (count >= slides.length) {
            count = 0;
        }
         rollSlider();
    });
    document.querySelector('.arrows__prev').addEventListener('click', () => {
        count--;
        if (count <= 0) {
            count = slides.length -1;
        }
        rollSlider();
    });

    function rollSlider() {
        wrapper.style.transform = 'translate(-' + count * width + 'px)'; /* функция смещения слайдов */
    };




