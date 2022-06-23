import Swiper from 'swiper/bundle';

import 'swiper/css/bundle';
import '../styles/vendors/_swiper.css';

const swiper = new Swiper(".questionSwiper", {
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});