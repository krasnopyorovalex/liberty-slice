import $ from "jquery";

$(document).ready(function () {
    const ourSalons = $('.our-salons');
    if (ourSalons.length) {
        ourSalons.on('click', '.our-salons-title', function () {
            return $(this).next('ul').toggle();
        });
    }
});
