import $ from "jquery";

$(document).ready(function () {
    const ourSalons = $('.our-salons');
    const screenWidth = $(window).width();

    if (ourSalons.length && screenWidth <= 576) {
        ourSalons.on('click', '.our-salons-title', function () {
            return $(this).next('ul').toggle();
        });
    }
});
