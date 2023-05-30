const body = document.getElementsByTagName('body');
const slides = document.querySelectorAll('.slider');
const myWrapper = document.querySelectorAll('.wrapper');

let count = 0;
let width = document.documentElement.clientWidth;
/* console.log(width); */


if (width >= '768') {
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
};

let wrappers;
let slideOne;
let slideTwo;
let slideThree;
let slideFour;
let slideFive;
let titleOne;
let titleTwo;
let titleThree;
let titleFour;
let titleFive;
let pervNext;
let prev;
let next;
let items;

if (width <='767') {
    wrappers = document.createElement('div');
    wrappers.classList.add('wrappers');
    document.body.append(wrappers);

    slideOne = document.createElement('div');
    slideOne.classList.add('slide');
    slideOne.classList.add('slide__one');
    wrappers.append(slideOne);

    slideTwo = document.createElement('div');
    slideTwo.classList.add('slide');
    slideTwo.classList.add('slide__two');
    wrappers.append(slideTwo);

    slideThree = document.createElement('div');
    slideThree.classList.add('slide');
    slideThree.classList.add('slide__three');
    wrappers.append(slideThree);

    slideFour = document.createElement('div');
    slideFour.classList.add('slide');
    slideFour.classList.add('slide__four');
    wrappers.append(slideFour);

    slideFive = document.createElement('div');
    slideFive.classList.add('slide');
    slideFive.classList.add('slide__five');
    wrappers.append(slideFive);

    titleOne = document.createElement('h3');
    titleOne.classList.add('title');
    titleOne.innerHTML = 'Abu Dhabi';
    slideOne.append(titleOne);

    titleTwo = document.createElement('h3');
    titleTwo.classList.add('title');
    titleTwo.innerHTML = 'Norway';
    slideTwo.append(titleTwo);

    titleThree = document.createElement('h3');
    titleThree.classList.add('title');
    titleThree.innerHTML = 'Canada';
    slideThree.append(titleThree);

    titleFour = document.createElement('h3');
    titleFour.classList.add('title');
    titleFour.innerHTML = 'UAE';
    slideFour.append(titleFour);

    titleFive = document.createElement('h3');
    titleFive.classList.add('title');
    titleFive.innerHTML = 'The Alps';
    slideFive.append(titleFive);

    pervNext = document.createElement('div');
    pervNext.classList.add('perv-next');
    document.body.append(pervNext);

    prev = document.createElement('button');
    prev.classList.add('prev');
    prev.innerHTML = '&#10094;';
    pervNext.append(prev);

    next = document.createElement('button');
    next.classList.add('next');
    next.innerHTML = '&#10095;';
    pervNext.append(next);
};

items = document.querySelectorAll('.slide');
/* console.log(items); */

function calcSizes() {
    console.log('resize');
    wrappers.style.width = width * items.length /* + 80 */ + 'px'; /* ширина контейнера слайдера */
    items.forEach( item => {
        item.style.width = width /* - 50 */ + 'px'; /* ширина картинки слайдера */
        /* item.style.height = 'auto'; */
    });
    pervNext.style.width = width /* - 50  */+ 'px'; /* ширина контейнера для кнопок */
}

window.addEventListener('resize', calcSizes); /* автоматический пересчет размеров */
calcSizes();

document.querySelector('.next').addEventListener('click', () => {
    count++;
    if (count >= items.length) {
        count = 0;
    }
    rollSlider();
});
document.querySelector('.prev').addEventListener('click', () => {
    count--;
    if (count <= 0) {
        count = items.length -1;
    }
    rollSlider();
});

function rollSlider() {
    wrappers.style.transform = 'translate(-' + count * width + 'px)'; /* функция смещения слайдов */
};





