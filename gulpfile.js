var gulp = require('gulp');
var webpack = require('webpack');
var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require ('./webpack.config.js');
var gutil = require("gulp-util");

gulp.task('default', function() {
  return gulp.src('src/entry.js')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('assets/'));
});

gulp.task("webpack-dev-server", function(callback) {
    // Start a webpack-dev-server
    var compiler = webpack({
        // configuration
    });

    var myConfig = Object.create(webpackConfig);

    new WebpackDevServer(webpack(myConfig), {
        publicPath: "/" + myConfig.output.publicPath
        // server and middleware options
    }).listen(8080, "localhost", function(err) {
        console.info(err, "-------------------------");
        if(err) throw new gutil.PluginError("webpack-dev-server", err);
        // Server listening
        gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");

        // keep the server alive or continue?
        // callback();
    });
});