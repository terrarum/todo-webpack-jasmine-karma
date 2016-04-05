# Installation.

The following packages need to be installed globally to run them from the command line:

- karma-cli
- webpack

This requirement could be alleviated by running them through a task runner such as Gulp. This would probably be a good idea as it allows additional tasks to be run that Webpack is not well suited for, such as deleting the build folder before every build.

# Commands.
-   Build app:
    `webpack`

-   Build Jasmine test runner:
    `webpack --config webpack-test.config.js`
    This results in an html file that can be used to run Jasmine in the browser, entirely separately from Karma.

-   Run Karma:
    `karma start karma.conf.js`
    Karma watches for file changes by default, so this does not need to be run every time you change something.

# Questions

### Where do we store tests?

In the test store.

### How do we ensure tests stay with plugins?

Plugins can have a `tests` folder inside them that contains all tests. This makes tests easy to target when running the entire test suite, as described in the test aggregation question below.
 
If the plugin has any dependencies, they will have to be installed in order for the plugin to be developed against or used anyway, so their tests can be linked as well where necessary.

### How do we run the tests?

Karma is run via a configuration file. We can have different configuration files for each environment. Local development can run everything through PhantomJS for a quick check, while the build process actually tests in all browsers.

### How do we aggregate and run all tests for all plugins in an automated build environment?

Karma can be configured to search through nested folders for test files. The following selector will target any js files inside a test folder inside the src folder to be run through Jasmine. 

`'./src/**/tests/*.js'`

Plugins will be stored in separate repositories, and so will have their own test folders and their own Karma configurations for local testing. The build server can install our codebase and all plugins, and use a broad selector like the one above to run all available tests.

### Do we need any inheritance between tests where a child theme extends a parent theme?



### Documenting prerequisites for an automated environment to run these tests? node etc.


