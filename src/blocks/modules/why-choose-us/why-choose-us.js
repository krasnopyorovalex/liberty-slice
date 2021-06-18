import $ from "jquery";

$(document).ready(function(){
    const whyChooseUsSlider = $('.why-choose-us-slider');
    if (whyChooseUsSlider.length) {
        whyChooseUsSlider.owlCarousel({
            'items': 1,
            'nav': false,
            'dots': true
        });
    }
});
