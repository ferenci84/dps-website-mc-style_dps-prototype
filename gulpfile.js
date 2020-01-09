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
var runSequence = require('run-sequence');

gulp.task('postcss', function() {
    return gulp.src(['styles/*.css'])
        .pipe(postcss([cssimport,cssvariables({preserve:true}),postcssdiscarddublicates,postcssclean]))
        .pipe(gulp.dest('out-styles'))
        .pipe(gulp.dest('../DPSWebsite/web/styles'))
});

gulp.task('copy_original_styles', function() {
    return gulp.src(['styles/*.css','styles/*.less','styles/*.scss','styles/*.css.map'])
        .pipe(gulp.dest('../DPSWebsite/web/styles-dev'))
});

gulp.task('process_css', function(cb){
    runSequence(['postcss','copy_original_styles'],function() {
        cb();
    })
});
