var gulp = require('gulp');
var gulpWebpack = require('gulp-webpack');
var webpack = require('webpack');
var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require ('./webpack.config.js');
var gutil = require("gulp-util");

gulp.task('default', ['build-dev']);

gulp.task('build-dev', function() {
  gulp.src('src/entry.js')
    .pipe(gulpWebpack(webpackConfig))
    .pipe(gulp.dest('assets/'));
  gulp.src(['src/index.html', 'src/favicon.ico'])
    .pipe(gulp.dest('assets/'));
});

gulp.task("webpack-dev-server", function(callback) {
    var myConfig = Object.create(webpackConfig);

    new WebpackDevServer(webpack(myConfig), {
        publicPath: '/' + myConfig.output.publicPath
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
