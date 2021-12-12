import $ from "jquery";

$(document).ready(function(){
    const howWeWorkCarousel = $('.how-we-work').find('.section-body .row');
    const screenWidth = $(window).width();
    if (howWeWorkCarousel.length && screenWidth <= 768) {
        howWeWorkCarousel.addClass('owl-carousel owl-theme');
        howWeWorkCarousel.owlCarousel({
            'items': 1,
            'margin': 0,
            'nav': false,
            'smartSpeed': 1200,
            'dots': true,
            'loop': true,
            responsive : {
                // breakpoint from 0 up
                0 : {
                    'items': 1
                },
                // breakpoint from 480 up
                480 : {
                    'items': 2
                },
                // breakpoint from 768 up
                768 : {
                   'items': 3
                }
            }
        });
    }
});
