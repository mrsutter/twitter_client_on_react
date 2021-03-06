'use strict';

var gulp = require('gulp');
var gulpWebpack = require('gulp-webpack');
var webpack = require('webpack');
var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require ('./webpack.config.js');
var gutil = require("gulp-util");
var del = require('del');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('default', ['develop']);

gulp.task('develop', ['build-dev', 'watch', 'serve']);

gulp.task('build-dev', function() {
  gulpWebpack(webpackConfig)
    .pipe(gulp.dest('dist/assets/'));
  gulp.src(['src/index.html', 'src/favicon.ico'])
    .pipe(gulp.dest('dist/'));
});

gulp.task('watch', function () {
  gulp.watch(['src/index.html', 'src/scripts/**/*', 'src/styles/**/*'], ['build-dev']);
});

gulp.task('clean', function (cb) {
  del(['dist/**/*'], cb);
});

gulp.task("webpack-dev-server", function(callback) {
    var myConfig = Object.create(webpackConfig);

    new WebpackDevServer(webpack(myConfig), {
        publicPath: myConfig.output.publicPath,
        contentBase: 'dist'
        // server and middleware options
    }).listen(8080, "0.0.0.0", function(err) {
        console.info(err, "-------------------------");
        if(err) throw new gutil.PluginError("webpack-dev-server", err);
        // Server listening
        gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");

        // keep the server alive or continue?
        // callback();
    });
});

// watch files for changes and reload
gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: 'dist'
    },
    port: 8080
  });

  gulp.watch(['index.html', 'assets/main.js'], {cwd: 'dist'}, reload);
});
