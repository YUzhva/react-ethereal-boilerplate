/* eslint-disable */
var webpack = require('webpack');
var merge = require('webpack-merge');

var common = require('./common.config.js');
/* eslint-enable */

module.exports = merge(common, {
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true, // minimize CSS
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],
});
