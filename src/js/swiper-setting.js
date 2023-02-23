import Swiper from 'swiper/swiper-bundle.esm.js';

const swiperFull  = new Swiper('.swiper-full', {
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-full__arrow-next',
        prevEl: '.swiper-full__arrow-prev',
    },
    pagination: {
        el: '.swiper-full__pagination',
        clickable: true,
        dynamicBullets: true,
    },
});



// Слайдер Reviews
const swiperReviews = new Swiper('.reviews__slider', {
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,
    breakpoints: {
        320: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 3
        }
    },
    navigation: {
        nextEl: '.reviews__arrow-next',
        prevEl: '.reviews__arrow-prev',
    },
    pagination: {
        el: '.reviews__pagination',
        clickable: true,
    },

});