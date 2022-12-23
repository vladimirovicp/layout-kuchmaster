import Swiper from 'swiper/swiper-bundle.esm.js';

const swiperFull  = new Swiper('.swiper-full', {
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-full__arrow-next',
        prevEl: '.swiper-full__arrow-prev',
    },
});

