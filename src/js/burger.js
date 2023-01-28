
const header = document.querySelector('.header');
const iconMenu = header.querySelector('.menu__icon');

const menuWrapper = header.querySelector('.menu__wrapper');
const menuInfo = header.querySelector('.menu__info');

if(iconMenu){
    iconMenu.addEventListener("click", function(e){
        //document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('open');
        menuWrapper.classList.toggle('open');
        menuInfo.classList.toggle('open');
    });

}