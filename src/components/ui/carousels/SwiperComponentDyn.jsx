import React, { useEffect } from 'react';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const SwiperComponent = () => {
  useEffect(() => {
    const swiper = new Swiper('.swiper', {
      modules: [Navigation, Pagination, Autoplay],
      direction: 'horizontal',
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
    });
  }, []);

  return (
    <div class="swiper rounded-2xl mt-4 -ml-4 -mb-4 -mr-4 dark:ring-white/10 ring-primary/5 bg-tertiary">
    <div class="swiper-wrapper">
        <img
            loading="lazy"
            src="/media/works/blowhammer/blowhammer-drops.jpeg"
            class="swiper-slide"
        />
        <img
            loading="lazy"
            src="/media/works/blowhammer/blowhammer-drops.jpeg"
            class="swiper-slide"
        />
        <img
            loading="lazy"
            src="/media/works/blowhammer/blowhammer-drops.jpeg"
            class="swiper-slide"
        />
    </div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
    </div>
  );
};

export default SwiperComponent;
