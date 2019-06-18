const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BaseHrefWebpackPlugin } = require('base-href-webpack-plugin');
const webpack = require('webpack');
const dotenv  = require('dotenv');

dotenv.config();

module.exports = {
    mode: "development",

    entry: "./src/index.ts",
    output: {
        filename: "bundle.js",
        path: __dirname + "/../build"
    },

    watch: true,

    devServer: {
        hot: true,
        contentBase: path.join(__dirname, '/../build'),
        compress: true,
        port: process.env["WEBPACK_DEVSERVER_PORT"],
        host: process.env["WEBPACK_DEVSERVER_HOST"],
        historyApiFallback: {
            rewrites: [
                { from: /.*/, to: '/index.html' },
            ]
        }
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },

            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin(),
        new BaseHrefWebpackPlugin({ baseHref: '/' }),
        new webpack.EnvironmentPlugin(['GOOGLE_API_KEY']),
    ],
};