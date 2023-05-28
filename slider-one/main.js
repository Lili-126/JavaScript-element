const slides = document.querySelectorAll(".slider");

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