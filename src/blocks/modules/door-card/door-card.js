import $ from "jquery";

$(document).ready(function () {
    const doorCardGallery = $('.door-card-gallery');
    if (doorCardGallery.length) {
        doorCardGallery.owlCarousel({
            'items': 1,
            'nav': true,
            'dots': false,
            'navText': ['', '']
        });
    }

    const tabs = $(".tabs");
    if (tabs.length) {
        tabs.lightTabs();
    }

    const tabsCustom = $('.tabs-custom');
    const doorCardTabsCustom = $('.door-card-tabs-custom');
    if (tabsCustom.length && doorCardTabsCustom.length) {
        tabsCustom.on('click', 'li', function (){
            const _this = $(this);
            const tabIdx = _this.attr('data-page');
            _this.addClass('active').siblings('li').removeClass('active');

            return doorCardTabsCustom.find(`.door-card-tabs-custom-item:eq(${tabIdx})`).fadeIn().siblings().hide();
        });
    }
});
