import path from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import fs from 'fs';

if (!fs.existsSync('./build')) {
    fs.mkdirSync('./build');
}
const dirBuild = path.resolve(__dirname, './build');
const dirSrc = path.resolve(__dirname, './src');

export default {
    entry: {
        app: [path.resolve(__dirname, './src/app.js')],
    },
    output: {
        path: dirBuild,
        filename: 'app.bundle.js',
    },
    devServer: {
        contentBase: dirBuild,
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: ['babel-loader', 'eslint-loader'] },
        ],
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: path.join(dirSrc, 'index.html') },
        ]),
    ],
    stats: {
        colors: true,
    },
    devtool: 'source-map',
    context: __dirname,
};
