const path = require('path');
const fs = require('fs');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const dist = path.resolve(__dirname, './docs');
const dirSrc = path.resolve(__dirname, './src');

if (!fs.existsSync(dist)) {
  fs.mkdirSync(dist);
}

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: dist,
    publicPath: '',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(t|j)s$/,
        include: [path.resolve(__dirname, 'src')],
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
        test: /\.woff(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '/fonts/[name].[ext]',
              limit: 10000,
              mimetype: 'application/font-woff',
            },
          },
        ],
      },
      {
        test: /\.woff2(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '/fonts/[name].[ext]',
              limit: 10000,
              mimetype: 'application/font-woff2',
            },
          },
        ],
      },
      {
        test: /\.ttf(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '/fonts/[name].[ext]',
              limit: 10000,
              mimetype: 'application/octet-stream',
            },
          },
        ],
      },
      {
        test: /\.eot(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '/fonts/[name].[ext]',
              limit: 10000,
              mimetype: 'application/font-otf',
            },
          },
        ],
      },
      {
        test: /\.svg([?#].*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '/fonts/[name].[ext]',
              limit: 10000,
              mimetype: 'image/svg+xml',
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
  ],
  devtool: 'source-map',
  context: __dirname,
  target: 'web',
  stats: {
    children: false,
    chunkModules: false,
    chunks: false,
    colors: true,
    hash: true,
    timings: true,
    version: false,
  },
  devServer: {
    contentBase: path.join(__dirname, 'src'), // boolean | string | array, static file location
    compress: true, // enable gzip compression
    historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
    https: false, // true for self-signed, object for cert authority
    public: '0.0.0.0',
    disableHostCheck: true,
    stats: {
      children: false,
      chunkModules: false,
      chunks: false,
      colors: true,
      hash: true,
      timings: true,
      version: false,
    },
  },
  // Ignore these as required by Enzyme http://airbnb.io/enzyme/docs/guides/webpack.html
  externals: {
    cheerio: 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
};
