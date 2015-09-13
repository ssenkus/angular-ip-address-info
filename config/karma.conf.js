module.exports = function(config){
    config.set({
    basePath : '../',

    files : [
      'app/vendor/angular/angular.js',
      'test/lib/angular/angular-mocks.js',
      'app/js/modules/*.js',
      'app/js/controllers/*.js',
      'test/unit/**/*.js'
    ],

    exclude : [],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-junit-reporter',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine'
            ],
})}
