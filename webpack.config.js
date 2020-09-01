'use strict';

let path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/js/script.js',
    output: {
        filename: 'bundle.js',
        path: './PortfolioSite/js'
    },
    watch: true,

    devtool: "source-map",

    module: {}
};