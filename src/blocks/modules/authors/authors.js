import $ from "jquery";

$(document).ready(function(){
    const premiumCollectionsSlider = $('.authors-slider');
    const screenWidth = $(window).width();
    if (premiumCollectionsSlider.length) {
        premiumCollectionsSlider.owlCarousel({
            'items': screenWidth <= 576 ? 1 : 4,
            'nav': screenWidth > 576,
            'dots': screenWidth <= 576,
            'navText': ['',''],
            'margin': 25
        });
    }
});
