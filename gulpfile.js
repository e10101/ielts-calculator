// Assigning modules to local variables
var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync').create();
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');
var pkg = require('./package.json');

var htmlmin = require('gulp-htmlmin');
var nodemon = require('gulp-nodemon');
var concat = require('gulp-concat');

var plumber = require('gulp-plumber');
var gutil = require('gulp-util');

var sass = require('gulp-sass');
var ngHtml2Js = require("gulp-ng-html2js");

// Error handle
var gulp_src = gulp.src;
gulp.src = function() {
    return gulp_src.apply(gulp, arguments)
        .pipe(plumber(function(error) {
                // Output an error message
                gutil.log(gutil.colors.red('Error (' + error.plugin + '): ' + error.message));
                // emit the end event, to properly end the task
                this.emit('end');
            })
        );
};

// Default task
gulp.task('default', ['minify-js', 'minify-html']);


// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('src/scss/**/all.scss')
        .pipe(sass())
        .pipe(concat('all.css'))
        .pipe(cleanCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('public/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

// Minify JS
gulp.task('minify-js', function () {
    return gulp.src([
            'app_client/common/services/yuqing.service.js',
            'app_client/common/services/*.js',
            'app_client/app.js',
            'app_client/**/*.js'
        ])
        .pipe(concat('all.js'))
        .pipe(uglify({
            output: {
                ascii_only: true
            }
        }))
        .pipe(rename({suffix: '.min' }))
        .pipe(gulp.dest('public/js'))
        .pipe(browserSync.reload({
            stream: true
        }))
});


// Minify HTML
gulp.task('minify-html', function() {
    return gulp.src('app_client/**/index.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('public/html'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

// AngularJS HTML Partials
gulp.task('ng-html2js', function() {
    "use strict";
    return gulp.src(["app_client/**/*.html", "!app_client/index.html"])
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(ngHtml2Js({
            moduleName: "typingApp",
            prefix: "/partials/"
        }))
        .pipe(concat("partials.min.js"))
        .pipe(uglify({
            output: {
                ascii_only: true
            },
            // compress: {
            //     drop_console: true
            // }
        }))
        .pipe(gulp.dest('public/javascripts'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

// Configure the browserSync task
gulp.task('browserSync', ['nodemon'], function() {
    browserSync.init(null, {
        proxy: "http://localhost:4002",
        port: 7000,
        notify: true
    });
});

gulp.task('nodemon', function (cb) {
    var called = false;
    return nodemon({script: 'app.js'}).on('start', function () {
        if (!called) {
            called = true;
            cb();
        }
    });
});

// Watch Task that compiles LESS and watches for HTML or JS changes and reloads with browserSync
gulp.task('dev', ['browserSync', 'minify-js', 'minify-html', 'sass'], function() {
    // gulp.watch('src/less/*.less', ['less']);
    // gulp.watch('css/*.css', ['minify-css']);
    gulp.watch('app_client/**/*.js', ['minify-js']);
    gulp.watch('app_client/**/*.scss', ['sass']);
    gulp.watch('app_client/**/*.html', ['minify-html']);
    gulp.watch('app_client/**/*.html', ['ng-html2js']);
    // Reloads the browser whenever HTML or JS files change
    gulp.watch('public/*.html', browserSync.reload);
    gulp.watch('public/js/*.js', browserSync.reload);
    gulp.watch('public/css/*.css', browserSync.reload);
});