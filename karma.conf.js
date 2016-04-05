module.exports = function(config) {
    config.set({

        // Karma config.
        frameworks: ['jasmine'],
        browsers: ['PhantomJS'],
        reporters: ['dots'],

        // Webpack.
        files: [
            './src/tests/*.js'
        ],

        preprocessors: {
            './src/tests/*.js': ['webpack']
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
