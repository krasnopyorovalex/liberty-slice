import $ from "jquery";

$(document).ready(function(){
    const header = $('header');
    const burgerMob = header.find('.burger-mob');
    const menu = header.find('.menu-line > ul');
    const body = $('body');
    const iconFavorite = $('svg.icon-favorite');

    if (burgerMob.length) {
        burgerMob.on('click', function () {
            return $(this).toggleClass('active') && header.toggleClass('active') && menu.toggleClass('active') && body.toggleClass('not-overflow');
        });
    }

    $("#sticky").sticky({zIndex: 1000});

    iconFavorite.on({
        mouseenter: function () {
            return $(this).html(`<use xlink:href="../img/sprites/sprite.svg#favorite-active"></use>`);
        },
        mouseleave: function () {
            return $(this).html(`<use xlink:href="../img/sprites/sprite.svg#favorite"></use>`);
        }
    });
});
