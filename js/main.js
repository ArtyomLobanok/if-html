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

    /*Collapse*/
    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('collapse');

        $this.toggleClass("active");
    });





});