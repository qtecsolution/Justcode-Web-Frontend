const reviewSlider = new Swiper('.reviewslider', {
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },

    640: {
      slidesPerView: 2,
    },

    992: {
      slidesPerView: 3,
    },

    // 1200: {
    //   slidesPerView: 4,
    // },
  },
});
