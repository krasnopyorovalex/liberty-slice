import $ from "jquery";

$(document).ready(function(){
    const interiorCardSlider = $('.slider-thumb');
    if (interiorCardSlider.length) {
        const owlCardSlider = interiorCardSlider.find('.owl-carousel');

        owlCardSlider.owlCarousel({
            'items': 1,
            'nav': true,
            'dots': false,
            'navText': ['','']
        });

        owlCardSlider.on('changed.owl.carousel', function(event) {
            const idx = event.item.index;
            let items;
            items = thumbs.find(".owl-item");
            items.removeClass("current");

            return owlCardSlider.closest('.interior-card-slider').find('.digits span').text(idx + 1) && items.eq(idx).addClass("current");
        });

        owlCardSlider.on('click', '.btn-show-hide', function () {
            return $(this).closest('.board').toggleClass('active');
        });

        const thumbs = $('.interior-card-slider-thumbs');
        thumbs.owlCarousel({
            items: 7,
            margin: 12,
            nav:false,
            dots:false,
            responsive : {
                0 : {
                    items: 3
                },
                480 : {
                    items: 3
                },
                768 : {
                    items: 7
                }
            }
        });
        thumbs.on('click', '.owl-item', function() {
            const _this = $(this),
                index = _this.find('img').attr('data-index');

            return _this.closest('.owl-item').addClass('current').siblings().removeClass('current') && owlCardSlider.trigger('to.owl.carousel', index);
        });
        thumbs.find(".owl-item").eq(0).addClass("current");
    }
});
