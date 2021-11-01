/*Slider loves*/
$(function() {

  $('.overviews__slider').slick({
    infinite: true,
	slidesToShow: 4,
	slidesToScroll: 1,
      autoplay: true,
    autoPlayTimer: 2000,
      prevArrow: "<img src='../assets/images/pref.svg' class='overviews__prev' alt='1'>",
      nextArrow: "<img src='../assets/images/next.svg' class='overviews__next' alt='2'>",
	responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 3,
	      }
	    },
        {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            }
          },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 2,
	      }
	    },
        {
            breakpoint: 360,
            settings: {
            slidesToShow: 2,
          }
        }
    ]
  });

    /*Collapse destinations*/

    $(document).ready(function(){
        $(".destinations__btn__next").click(function(){
            $(".destinations__wrapper__second").toggleClass("active"); return false;
        });
    });
    $(document).ready(function(){
        $(".destinations__btn__next").click(function(){
            $(".destinations__btn__next").toggleClass("active"); return false;
        });
    });
    $(document).ready(function(){
        $(".destinations__btn__next").click(function(){
            $(".destinations__arrow").toggleClass("active"); return false;
        });
    });

});


$(function() {

    $('.reviews__block').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        prevArrow: "<img src='../assets/images/pref.svg' class='overviews__prev' alt='1'>",
        nextArrow: "<img src='../assets/images/next.svg' class='overviews__next' alt='2'>",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 360,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });
});