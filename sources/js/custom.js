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
                slidesToScroll: 1
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

$(".steps-slider").slick({
    variableWidth: true,
    infinite: false,
    // autoplay: true,
    arrows: true,
    prevArrow: "<button class='flex bg-[#D8D8D8] absolute top-1/2 translate-x-1/2 -translate-y-1/2 -left-14 w-8 h-12 px-1 items-center justify-center py-[6px] next-arrow text-white hover:bg-brand-blue transition-all duration-100 ease-linear hover:duration-150 group'><img src='images/left-caret.svg'></button>",
    nextArrow: "<button class='flex bg-[#D8D8D8] absolute top-1/2 translate-x-1/2 -translate-y-1/2 -right-10 w-8 h-12 px-1 items-center justify-center py-[6px] next-arrow text-white hover:bg-brand-blue transition-all duration-100 ease-linear hover:duration-150 group'><img src='images/right-caret.svg'></button>"
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