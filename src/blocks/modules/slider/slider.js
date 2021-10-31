import $ from "jquery";

$(document).ready(function(){
    const mainSlider = $('.main-slider');
    const screenWidth = $(window).width();

    if (mainSlider.length) {
        const owl = mainSlider.find('.owl-carousel');
        const sliderNav = mainSlider.find('.main-slider-nav');

        owl.owlCarousel({
            'items': 1,
            'nav': !sliderNav.length,
            'dots': !sliderNav.length,
            'smartSpeed': 1200,
            'navText': ['',''],
            'loop': true,
            onDragged: function (event) {
                if (sliderNav && screenWidth > 576) {
                    let idx = event.item.index === 5 ? 0 : event.item.index - 2;
                    sliderNav.find('.main-slider-nav-control:eq('+ idx +')').addClass('active').siblings('div').removeClass('active');
                }
            }
        });

        if (sliderNav.length && screenWidth > 576) {
            sliderNav.on("click", ".main-slider-nav-control", function () {
                const _this = $(this);
                const pos = parseInt(_this.index());
                _this.addClass('active').siblings('div').removeClass('active');
                return owl.trigger('to.owl.carousel', pos);
            });
        }
    }
});
