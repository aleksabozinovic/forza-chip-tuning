"use strict";

///////////////////////////////////////
// FIRST SWIPER

const swiper1 = new Swiper(".index--hero--marks--col-2 .swiper", {
  // Optional parameters
  loop: true,
  // Default parameters
  slidesPerView: 3,
  spaceBetween: 20,
  autoplay: {
    delay: 3500,
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    425: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 60,
    },
    // when window width is >= 480px
    1024: {
      slidesPerView: 5,
      spaceBetween: 60,
    },
    // when window width is >= 640px
    1440: {
      slidesPerView: 6,
      spaceBetween: 85,
    },
  },
});

///////////////////////////////////////
// SECOND SWIPER

const swiper2 = new Swiper(".index--second--section .swiper", {
  // Optional parameters
  loop: true,
  // Default parameters
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

///////////////////////////////////////
// STICKY NAV
