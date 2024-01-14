$(function(){
    'use strict';
    // banner part start
    
$('#banner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
  });

//   banner part end

// help part start
$('.slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  dots: false,
});
// help part end

// coundown js part start
$('#getting-started').countdown('2024/01/12', function(event) {
  $(this).html(event.strftime('%D days %H:%M:%S'));
});


// conudown end

// increment decrement js
$('.stepper-widget').stepper();

// hot the day slider start
$('.zoom_part').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  dots: false,
  arrow: true,
  autoplaySpeed: 1000,
  nextArrow: '<i class="fas fa-chevron-right net-arrow"></i>',
  prevArrow: '<i class="fas fa-chevron-left pre-arrow"></i>',
});
// hot the day slider end


// best_daily_slider start
$('.best_daily_slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  arrows: true,
  dots: false,
  nextArrow: '<i class="fas fa-chevron-right net-arrow nxt_arr"></i>',
  prevArrow: '<i class="fas fa-chevron-left pre-arrow pre_arr"></i>',
});

// clients slider part start
$('.cl').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  arrows: false,
  dots: false,
});
// shop slider part start
$('.s_s_p').slick({
  slidesToShow: 7,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  arrows: false,
  dots: false,
});
// shop 2nd slider part start
$('.hhha').slick({
  slidesToShow: 8,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  arrows: false,
  dots: false,
});


// blog part slider start
$('.blog_item').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  arrows: true,
  dots: false,
  nextArrow: '<i class="fas fa-chevron-right net-arrow nxt_arr"></i>',
  prevArrow: '<i class="fas fa-chevron-left pre-arrow pre_arr"></i>',
});

// blog part slider end

// counter up js start

$('.counter').counterUp({
  delay: 10,
  time: 500,
});


// Awards part start
$('.aw_js').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  arrows: false,
  dots: false,
});



// back to top js

$('.back_top').on('click', function () {
  $('html,body').animate({
    scrollTop: 0,
  });
});

$(window).on('scroll', function(){
 var abc = $(this).scrollTop();

 if(abc > 200){
  $('.back_top').fadeIn();
 }
 else{
  $('.back_top').fadeOut();
 }

});



});