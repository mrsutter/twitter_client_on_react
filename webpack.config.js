/*
 * Webpack development server configuration
 *
 * This file is set up for serving the webpak-dev-server, which will watch for changes and recompile as required if
 * the subfolder /webpack-dev-server/ is visited. Visiting the root will not automatically reload.
 */

'use strict';
var path = require("path");

module.exports = {

  output: {
    filename: 'main.js',
    publicPath: '/assets/',
    path: path.join(__dirname, "dist/assets/")
  },

  cache: true,
  debug: true,
  devtool: false,
  entry: './src/scripts/components/main.jsx',

  stats: {
    colors: true,
    reasons: true
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: [
      "src", "node_modules", "bower_components"
    ]
  },

  module: {
    preLoaders: [{
      test: '\\.js$',
      exclude: 'node_modules',
      loader: 'jshint'
    }],

    loaders: [{
      test: /\.jsx$/,
      loader: 'jsx-loader?harmony'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.(svg|woff|eot|ttf|otf)$/,
      loader: "url?limit=100000"
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=8192'
    }]
  }

};
