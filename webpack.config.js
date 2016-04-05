var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');

var htmlMinifyOptions = {
    collapseWhitespace: true,
    removeRedundantAttributes: true
};

var htmlWebpackOptions = {
    title: 'Jasmine Webpack Test',
    minify: htmlMinifyOptions,
    hash: true,
    template: 'src/index.html',
    inject: 'body'
};

module.exports = {
    devtool: 'source-map',
    entry: './src/main.js',
    output: {
        path: './build',
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin(htmlWebpackOptions)
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
            {   // CSS/PostCSS.
                test: /\.css$/,
                loader: "style-loader!css-loader!postcss-loader"
            },
            {   // Handlebars.
                test: /\.hbs/,
                loader: "handlebars-loader"
            }
        ]
    },
    postcss: function () {
        return [autoprefixer, cssnano];
    }
};
