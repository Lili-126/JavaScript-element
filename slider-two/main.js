const container = document.querySelector('.container');
const boxColors = document.querySelector('.colors');
const boxImages = document.querySelector('.wrapper-images');
const image = boxImages.querySelectorAll('.slides__image');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');

let activeSlideIndex = 0;

upButton.addEventListener('click', () => {
    activeSlideIndex++
        if (activeSlideIndex === image.length) {
            activeSlideIndex = 0;
        }
        rollSlider();
});

downButton.addEventListener('click', () => {
    activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = image.length - 1;
        }
        rollSlider();
});

const height = container.clientHeight;
console.log(height)

function rollSlider() {
    boxImages.style.transform = 'translateY(-' + activeSlideIndex * height + 'px)';
    boxColors.style.transform = `translateY(${activeSlideIndex * height}px)`
    console.log(boxColors.style.transform)
    console.log(boxImages.style.transform)
}
rollSlider();