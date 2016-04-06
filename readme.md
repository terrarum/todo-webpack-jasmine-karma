# Installation.

The following packages need to be installed globally to run them from the command line:

- gulp-cli

`npm install` will install the remaining dependencies as local packages.

To run Karma and Webpack without Gulp, `webpack` and `karma-cli` must be installed as global packages, or the project's `node_modules/.bin` folder must be added to PATH. 

# Commands.
-   Build app:

    `gulp`
    
    or 
    
    `webpack`

-   Build Jasmine test runner:

    `webpack --config webpack-test.config.js`
    
    This results in an html file that can be used to run Jasmine in the browser, entirely separately from Karma.

-   Run Karma:

    `gulp test`
    
    or 
    
    `karma start karma.conf.js`
    
    Karma watches for file changes by default, so this does not need to be run every time you change something.