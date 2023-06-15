const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

let plugins = [
  new MiniCssExtractPlugin({
    filename: '[name].css',
    // filename: '[name].[contenthash].css',
  }),
  new HtmlWebpackPlugin({
    template: './src/index.html',
  }),
]

if (process.env.SERVE) {
  plugins.push(new ReactRefreshWebpackPlugin());
}

const conf = {
  mode: 'development',
  plugins,
  target: 'browserslist',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/[hash][ext][query]',
    clean: true,
  },

  devServer: {
    static: './dist',
    open: true,
    hot: true
  },
  module: {
    rules: [
      { 
        test: /\.(html)$/,
        use: ['html-loader'] 
      },
      {
        test: /^((?!\.module).)*css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /\.module\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]__[sha1:hash:hex:7]'
              }
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
    ],
  },
}

module.exports = (env, options) => {
  let isProd = options.mode === 'production'
  conf.mode = isProd ? 'production' : 'development'
  conf.devtool = isProd ? false : 'source-map'

  return conf
}