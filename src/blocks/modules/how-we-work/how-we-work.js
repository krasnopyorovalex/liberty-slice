import $ from "jquery";

$(document).ready(function(){
    const howWeWorkCarousel = $('.how-we-work').find('.section-body .row');
    const screenWidth = $(window).width();
    if (howWeWorkCarousel.length && screenWidth <= 576) {
        howWeWorkCarousel.addClass('owl-carousel owl-theme');
        howWeWorkCarousel.owlCarousel({
            'items': 1,
            'margin': 0,
            'nav': false,
            'dots': true
        });
    }
});
