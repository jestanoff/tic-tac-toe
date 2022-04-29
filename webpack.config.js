const path = require('path');
const fs = require('fs');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

const dist = path.resolve(__dirname, './docs');
const dirSrc = path.resolve(__dirname, './src');

if (!fs.existsSync(dist)) {
  fs.mkdirSync(dist);
}

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: dist,
    publicPath: '',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    modules: ['src', 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: 'ts-loader',
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'source-map-loader',
      },
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: 'css-modules-typescript-loader',
            options: {
              mode: 'emit',
            },
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: { localIdentName: '[name]__[local]___[hash:base64:5]' },
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: { sourceMap: true },
          },
        ],
      },
      {
        test: /\.woff2(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '/css/[name].[ext]',
              limit: 10000,
              mimetype: 'application/font-woff2',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: path.join(dirSrc, 'index.html'), to: dist }],
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new webpack.DefinePlugin({
      'process.env.VERSION': JSON.stringify(process.env.npm_package_version),
    }),
  ],
  devtool: 'source-map',
  context: __dirname,
  target: 'web',
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    compress: true,
    historyApiFallback: true,
    hot: true,
    https: false,
    port: 3000,
    disableHostCheck: true,
    stats: {
      children: false,
      chunkModules: false,
      chunks: false,
      colors: true,
      hash: true,
      timings: true,
      version: true,
    },
  },
};
