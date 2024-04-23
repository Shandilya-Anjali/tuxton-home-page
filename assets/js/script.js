$(document).ready(function($) {

    // Sticky Header
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 100) {
            $('.header').addClass('is-sticky');
        } else {
            $('.header').removeClass('is-sticky');
        }
    });

    // Search box
    $(".btn-search").click(function() {
        $(".search-bar").toggleClass("active");
    });
    $(".btn-close-search").click(function() {
        $(".search-bar").removeClass("active");
    });

    /*Mobile Menu*/
    $(".navbar-toggler").click(function() {
        $('.navbar').toggleClass('active');
        $('body').toggleClass('menu-open');
    });

    // Slider
    if ($('.announcement').length) {
        var announcement_bar = new Swiper(".announcement-bar", {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            speed: 2000,
            autoplay: {
                delay: 2500,
            },
        });
    }
    //responsive-menu

    $(".dropdown").hover(
        function() {
            $('.sub-menu', this).stop().slideDown(0);
            $("body").addClass("menu-open");

        },
        function() {
            $("body").removeClass("menu-open");
            $('.sub-menu', this).stop().slideUp(100);
        });

    $('.navbar-toggler').click(function(e) {
        e.preventDefault();
        $('.mobile-menu').slideToggle();
        $(this).toggleClass('open');
    });

    // Toggle dropdown menu on click
    $(".mobile-navbar ul li.dropdown").click(function() {
        var $dropdown = $(this).children(".mobile-dropdown");

        // Close other dropdowns
        $(".mobile-navbar ul li.dropdown").not(this).removeClass("active")
            .children(".mobile-dropdown").slideUp();

        // Toggle active class and slide current dropdown
        $(this).toggleClass("active");
        $dropdown.stop().slideToggle();
    });

    // Toggle inner dropdown on click
    $(".mobile-dropdown .inner-dropdown").click(function(event) {
        event.stopPropagation(); // Prevent dropdown from closing when inner dropdown is clicked
        $(this).toggleClass("open");
    });

    // Close dropdown when clicking outside
    $(document).click(function(event) {
        if (!$(event.target).closest('.mobile-navbar ul li.dropdown').length) {
            $(".mobile-navbar ul li.dropdown").removeClass("active")
                .children(".mobile-dropdown").slideUp();
        }
    });


    //banner-slider 
    if ($('.banner-wrapper').length) {
        var banner_swiper = new Swiper(".banner-swiper", {
            slidesPerView: 1,
            spaceBetween: 40,
            loop: false,
            // effect: "fade",
            speed: 2500,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            fadeEffect: {
                crossFade: true
            },
        });
    }

    //collection-slider 
    if ($('.collection-slider').length) {
        var collection_swiper = new Swiper(".card-swiper", {
            effect: "cards",
            grabCursor: true,
            initialSlide: 2,
            speed: 1000,
            loop: false,
            rotate: true,
        });
    }
    //indsrtry-slider
    if ($('.industry-wrapper').length) {
        var swiper = new Swiper(".industry-swiper", {
            slidesPerView: 5,
            spaceBetween: 20,
            loop: false,
            speed: 2000,

            breakpoints: {
                320: {
                    slidesPerView: 1.2,
                    spaceBetween: 20,
                },

                576: {
                    slidesPerView: 1.3,
                    spaceBetween: 20,
                },

                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,

                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                1440: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                }
            },

        });
    }

    //gallary-slider
    if ($('.gallray-wrapper').length) {
        var gallary_swiper = new Swiper(".gallary-swiper", {
            slidesPerView: 5,
            spaceBetween: 20,
            loop: false,
            speed: 2000,
            grabCursor: true,

            breakpoints: {
                320: {
                    slidesPerView: 1.2,
                    spaceBetween: 20,
                },

                576: {
                    slidesPerView: 1.3,
                    spaceBetween: 20,
                },

                640: {
                    slidesPerView: 2.5,
                    spaceBetween: 20,
                },

                768: {
                    slidesPerView: 2.5,
                    spaceBetween: 20,
                },

                991: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },

                1040: {
                    slidesPerView: 3.5,
                    spaceBetween: 20,
                },

                1200: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                1440: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                }
            },

        });
    }


});

AOS.init({
    // offset: 100,
    duration: 1000,
    delay: 100,
    once: true,

});