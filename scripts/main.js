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

$(function () {
  let $window = $(window);

  /************************
   * Scroll
   ************************/
  let $header = $(".header");
  let $transPos;

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

  /************************
   * Mobile Menu
   ************************/
  let $burgerMenu = $(".burger-menu");
  let $globalNav = $(".nav-wrapper");
  $burgerMenu.on("click", function () {
    $burgerMenu.toggleClass("is-click");
    $globalNav.toggleClass("is-show");
    $("body").toggleClass("noscroll");
  });

  /************************
   * Page Top
   ************************/
  // let appear = false;
  let $pageTop = $("#page-top");
  //一定幅スクロールしたら表示
  $window.scroll(function () {
    if ($(this).scrollTop() > 100) {
      // if (appear == false) {
      //   appear = true;
      $pageTop.stop().animate({ bottom: "20px" }, 500);
      // }
    } else {
      // 隠れる
      // if (appear) {
      //   appear = false;
      $pageTop.stop().animate({ bottom: "-100px" }, 400);
      // }
    }
  });
  //トップへ戻る
  $pageTop.click(function () {
    $("body, html").animate({ scrollTop: 0 }, 500);
    return false;
  });
});
