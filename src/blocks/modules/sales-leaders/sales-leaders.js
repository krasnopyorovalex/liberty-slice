import $ from "jquery";

$(document).ready(function(){
    const salesLeadersSlider = $('.sales-leaders-slider');
    if (salesLeadersSlider.length) {
        salesLeadersSlider.owlCarousel({
            'items': 1,
            'nav': false,
            'smartSpeed': 1200,
            'dots': true
        });
    }

    const salesLeadersSliderMobile = $('.sales-leaders-slider-mobile .owl-carousel');
    if (salesLeadersSliderMobile.length) {
        salesLeadersSliderMobile.owlCarousel({
            'items': 1,
            'nav': true,
            'smartSpeed': 1200,
            'dots': true
        });
    }
});
