import $ from "jquery";

$(document).ready(function(){
    const accordion = $('.accordion');

    if (accordion.length) {
        accordion.on('click', '.accordion-title', function () {
            return $(this).toggleClass('active');
        });
    }
});
