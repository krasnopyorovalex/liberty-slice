import $ from "jquery";

$(document).ready(function(){
    const authors = $('.authors-slider');

    if (authors.length) {
        authors.owlCarousel({
            'items': 4,
            'nav': true,
            'dots': false,
            'navText': ['',''],
            'margin': 25,
            'smartSpeed': 1200,
            'loop': true,
            'lazyLoad': true,
            'responsive': {
                0 : {
                    'items': 1
                },
                480 : {
                    'items': 2
                },
                768 : {
                    'items': 2
                },
                992 : {
                    'items': 3
                }
            }
        });
    }
});
