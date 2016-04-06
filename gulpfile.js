var gulp = require('gulp');
var KarmaServer = require('karma').Server;
var webpack = require('webpack-stream');

// Gulp default task.
gulp.task('default', ['build']);

// Build website with Webpack. Uses webpack-stream to integrate with Gulp's streaming system.
gulp.task('build', function() {
    return gulp.src('src/main.js')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('build/'));
});

/**
 * The test runner. If a test fails, Gulp will emit a stack trace to the console. This behaviour
 * is annoying, but nothing is actually broken. Modifying the test function to stop
 * this from happening IS NOT RECOMMENDED as it results in any failures not being exposed to
 * the OS, making integration with CI servers very difficult.
 *
 * https://github.com/karma-runner/gulp-karma/issues/18
 *
 * @author James Fidler
 */
gulp.task('test', function (done) {
    new KarmaServer({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done).start();
});
