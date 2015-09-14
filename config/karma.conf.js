module.exports = function (config) {
    config.set({
        basePath: '../',
        files: [
            // Project dependencies
            'app/vendor/angular/angular.js',
            'app/vendor/angular-bootstrap/ui-bootstrap.js',
            'app/vendor/angular-ui-router/release/angular-ui-router.js',
            'app/vendor/angular-spinner/angular-spinner.js',
            'app/vendor/underscore/underscore.js',
            // App files
            'app/js/modules/*.js',
            'app/js/controllers/*.js',
            'app/js/services/*.js',
            // Test dependencies
            'test/lib/angular/angular-mocks.js',
            // Test files
            'test/unit/**/*.js'
        ],
        exclude: [],
        autoWatch: true,
        frameworks: ['jasmine'],
        browsers: ['Chrome'],
        colors: true,
        plugins: [
            'karma-junit-reporter',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-coverage'
        ],
        reporters: ['dots','coverage'],
        preprocessors: {
            // source files, that you wanna generate coverage for
            // do not include tests or libraries
            // (these files will be instrumented by Istanbul)
            'app/js/**/*.js': ['coverage']
        },
        // optionally, configure the reporter
        coverageReporter: {
            type: 'html',
            dir: 'coverage/'
        }
    });
};