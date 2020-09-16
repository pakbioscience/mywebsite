jQuery(document).ready(function(){
jQuery('.reviews-row').slick({
    dots: false,
    arrows:false,
    autoplay:false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    adaptiveHeight: true,
    responsive: [
    {
      breakpoint: 767,
      settings: {
        arrows:false,
      }
    },
    ]
  });


 
});


