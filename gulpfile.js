var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var postcss = require('gulp-postcss');
var cssvariables = require('postcss-css-variables');
var postcssclean = require('postcss-clean');
var postcssdiscarddublicates = require('postcss-discard-duplicates');
var cssimport = require('postcss-import');
var concat = require('gulp-concat');
var minify = require('gulp-minify');

gulp.task('postcss', function() {
    return gulp.src(['styles/*.css'])
        .pipe(postcss([cssimport,cssvariables({preserve:true}),postcssdiscarddublicates,postcssclean]))
        .pipe(gulp.dest('out/styles'));
});

gulp.task('watch_dev_css', ['postcss'], function() {
    return watch('styles/*.css', function(event) {
        console.log("update postcss");
        return gulp.start('postcss');
    });
});