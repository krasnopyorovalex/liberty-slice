import $ from "jquery";

$(document).ready(function(){
    const mainSlider = $('.main-slider');
    if (mainSlider.length) {
        const owl = mainSlider.find('.owl-carousel');
        const sliderNav = mainSlider.find('.main-slider-nav');

        owl.owlCarousel({
            'items': 1,
            'nav': !sliderNav.length,
            'dots': !sliderNav.length,
            'navText': ['','']
        });

        if (sliderNav.length) {
            sliderNav.on("click", ".main-slider-nav-control", function () {
                const _this = $(this);
                const pos = parseInt(_this.index());
                _this.addClass('active').siblings('div').removeClass('active');
                return owl.trigger('to.owl.carousel', pos);
            });
        }
    }
});
