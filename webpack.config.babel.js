import path from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import fs from 'fs';

const dirBuild = path.resolve(__dirname, './build');
const dirSrc = path.resolve(__dirname, './src');

if (!fs.existsSync(dirBuild)) {
    fs.mkdirSync(dirBuild);
}

export default {
    entry: {
        app: [path.resolve(__dirname, './src/app.js')],
    },
    output: {
        path: dirBuild,
        filename: '[name].bundle.js',
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
            // CSS
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract([
                    'css-loader?sourceMap&-minimize&modules',
                    'importLoaders=1',
                    'localIdentName=[name]__[local]___[hash:base64:5]',
                ].join('&')),
            },
            // Fonts
            /* eslint-disable */
            {
                test: /\.woff(\?.*)?$/,
                loader: 'url-loader?name=/fonts/[name].[ext]&limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.woff2(\?.*)?$/,
                loader: 'url-loader?name=/fonts/[name].[ext]&limit=10000&mimetype=application/font-woff2'
            },
            {
                test: /\.ttf(\?.*)?$/,
                loader: 'url-loader?name=/fonts/[name].[ext]&limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.eot(\?.*)?$/,
                loader: 'url-loader?name=/fonts/[name].[ext]&limit=10000&mimetype=application/font-otf'
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
        new ExtractTextPlugin('./styles/styles.css'),
    ],
    stats: {
        colors: true,
    },
    devtool: 'source-map',
    context: __dirname,
};
