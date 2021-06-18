import $ from "jquery";

$(document).ready(function(){
    const callPopup = $('.call-popup');
    const popupBg = $('<div class="popup-background"></div>');

    if (callPopup.length) {
        callPopup.on('click', function () {
            const target = $(this).attr('data-target');
            const popup = $(`#${target}`);

            console.log(target)

            if (popup.length) {
                popup.fadeIn() && $('body').append(popupBg);
                popup.on('click', '.popup-close .icon-close', function () {
                    return popup.fadeOut('fast') && popupBg.remove();
                });
            }

            return true;
        });
    }

    const forms = $('form');
    if (forms.length) {
        forms.on('click', '.label-file', function () {
            return $(this).closest('.form-group').find('input[type=file]').trigger('click');
        });
    }
});
