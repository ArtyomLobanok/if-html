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

    /*Tab destinations*/
    document.querySelectorAll('.tabs-triggers__item').forEach((item) =>
        item.addEventListener('click', function (e) {
            e.preventDefault();
            const id = e.target.getAttribute('href').replace('#', '');

            document.querySelectorAll('.tabs-triggers__item').forEach(
                (child) => child.classList.remove('tabs-triggers__item--active')
            );

            document.querySelectorAll('.tabs-content__item').forEach(
                (child) => child.classList.remove('tabs-content__item--active')
            );

            item.classList.add('tabs-triggers__item--active');
            document.getElementById(id).classList.add('tabs-content__item--active');
        })

    );

//Если нажали на Tabs
    $('.tabs-triggers__item').on('click', function (e) {
        //Уничтожаем объект
        $('.destinations__slider').slick('unslick');

        //Инициализируем новый слайдер
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
    });

    document.querySelector('.tabs-triggers__item').click();

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

/*slider*/
/*let position = 0;
const slidesToShow = 4;
const slidesToScroll = 1;
const container =  document.querySelector('.slider-container');
const track =  document.querySelector('.slider-track');
const btnPrev = document.querySelector('.btn-prev');
const btnNext =  document.querySelector('.btn-next');
const items =  document.querySelectorAll('.slider-item');
const itemsCount =  items.length;
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;

items.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`;
});

btnNext.addEventListener('click', () => {
    const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
});

btnPrev.addEventListener('click', () => {
    const itemsLeft = Math.abs(position) / itemWidth;

    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
});

const setPosition = () => {
    track.style.transform = `translateX(${position}px`;
};

const checkBtns = () => {
    btnPrev.disabled = position === 0;
    btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
};
checkBtns();*/

/*Carousel Reviews responsive*/



