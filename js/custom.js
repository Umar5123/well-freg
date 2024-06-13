
//Nav Toggle
function myFunction() {
    let element = document.querySelector("nav");
    element.classList.toggle("nav-show");

    let element2 = document.querySelector(".toggle-btn");
    element2.classList.toggle("toggle-open");
}
document.querySelector(".toggle-btn").addEventListener("click", myFunction)


// AOS Animation
  AOS.init();


// Slick Slider 
  $(document).ready(function () {
    var slider;
  
    function initSlider() {
      if ($(window).width() < 768) {
        if (!slider) {
          slider = $('.slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 19000,
            dots: true,
            arrows: false,
            Infinity: true,
          });
        }
      } else {
        if (slider) {
          slider.slick('unslick');
          slider = null;
        }
      }
    }
    initSlider();
  
    $(window).resize(function () {
      initSlider();
    });
  })
