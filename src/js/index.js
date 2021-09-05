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


$(document).ready(function(){
    formHandler('form.form-cost-calculation');
});

function formHandler(selector) {
    return $(document).on("submit", selector, function(e){
        e.preventDefault();
        const _this = $(this),
            url = _this.attr('action'),
            data = _this.serialize(),
            submitBlock = _this.find("button[type=submit]");

        if (submitBlock.hasClass('is-sent')) {
            return false;
        }

        return $.ajax({
            type: "POST",
            dataType: "json",
            url: url,
            data: data,
            beforeSend: function() {
                return submitBlock.addClass("is-sent");
            },
            error: function ({responseJSON}) {
                console.log(responseJSON.message)
                //return _this.append(data.message);
            },
            success: function (response) {
                console.log(JSON.parse(response))
                _this.append(response.message);
                setTimeout(() => $('.success-message').remove(), 5000);
                return submitBlock.removeClass("is-sent") && _this.trigger("reset");
            }
        });
    });
}
