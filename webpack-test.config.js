var path = require('path');

var JasmineWebpackPlugin = require('jasmine-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: './spec/main.js',
    output: {
        path: path.join(__dirname, 'build/specs'),
        filename: 'bundle.js'
    },
    plugins: [
        new JasmineWebpackPlugin({'filename': 'index.html'})
    ],
    module: {
        loaders: [
            {   // Babel.
                test: /\.js?$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {   // Handlebars.
                test: /\.hbs/,
                loader: "handlebars-loader"
            }
        ]
    }
};
