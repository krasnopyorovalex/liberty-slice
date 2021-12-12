import $ from "jquery";

$(document).ready(function(){
    const authors = $('.authors-slider');
    const screenWidth = $(window).width();

    if (authors.length) {
        authors.owlCarousel({
            'items': screenWidth <= 576 ? 1 : 4,
            'nav': true,
            'dots': false,
            'navText': ['',''],
            'margin': 25,
            'smartSpeed': 1200,
            'loop': true,
            'lazyLoad': true
        });
    }
});
