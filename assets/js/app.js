$(document).ready(function () {
    $('.content__feature-location').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: false,
        dots: true,
        prevArrow:
            "<button class='previous-btn round-btn'><i class='fas fa-chevron-left slider-btn-icon'></i></button >",
        nextArrow: "<button class='next-btn round-btn'><i class='fas fa-chevron-right slider-btn-icon'></i></button>",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1008,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 740,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });

    $('.suggest__list').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        infinite: false,
        dots: true,
        prevArrow:
            "<button class='previous-btn round-btn'><i class='fas fa-chevron-left slider-btn-icon'></i></button >",
        nextArrow: "<button class='next-btn round-btn'><i class='fas fa-chevron-right slider-btn-icon'></i></button>",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },

            {
                breakpoint: 740,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],

    });

    $('.discovery__list').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: false,
        dots: true,
        prevArrow:
            "<button class='previous-btn round-btn'><i class='fas fa-chevron-left slider-btn-icon'></i></button >",
        nextArrow: "<button class='next-btn round-btn'><i class='fas fa-chevron-right slider-btn-icon'></i></button>",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },

            {
                breakpoint: 740,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],


    });

    $('.guide__list').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: false,
        dots: true,
        prevArrow:
            "<button class='previous-btn round-btn'><i class='fas fa-chevron-left slider-btn-icon'></i></button >",
        nextArrow: "<button class='next-btn round-btn'><i class='fas fa-chevron-right slider-btn-icon'></i></button>",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },

            {
                breakpoint: 740,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],


    });
});