$(document).ready(function(){
    $('.first-screen').slick({
      slidesToShow: 1,
      dots: true,
      responsive: [{
        breakpoint: 1024,
        settings:{
          arrows:false
        }
      }]
    });

    document.getElementById('fileInput').onchange = function () {
  
      //short name
      document.getElementById('file-name').innerHTML = this.files[0].name;
      
      //long name
      // document.getElementById('file-name').innerHTML = this.value;
    };


  mobileOnlySlider(".advantages-row", true, false, 1024);

  function mobileOnlySlider($slidername, $dots, $arrows, $breakpoint) {
    var slider = $($slidername);
    var settings = {
      mobileFirst: true,
      dots: $dots,
      arrows: $arrows,
      responsive: [
        {
          breakpoint: $breakpoint,
          settings: "unslick"
        }
      ]
  };

  slider.slick(settings);

  $(window).on("resize", function () {
    if ($(window).width() > $breakpoint) {
      return;
    }
    if (!slider.hasClass("slick-initialized")) {
      return slider.slick(settings);
    }
  });
} // Mobile Only Slider


    $('.slider-tamplate').slick({
      slidesToShow: 3,
      
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            dots: false
          }
        },

        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            dots: true,
            arrow: false
          }
        },

        {
          breakpoint: 850,
          settings: {
            slidesToShow: 1,
            dots: true,
            arrow: false
          }
        },

    ]
    });
    
  });

