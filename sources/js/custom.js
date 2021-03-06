// $(".auction-slider").slick({
//     variableWidth: true,
//     infinite: false,
//     autoplay: true,
//     arrows: true,
//     prevArrow: "<img src='images/slider-right.svg' class='cursor-pointer rotate-180 w-10 next-arrow transition-all duration-100 ease-linear hover:duration-150'>",
//     nextArrow: "<img src='images/slider-right.svg' class='cursor-pointer w-10 next-arrow transition-all duration-100 ease-linear hover:duration-150'>",
//     appendArrows: ".slider-arrows"
// })

$(".auction-slider").owlCarousel({
    dots: false,
    autoWidth: true,
    nav: true,
    rewind: true,
    navText: [
        "<img src='images/slider-right.svg' class='cursor-pointer rotate-180 w-10 next-arrow transition-all duration-100 ease-linear hover:duration-150'>",
        "<img src='images/slider-right.svg' class='cursor-pointer w-10 next-arrow transition-all duration-100 ease-linear hover:duration-150'>"
    ],
    navContainer: ".slider-arrows"
})

// $(".featured-slider").owlCarousel({
//     // variableWidth: true,
//     // infinite: false,
//     // autoplay: true,
//     arrows: true,
//     center: true,
//     items: 1,
//     navText: [
//         "<button class='flex bg-[#D8D8D8] absolute top-20 -left-10 w-8 h-12 px-1 items-center justify-center py-[6px] next-arrow text-white hover:bg-brand-blue transition-all duration-100 ease-linear hover:duration-150 group'><img src='images/left-caret.svg'></button>",
//         "<button class='flex bg-[#D8D8D8] absolute top-20 -right-10 w-8 h-12 px-1 items-center justify-center py-[6px] next-arrow text-white hover:bg-brand-blue transition-all duration-100 ease-linear hover:duration-150 group'><img src='images/right-caret.svg'></button>"
//     ],
//     responsive: {
//             350: {
//                 items: 1,
//                 slideBy: 1
//             },

//             576: {
//                 items: 2,
//                 slideBy: 1
//             },

//             768: {
//                 items: 3,
//                 slideBy: 2
//             },

//             992: {
//                 items: 4,
//                 slideBy: 3
//             },

//             1200: {
//                 items: 4,
//                 slideBy: 3
//             },

//             1400: {
//                 items: 5,
//                 slideBy: 4
//             },
//     }
// })

$(".featured-slider").slick({
    variableWidth: true,
    infinite: false,
    // autoplay: true,
    arrows: true,
    // centerMode: true,
    prevArrow: "<button class='flex bg-[#D8D8D8] absolute top-20 -left-10 w-8 h-12 px-1 items-center justify-center py-[6px] next-arrow text-white hover:bg-brand-blue transition-all duration-100 ease-linear hover:duration-150 group'><img src='images/left-caret.svg'></button>",
    nextArrow: "<button class='flex bg-[#D8D8D8] absolute top-20 -right-10 w-8 h-12 px-1 items-center justify-center py-[6px] next-arrow text-white hover:bg-brand-blue transition-all duration-100 ease-linear hover:duration-150 group'><img src='images/right-caret.svg'></button>",
    responsive: [
        {
            breakpoint: 350,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerMode: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 4
            }
        }
    ]
})

// $(".steps-slider").slick({
//     // variableWidth: true,
//     infinite: false,
//     // autoplay: true,
//     centerMode: true,
//     arrows: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     prevArrow: "<button class='flex bg-[#D8D8D8] absolute top-1/2 translate-x-1/2 -translate-y-1/2 -left-14 w-8 h-12 px-1 items-center justify-center py-[6px] next-arrow text-white hover:bg-brand-blue transition-all duration-100 ease-linear hover:duration-150 group'><img src='images/left-caret.svg'></button>",
//     nextArrow: "<button class='flex bg-[#D8D8D8] absolute top-1/2 translate-x-1/2 -translate-y-1/2 -right-10 w-8 h-12 px-1 items-center justify-center py-[6px] next-arrow text-white hover:bg-brand-blue transition-all duration-100 ease-linear hover:duration-150 group'><img src='images/right-caret.svg'></button>"
// })

$(".steps-slider").owlCarousel({
    // variableWidth: true,
    infinite: false,
    // autoplay: true,
    center: true,
    nav: true,
    items: 1,
    slideBy: 1,
    loop: true,
    navText: [
        "<button class='flex bg-[#D8D8D8] absolute top-1/2 translate-x-1/2 -translate-y-1/2 -left-4 lg:left-0 w-8 h-12 px-1 items-center justify-center py-[6px] next-arrow text-white hover:bg-brand-blue transition-all duration-100 ease-linear hover:duration-150 group'><img src='images/left-caret.svg'></button>",
        "<button class='flex bg-[#D8D8D8] absolute top-1/2 translate-x-1/2 -translate-y-1/2 right-3 w-8 h-12 px-1 items-center justify-center py-[6px] next-arrow text-white hover:bg-brand-blue transition-all duration-100 ease-linear hover:duration-150 group'><img src='images/right-caret.svg'></button>"
    ]
})

$(document).ready(function(){
    $(".toggle-btn").click(function(){
      $(this).toggleClass("rotate-icons");
      $("#menu").toggleClass("show-menu");
      $("nav").toggleClass('hidden-nav');
      $(".second-btn").toggleClass("mr-6")
    });

});

function animateImg(element) {
    elmntImg = element.firstElementChild.firstElementChild;
    elmntImg.classList.remove("undo-transform")
    elmntImg.classList.add("move-img")
}

function disanimateImg(element) {
    elmntImg = element.firstElementChild.firstElementChild;
    elmntImg.classList.remove("move-img")
    elmntImg.classList.add("undo-transform")
}