import "./import/modules";
import lightbox from "lightbox2";
import WOW from "wow.js/dist/wow.min";

new WOW().init();

lightbox.option({
    'albumLabel': 'Изображение %1 из %2'
});

$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});


$(document).ready(function () {
    //const variants = ["Moscow", "Pekin", "London", "Paris", "Tokyo", "Minsk", "Madrid"];

    $("#search-input").autocompleter('/autocomplete', []);

    formHandler('form.form-cost-calculation');
    formHandler('form.form-recall-me');
});

function formHandler(selector) {
    return $(document).on("submit", selector, function (e) {
        e.preventDefault();

        const _this = $(this),
            url = _this.attr('action'),
            data = new FormData($(this)[0]),
            submitBlock = _this.find("button[type=submit]");

        if (submitBlock.hasClass('is-sent')) {
            return false;
        }

        return $.ajax({
            type: "POST",
            dataType: "json",
            url: url,
            data: data,
            processData: false,
            contentType: false,
            beforeSend: function () {
                return submitBlock.addClass("is-sent");
            },
            error: function ({responseJSON}) {
                const errors = responseJSON.errors;
                let listErrors = '<ol>';
                _this.find('.success-message').remove();

                for (const error in errors) {
                    for (let index = 0; index < errors[error].length; ++index) {
                        listErrors += `<li>${errors[error][index]}</li>`;
                    }
                }
                listErrors += '</ol>';

                const msg = `<div class="success-message">${listErrors}</div>`;

                return _this.prepend(msg) && submitBlock.removeClass("is-sent");
            },
            success: function ({message}) {
                _this.find('.success-message').remove();

                _this.prepend(message);
                setTimeout(() => $('.success-message').remove(), 8000);
                if (_this.closest('.popup').length) {
                    setTimeout(() => _this.closest('.popup').find('.popup-close .icon-close').trigger('click'), 8000);
                }

                return submitBlock.removeClass("is-sent") && _this.trigger("reset");
            }
        });
    });
}
