'use strict';

var path = require('path')

var CopyWebpackPlugin = require('copy-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

function jadeLoader() {
  var qs = require('querystring')
  var options = {}

  if (process.env.NODE_ENV === 'production') {
    options.env = 'production'
  }

  return {
    test: /\.jade$/,
    include: /templates\/views/,
    loader: 'file?name=[name].html!jade-html?' + qs.stringify(options)
  }
}

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './index',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    loaders: [
      jadeLoader(),
      {
        test: /\.scss$/,
        include: /styles/,
        loader: ExtractTextPlugin.extract(
          'style',
          'css?sourceMap!postcss!sass?sourceMap'
        )
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jade', '.scss']
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    inline: true
  },
  postcss: [
    require('postcss-font-magician'),
    require('autoprefixer')({
      browsers: ['last 2 versions']
    })
  ],
  plugins: [
    new CopyWebpackPlugin([
      { from: 'CNAME' }
    ]),
    new ExtractTextPlugin('styles.css')
  ]
}
