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
            // In `server` mode analyzer will start HTTP server to show bundle report.
            // In `static` mode single HTML file with bundle report will be generated.
            // In `disabled` mode you can use this plugin to just generate Webpack Stats JSON file by setting `generateStatsFile` to `true`.
            analyzerMode: 'server',
            // Host that will be used in `server` mode to start HTTP server.
            analyzerHost: '127.0.0.1',
            // Port that will be used in `server` mode to start HTTP server.
            analyzerPort: 8888,
            // Path to bundle report file that will be generated in `static` mode.
            // Relative to bundles output directory.
            reportFilename: 'report.html',
            // Module sizes to show in report by default.
            // Should be one of `stat`, `parsed` or `gzip`.
            // See "Definitions" section for more information.
            defaultSizes: 'parsed',
            // Automatically open report in default browser
            openAnalyzer: true,
            // If `true`, Webpack Stats JSON file will be generated in bundles output directory
            generateStatsFile: false,
            // Name of Webpack Stats JSON file that will be generated if `generateStatsFile` is `true`.
            // Relative to bundles output directory.
            statsFilename: 'stats.json',
            // Options for `stats.toJson()` method.
            // For example you can exclude sources of your modules from stats file with `source: false` option.
            // See more options here: https://github.com/webpack/webpack/blob/webpack-1/lib/Stats.js#L21
            statsOptions: null,
            // Log level. Can be 'info', 'warn', 'error' or 'silent'.
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
