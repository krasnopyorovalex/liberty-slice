import $ from "jquery";

$(document).ready(function(){
    const premiumCollectionsSlider = $('.authors-slider');
    if (premiumCollectionsSlider.length) {
        premiumCollectionsSlider.owlCarousel({
            'items': 4,
            'nav': true,
            'dots': false,
            'navText': ['',''],
            'margin': 25
        });
    }
});
