$(function(){

 $('.related-product__slider-items').slick({
  dots: false,
  arrows: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: '<button type="button" class="prev"></button>',
  nextArrow: '<button type="button" class="next"></button>'
  
 });


 $('.product-tabs__top-item').on('click', function (e) {
  e.preventDefault();
  $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
  $(this).addClass('product-tabs__top-item--active');
  $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
  $($(this).attr('href')).addClass('product-tabs__content-item--active');

 });

 $('.product-slider__thumb').slick({
  asNavFor: '.product-slider__big',
  focusOnSelect: true,
  slidesToShow: 3,
  slidesToScroll: 2,
  vertical: true,
  draggable: false,
  arrows: false,
  initialSlide: 1
 });

 $('.product-slider__big').slick({
  asNavFor: '.product-slider__thumb',
  draggable: false,
  arrows: false,
  fade: true,
  
 });


$('.shop-content__filter-btn').on('click', function () {
 $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active');
 $(this).addClass('shop-content__filter-btn--active');

});

$('.button-list').on('click', function () {
 $('.products__items').addClass('products__items--list');
 $('.products-item').addClass('products-item--list');
 
});

 $('.button-grid').on('click', function () {
  $('.products__items').removeClass('products__items--list');
  $('.products-item').removeClass('products-item--list');

 });

 $('.select-style, .product-info__num').styler();



 $('.filter-price__input').ionRangeSlider({
  type: "double",
  prefix: "$",
  onStart: function (data) {
   $('.filter-price__from').text(data.from);
   $('.filter-price__to').text(data.to);
  },
  onChange: function (data) {
   $('.filter-price__from').text(data.from);
   $('.filter-price__to').text(data.to);
  },

 });


 $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpead: 600,
  });

  $(".product-info__star").rateYo({
 
   starWidth: "20px",
   spacing: "8px",
   normalFill: "#ccccce",
   ratedFill: "#ffc35b",
   readOnly: true
 
  });
  
 $(".star").rateYo({

  starWidth: "12px",
  spacing: "8px",
  normalFill: "#ccccce",
  ratedFill: "#ffc35b",
  readOnly: true

 });
 
 
 $(".star__shop").rateYo({

  starWidth: "12px",
  spacing: "8px",
  normalFill: "#ccccce",
  ratedFill: "#ffc35b",
  readOnly: true

 });


 function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
   total,
   days,
   hours,
   minutes,
   seconds
  };
 }

 function initializeClock(id, endtime) {
  const clock = document.querySelector('.promo__clock');
  const daysSpan = clock.querySelector('.promo__days');
  const hoursSpan = clock.querySelector('.promo__hours');
  const minutesSpan = clock.querySelector('.promo__minutes');
  const secondsSpan = clock.querySelector('.promo__seconds');

  function updateClock() {
   const t = getTimeRemaining(endtime);

   daysSpan.innerHTML = t.days;
   hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
   minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
   secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

   if (t.total <= 0) {
    clearInterval(timeinterval);
   }
  }

  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
 }

 const deadline = $('.promo__clock').attr('data-time');
 initializeClock('promo__clock', deadline);
 
});

