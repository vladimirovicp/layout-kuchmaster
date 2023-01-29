
const header = document.querySelector('.header');
const iconMenu = header.querySelector('.menu__icon');

const menuWrapper = header.querySelector('.menu__wrapper');
const menuInfo = header.querySelector('.menu__info');

if(iconMenu){

    const menuHeaderWrapper = header.querySelector('.menu__header-wrapper');

    const menuContact = menuHeaderWrapper.querySelector('.menu__contact');
    const contactsPhone = menuContact.querySelector('.contacts__phone');
    const contactsEmail = menuContact.querySelector('.contacts__email');

    const menuInfoContact = menuWrapper.querySelector('.menu__info-contact');
    const contactsLinkPhone= menuInfoContact.querySelector('.contacts__link-phone');
    const contactsLinkEmail= menuInfoContact.querySelector('.contacts__link-email');


    contactsPhone.addEventListener("click", function(e){
        contactsLinkPhone.classList.toggle('open');
        contactsLinkEmail.classList.remove('open');
    });

    contactsEmail.addEventListener("click", function(e){
        contactsLinkEmail.classList.toggle('open');
        contactsLinkPhone.classList.remove('open');
    });



    iconMenu.addEventListener("click", function(e){
        //document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('open');
        menuWrapper.classList.toggle('open');
        menuInfo.classList.toggle('open');

        contactsLinkEmail.classList.remove('open');
        contactsLinkPhone.classList.remove('open');

    });
}





