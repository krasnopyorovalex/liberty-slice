import $ from "jquery";

$(document).ready(function(){
    const aboutSlider = $('.about-company-slider');
    if (aboutSlider.length) {
        aboutSlider.owlCarousel({
            'items': 1,
            'nav': false,
            'dots': true,
            'smartSpeed': 1200,
            'navText': ['',''],
            'loop': true
        });
    }
});
