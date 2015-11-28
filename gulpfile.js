'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('jade', function() {
  return gulp.src('./src/templates/views/**/*.jade')
    .pipe($.jade())
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['jade']);
