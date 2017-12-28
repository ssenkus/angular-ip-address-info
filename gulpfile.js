const gulp = require('gulp');
const sass = require('gulp-sass');
const header = require('gulp-header');
const cleanCSS = require('gulp-clean-css');
const rename = require("gulp-rename");
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const beautify = require('gulp-html-beautify');
const pkg = require('./../api/package.json');

// Set the banner content
let banner = ['/*!\n',
    ' * IP Address Info App - <%= pkg.title %> v<%= pkg.version %> (<%= pkg.homepage %>)\n',
    ' * Copyright ' + (new Date()).getFullYear() + '\n',
    ' */\n',
    ''
].join('');


/*
 * Gulp Tasks
 */

// Compiles SCSS files from /scss into /css
gulp.task('sass', function () {
    return gulp.src('scss/styles.scss')
        .pipe(sass())
        .pipe(header(banner, {
            pkg: pkg
        }))
        .pipe(gulp.dest('css'))
});

// Minify compiled CSS
gulp.task('minify-css', ['sass'], function () {
    return gulp.src('css/styles.css')
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('css'))
});

// Minify custom JS
gulp.task('minify-js', function () {
    return gulp.src(jsFiles)
        .pipe(uglify())
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('js'))
});

// Default task
gulp.task('default', ['sass', 'minify-css', 'minify-js']);
