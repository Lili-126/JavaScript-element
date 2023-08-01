const listItem = Array.from(document.querySelectorAll('.list-item'));
const buttons = document.querySelectorAll('.list-item__button');
const listImg = document.querySelectorAll('.list-image');


function togglerActiveClasses() {
    for (let i = 0; i < listItem.length; i++) {
        if (listItem[i]) {
            listItem[i].addEventListener('click', () => {
                listItem[i].classList.toggle('active');
                if (listItem[i].classList.contains('active')) {
                    buttons[i].classList.add('active');
                    listImg[i].style.maxHeight = listImg[i].scrollHeight + 'px';
                    listImg[i].style.transition = 'max-height 0.6s';
                } else listImg[i].style.maxHeight = 0;
            });
        }
    };
};
togglerActiveClasses();