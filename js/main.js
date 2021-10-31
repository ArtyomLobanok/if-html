$(function() {

  $('.overviews__slider').slick({
    infinite: true,
	slidesToShow: 4,
	slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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
              slidesToShow: 3,
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
  })
    
})