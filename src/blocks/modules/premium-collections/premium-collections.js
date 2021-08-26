import $ from "jquery";

$(document).ready(function(){
    const sliderProjects = $('.slider-projects');
    if (sliderProjects.length) {
        sliderProjects.owlCarousel({
            'items': 1,
            'nav': true,
            'dots': true,
            'smartSpeed': 1200,
            'navText': ['','']
        });
    }
});
