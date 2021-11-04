/*Carousel loves responsive*/
$(function () {

    $('.overviews__slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 1000,
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

/*Carousel Reviews responsive*/
$('.destinations__slider').slick({
    infinite: true,
    draggable: false,
    swipe: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: true,
                draggable: true,
                swipe: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: true,
                draggable: true,
                swipe: true,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: true,
                draggable: true,
                swipe: true,
            }
        },
        {
            breakpoint: 360,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: true,
                draggable: true,
                swipe: true,
            }
        }
    ]
});

/*Carousel Reviews responsive*/
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
    ]
});
