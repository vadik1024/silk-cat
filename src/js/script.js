let catalogSlider = new Swiper(".catalog-slider", {

    // slidesPerView: 4,
    spaceBetween: 32,

    slidesPerView: 'auto',
    centeredSlides: true,

    observer: true,
    observeslidechildren: true,
    loop: true,

    pagination: {
        el: ".catalog-pagination",
        clickable: true,

    },

    navigation: {
        prevEl: '.catalog-button__prev',
        nextEl: '.catalog-button__next',
    },


    breakpoints: {


        1200: {
            slidesPerView: 4,
            loop: true,
            centeredSlides: false,
        },

        992: {
            slidesPerView: 3,
            centeredSlides: false,

        },

        300: {
            spaceBetween: 15,
        }

    },

});


let categoryBtn = $(".catalog-navbar__btn");
let categoryBlock = $(".catalog-slider__block");



if (!categoryBtn.length == 0) {

    for (let i = 0; i < categoryBtn.length; i++) {

        categoryBtn.eq(i).on("click", () => {


            catalogSlider[i].loopDestroy();

            setTimeout(() => {
                catalogSlider[i].update();
                catalogSlider[i].loopCreate();
            }, 400);

            categoryBtn.removeClass("catalog-navbar__btn-active");
            categoryBtn.eq(i).addClass("catalog-navbar__btn-active");


            $(".catalog-slider__block").on("animationend", () => {
                categoryBlock.removeClass("catalog-block__active");

                categoryBlock.removeClass("fadeOutUp");

                categoryBlock.eq(i).addClass("catalog-block__active");
            });

            $(".catalog-block__active").addClass("fadeOutUp");

        })
    }



}

categoryBlock.eq(0).addClass("catalog-block__active");
catalogSlider[0].loopDestroy();

setTimeout(() => {
    catalogSlider[0].update();
    catalogSlider[0].loopCreate();
}, 400);
categoryBtn.eq(0).addClass("catalog-navbar__btn-active");


let input_element = document.querySelectorAll(".input-contain__block input");

for (let i = 0; i < input_element.length; i++) {

    input_element[i].addEventListener("keyup", () => {
        input_element[i].setAttribute("value", input_element[i].value);
    });

}


let reviewsSlider = new Swiper(".reviews-slider", {

    // slidesPerView: 4,
    spaceBetween: 32,

    slidesPerView: 'auto',
    centeredSlides: true,

    observer: true,
    observeslidechildren: true,
    loop: true,

    pagination: {
        el: ".reviews-pagination",
        clickable: true,

    },

    navigation: {
        prevEl: '.reviews-button__prev',
        nextEl: '.reviews-button__next',
    },


    breakpoints: {


        1200: {
            slidesPerView: 3,
            loop: true,
            centeredSlides: false,
        },

        992: {
            slidesPerView: 3,
            centeredSlides: false,

        },

        300: {
            spaceBetween: 15,
        }

    },

});

var link = $('.menu-btn__icon');
var link_active = $('.menu-link_active');
var menu = $('.header-menu navbar');
var nav_link = $('.header-menunavbar li a[href^="#"]');


link.click(function() {

    menu.toggleClass('menu-header__active');
    link.toggleClass('menu-btn__active');
    $("body").toggleClass("overflow-hidden");

});


nav_link.click(function() {
    menu.toggleClass('menu-header__active');
    link.toggleClass('menu-btn__active');
});

$(".tel-input input").mask("+7 (999) 999-99-99", { autoclear: false });


var didScroll;
var lastScrollTop = 0;
var delta = 5;
var distance = 0;
var navbarHeight = $('header').outerHeight();
var navbar = document.getElementsByTagName("header")[0];
var navbarSticky = navbar.offsetTop;


$(window).scroll(function(event) {

    didScroll = true;


});

setInterval(function() {

    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }

}, 250);

function hasScrolled() {

    var st = $(this).scrollTop();


    if (window.pageYOffset <= 50) {
        $('header').removeClass('menu-active__animation');
    } else {

        $('header').addClass('menu-active__animation');

    }

    if (Math.abs(lastScrollTop - st) <= delta)
        return;

    if (st > lastScrollTop && st > navbarHeight) {
        $('header').addClass('menu-active');

    } else {

        if (st + $(window).height() < $(document).height()) {
            $('header').removeClass('menu-active')
        }


    }


    lastScrollTop = st;
}

window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;

    if (window.innerWidth > 991) {
        document.querySelectorAll('.section').forEach((el, i) => {
            if (el.offsetTop - document.querySelector('.header-menu navbar').clientHeight - 550 <= scrollDistance) {
                document.querySelectorAll('.header-menu navbar li a').forEach((el) => {
                    if (el.classList.contains('active')) {
                        el.classList.remove('active');
                    }
                });

                document.querySelectorAll('.header-menu navbar li')[i].querySelector('a').classList.add('active');
            }
        });
    }
});