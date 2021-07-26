import $ from "jquery";

$(document).ready(function(){
    const whyChooseUsSlider = $('.why-choose-us-slider');
    if (whyChooseUsSlider.length) {
        whyChooseUsSlider.owlCarousel({
            'items': 1,
            'nav': true,
            'dots': true,
            'autoplay': true,
            'autoplayTimeout': 4000,
            'smartSpeed': 1200,
            'loop': true
        });
    }
});
