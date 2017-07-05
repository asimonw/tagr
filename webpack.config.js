const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    './public/src/index.js',
    'webpack-dev-server/client?http://localhost:8080'
  ],
  output: {
    filename: './public/dist/bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'public')
    // publicPath: path.join(__dirname, 'public/dist')
  },
  module: {
    loaders: [
      // {
      //   test: /\.scss$/,
      //   loaders: ['style-loader', 'css-loader', 'sass-loader']
      // },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/roboto/[name].[ext]',
          outputPath: 'public/',
          // remove 'public' from publicPath
          publicPath: function (url) { return url.substr(6) }
          // useRelativePath: true
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('public/dist/main.css')
  ]
}
