import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/free-mode";

// Wait for DOMContentLoaded event
document.addEventListener( 'DOMContentLoaded', function() {
    // Initialize main swiper
    const swiper = new Swiper('.swiper', {
        modules: [Navigation, Pagination, Autoplay],
        spaceBetween: 4,
        slidesPerView: 2,
        mousewheel: true,
        freeMode: true,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        autoplay: {
          delay: 1500,
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 4,
          },
          768: {
            freeMode: false,
            slidesPerView: 3,
            spaceBetween: 4,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 4,
          },
          1280: {
            slidesPerView: 7,
            spaceBetween: 4,
          },
        },
      });
});
