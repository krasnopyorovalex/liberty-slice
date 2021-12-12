import $ from "jquery";

$(document).ready(function () {
    const ourSalons = $('.our-salons');
    const screenWidth = $(window).width();

    if (ourSalons.length && screenWidth <= 768) {
        ourSalons.on('click', function () {
            console.log('ascasc')
            return $(this).find('ul').toggle();
        });
    }
});
