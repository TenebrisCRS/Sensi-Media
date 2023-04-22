$(function () {
  $('.portfolio__list').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,
    infinite: true,
    // fade: true,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          // arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          // centerMode: true,
        }
      },
      {
        breakpoint: 700,
        settings: {
          // centerMode: true,
          arrows: false,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  })

  $('.header-top__menu-btn').on('click', function () {
    $('.header-top__nav-list').toggleClass("active");
  })

  $('.header-top__nav-link').on('click', function () {
    $('.header-top__nav-list').toggleClass("active");
    $('.header-top__menu-icon').toggleClass('active')
  })





  let animArr = [$('.features__inner'), $('.contacts__img'), $('.contacts__content-box'), $('.portfolio__list'), $('.portfolio__title'), $('.header-bottom__img'), $('.header-bottom__content-box'), $('.services__title'), $('.services__cards')];
  
  for (let i = 0; i < animArr.length; i++) {
    is_fully_shown(animArr[i]);
  }

  function is_fully_shown(target) {
    var wt = $(window).scrollTop(); 
    var wh = $(window).height();    
    var eh = $(target).height();  
    var et = $(target).offset().top;
    
    if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)){
      target.addClass('active');
    } 
  }

  $(window).on("scroll", function watchingFunc(){
    for (let i = 0; i < animArr.length; i++) {
      is_fully_shown(animArr[i]);
    }
  });
})