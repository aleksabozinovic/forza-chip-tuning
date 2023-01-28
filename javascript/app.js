// FIRST SWIPER

const swiper1 = new Swiper(".index--hero--marks--col-2 .swiper", {
  // Optional parameters
  loop: true,
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 3500,
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 6,
      spaceBetween: 90,
    },
  },
});

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
