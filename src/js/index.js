import "./import/modules";
import lightbox from "lightbox2";
import WOW from "wow.js/dist/wow.min";

new WOW().init();

lightbox.option({
    'albumLabel': 'Изображение %1 из %2'
});
