'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync').create();

var env = {
  development: $.environments.development(),
  production: $.environments.production()
}

gulp.task('jade', function() {
  return gulp.src('./src/templates/views/**/*.jade')
    .pipe($.jade({ locals: { env: env } }))
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.stream());
});

gulp.task('stylesheets', function() {
  return gulp.src('./src/stylesheets/index.scss')
    .pipe(
      $.sass({
        includePaths: [
          './node_modules/normalize.css',
          './node_modules/breakpoint-sass/stylesheets'
        ]
      })
      .on('error', $.sass.logError)
    )
    .pipe($.postcss([
      require('autoprefixer'),
      require('postcss-font-magician')()
    ]))
    .pipe(gulp.dest('./dist/stylesheets'))
    .pipe(browserSync.stream());
});

gulp.task('cname', function() {
  return gulp.src('./src/CNAME')
    .pipe(gulp.dest('./dist'))
});

gulp.task('build', ['jade', 'stylesheets', 'cname']);

gulp.task('serve', ['jade', 'stylesheets'], function() {
  browserSync.init({
    server: './dist',
    port: 8000,
    ui: {
      port: 8001
    }
  });

  gulp.watch('./src/stylesheets/**/*.scss', ['stylesheets']);
  gulp.watch('./src/templates/**/*.jade', ['jade']);
});

gulp.task('default', ['serve']);
