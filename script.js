// Initialize WOW JS (assuming WOW JS is properly included in your project)
new WOW().init();

// Initialize Swipers
var aboutSwiper = new Swiper(".aboutSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        // When window width is <= 599px
        599: {
            slidesPerView: 2,
            spaceBetweenSlides: 50 // Typo here: 'spaceBetweenSlides' should be 'spaceBetween'
        },
    }
});

var planeSwiper = new Swiper(".planeSwiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// Get the elements
const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");


// Get the current year and add it into the HTML
document.querySelector(".year").innerHTML = new Date().getFullYear();
