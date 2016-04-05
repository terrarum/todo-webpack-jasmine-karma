module.exports = function(config) {
    config.set({

        // Karma config.
        frameworks: ['jasmine'],
        browsers: ['PhantomJS'],
        reporters: ['progress', 'dots'],

        // Webpack.
        files: [
            './spec/main.js'
        ],

        preprocessors: {
            './spec/main.js': ['webpack']
        },

        webpack: {
            module: {
                loaders: [
                    {   // Babel.
                        test: /\.js?$/,
                        loader: 'babel-loader',
                        query: {
                            presets: ['es2015']
                        }
                    }
                ]
            }
        },

        webpackMiddleware: {
            noInfo: true
        }
    });
};
