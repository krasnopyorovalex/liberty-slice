import $ from "jquery";

$(document).ready(function(){
    const howWeWorkCarousel = $('.how-we-work').find('.section-body .row');
    const screenWidth = $(window).width();
    if (howWeWorkCarousel.length && screenWidth <= 992) {
        howWeWorkCarousel.addClass('owl-carousel owl-theme');
        howWeWorkCarousel.owlCarousel({
            'items': 1,
            'margin': 0,
            'nav': false,
            'smartSpeed': 1200,
            'dots': true,
            'loop': true,
            'responsive': {
                0 : {
                    'items': 1
                },
                480 : {
                    'items': 1
                },
                768 : {
                    'items': 2
                },
                992 : {
                    'items': 2
                }
            }
        });
    }
});
