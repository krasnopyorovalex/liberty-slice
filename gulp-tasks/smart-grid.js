"use strict";

import gulp from "gulp";
const smartgrid = require("smart-grid");

gulp.task("smart-grid", (cb) => {
    smartgrid("./src/styles/vendor/import/", {
        outputStyle: "scss",
        filename: "_smart-grid",
        columns: 12, // number of grid columns
        offset: "1.875rem", // gutter width - 30px
        mobileFirst: false,
        mixinNames: {
            container: "container"
        },
        container: {
            fields: "30px" // side fields - 15px
        },
        breakPoints: {
            xs: {
                width: "20rem", // 320px
                fields: '10px'
            },
            sm: {
                width: "36rem", // 576px
                fields: '15px'
            },
            md: {
                width: "48rem", // 768px
                fields: '15px'
            },
            lg: {
                width: "62rem", // 992px,
                fields: '30px'
            },
            xl: {
                width: "75rem" // 1200px
            },
            xxl: {
                width: "1560px"
            }
        }
    });
    cb();
});
