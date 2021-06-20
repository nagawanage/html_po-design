/************************
 * Swiper
 ************************/
const swiper = new Swiper(".swiper-container", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  // slidesPerView: 1,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
});

/************************
 * Scroll
 ************************/
let $window = $(window),
  $header = $(".header"),
  $transPos;
console.log($transPos);

$window.on("scroll", function () {
  // $transPos = $(".hero").height() / 2;
  $transPos = $header.height();
  if ($window.scrollTop() > $transPos) {
    // if ($window.scrollTop() > 100) {
    $header.addClass("transform");
  } else {
    $header.removeClass("transform");
  }
});
