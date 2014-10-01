var gulp = require('gulp');
var webpack = require('gulp-webpack');
var webpackConfig = require ('./webpack.config.js');

gulp.task('default', function() {
  return gulp.src('src/entry.js')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('assets/'));
});