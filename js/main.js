/*Slider loves*/
$(function () {

    $('.overviews__slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoPlayTimer: 2000,
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

    $(document).ready(function () {
        $(".destinations__btn__next").click(function () {
            $(".destinations__wrapper__second").toggleClass("active");
            return false;
        });
    });
    $(document).ready(function () {
        $(".destinations__btn__next").click(function () {
            $(".destinations__btn__next").toggleClass("active");
            return false;
        });
    });
    $(document).ready(function () {
        $(".destinations__btn__next").click(function () {
            $(".destinations__arrow").toggleClass("active");
            return false;
        });
    });

});


$('.reviews__block').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows: false,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
            }
        },
        {
            breakpoint: 360,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

$('.autoplay').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    prevArrow: "<img src='../assets/images/pref.svg' class='reviews__prev' alt='1'>",
    nextArrow: "<img src='../assets/images/next.svg' class='reviews__next' alt='2'>",
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 360,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});
