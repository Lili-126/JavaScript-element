const listItem = Array.from(document.querySelectorAll('.list-item'));
const buttons = document.querySelectorAll('.list-item__button');
const listImg = document.querySelectorAll('.list-image');

console.log(listItem);



function togglerActiveClasses() {
    for (let i = 0; i < listItem.length; i++) {
        if (listItem[i]) {
            listItem[i].addEventListener('click', () => {
                listItem[i].classList.add('active');
                if (listItem[i].classList.contains('active')) {
                    buttons[i].classList.add('active');
                    listImg[i].style.maxHeight = listImg[i].scrollHeight + 'px';
                    listImg[i].style.overflow = 'visible';
                    listImg[i].style.transition = 'max-height 0.4s';
                };
            });
        }
    };
    clearActiveClasses();
};
togglerActiveClasses();

function clearActiveClasses() {
    for (let i = 0; i < listItem.length; i++) {
        if (listItem[i].classList.contains('active')) {
            listItem[i].classList.remove('active');
        };
    }
};