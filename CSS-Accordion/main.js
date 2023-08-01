const listItem = Array.from(document.querySelectorAll('.list-item'));
const buttons = document.querySelectorAll('.list-item__button');
const listImg = document.querySelectorAll('.list-image');


function togglerActiveClasses() {

    for (let i = 0; i < listItem.length; i++) {

        listItem[i].addEventListener('click', () => {

            if (!listItem[i].classList.contains('active')) {
                listItem[i].classList.add('active');
                buttons[i].classList.add('active');
                listImg[i].style.maxHeight = listImg[i].scrollHeight + 'px';
                listImg[i].style.transition = 'max-height 0.6s';

            } else if (listItem[i].classList.contains('active')) {
                listItem[i].classList.remove('active');
                listImg[i].style.maxHeight = 0;
            }
       });
    };
};
togglerActiveClasses();




