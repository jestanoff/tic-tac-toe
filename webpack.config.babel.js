import path from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import fs from 'fs';

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const dirBuild = path.resolve(__dirname, './build');
const dirSrc = path.resolve(__dirname, './src');

if (!fs.existsSync(dirBuild)) {
    fs.mkdirSync(dirBuild);
}

export default {
    entry: {
        app: [path.join(dirSrc, 'app.js')],
        fireworks: [path.join(dirSrc, './js/helpers/fireworks.js')],
    },
    output: {
        path: dirBuild,
        filename: './js/[name].bundle.js',
    },
    module: {
        rules: [
            // JavaScript
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: [
                    'babel-loader?presets[]=es2015,presets[]=react,presets[]=stage-2,plugins[]=transform-runtime,plugins[]=transform-class-properties,plugins[]=transform-export-extensions', // eslint-disable-line
                    'eslint-loader',
                ],
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            query: {
                                sourceMap: true,
                                minimize: true,
                                modules: true,
                                importLoaders: 1,
                                localIdentName: '[name]__[local]___[hash:base64:5]',
                            },
                        },
                        { loader: 'postcss-loader' },
                    ],
                }),
            },
            // Fonts
            /* eslint-disable max-len */
            {
                test: /\.woff(\?.*)?$/,
                loader: 'url-loader?name=/fonts/[name].[ext]&limit=10000&mimetype=application/font-woff',
            },
            {
                test: /\.woff2(\?.*)?$/,
                loader: 'url-loader?name=/fonts/[name].[ext]&limit=10000&mimetype=application/font-woff2',
            },
            {
                test: /\.ttf(\?.*)?$/,
                loader: 'url-loader?name=/fonts/[name].[ext]&limit=10000&mimetype=application/octet-stream',
            },
            {
                test: /\.eot(\?.*)?$/,
                loader: 'url-loader?name=/fonts/[name].[ext]&limit=10000&mimetype=application/font-otf',
            }, /* eslint-enable */
            {
                test: /\.svg([?#].*)?$/,
                loader: 'url-loader?name=/fonts/[name].[ext]&limit=10000&mimetype=image/svg+xml',
            },
        ],
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: path.join(dirSrc, 'index.html'), to: dirBuild },
        ]),
        new ExtractTextPlugin({
            filename: './styles/styles.css',
            allChunks: false,
            ignoreOrder: true,
        }),
        new BundleAnalyzerPlugin({
            // Can be `server`, `static` or `disabled`.
            analyzerMode: 'static',
            analyzerHost: 'localhost',
            analyzerPort: 8888,
            reportFilename: 'report.html',
            defaultSizes: 'parsed',
            openAnalyzer: false,
            generateStatsFile: false,
            statsOptions: null,
            logLevel: 'info',
        }),
    ],
    devtool: 'source-map',
    context: __dirname,
    devServer: {
        stats: {
            colors: true,
            version: false,
            hash: true,
            timings: true,
            chunks: false,
            chunkModules: false,
            children: false,
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
