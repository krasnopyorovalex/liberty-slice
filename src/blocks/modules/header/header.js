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

    //$("#sticky").sticky({zIndex: 1000});

    $(window).scroll(function () {
        const scrollTop = $(this).scrollTop();
        if (scrollTop > 250) {
            return header.addClass('is-sticky');
        }
        if (scrollTop < 180) {
            return header.removeClass('is-sticky');
        }
    });

    iconFavorite.on({
        mouseenter: function () {
            return $(this).html(`<use xlink:href="../img/sprites/sprite.svg#favorite-active"></use>`);
        },
        mouseleave: function () {
            return $(this).html(`<use xlink:href="../img/sprites/sprite.svg#favorite"></use>`);
        }
    });
});
