// Karma configuration: http://karma-runner.github.io/0.13/config/configuration-file.html
// karma-webpack configuration: https://github.com/webpack/karma-webpack

module.exports = function(config) {
    config.set({

        // Karma config.
        frameworks: ['jasmine'],
        browsers: ['PhantomJS'],
        reporters: ['dots'],

        // Files containing tests.
        files: [
            './src/**/tests/*.js'
        ],

        // Preprocessors to run against test files.
        preprocessors: {
            './src/**/tests/*.js': ['webpack']
        },

        // Webpack setup. Specifies loaders required for tests to compile.
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

        // Disables verbose output in CLI.
        webpackMiddleware: {
            noInfo: true
        }
    });
};
