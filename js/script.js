var swiper = new Swiper(".mySwiper", {
  autoplay: true,
  autoplayDisableOnInteraction: false,
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});
