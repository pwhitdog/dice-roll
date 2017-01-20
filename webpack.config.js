var path = require('path');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var webpack = require('webpack');

var src = path.resolve(__dirname, "react/src/index.jsx");
var scss = path.resolve(__dirname, "./react/scss");
var lib = path.resolve(__dirname, "public/lib");

var config = {
    entry: [src, scss],
    output: {
        path: lib,
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.scss']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader?sourceMap", "sass-loader?sourceMap"]
            }]
    },
    sassLoader: {
        includePaths: [ scss ]
    },
    plugins: [new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
    }),
        new BrowserSyncPlugin({
        host: 'localhost',
        port: 3001,
        proxy: 'http://localhost:3000'
    })]
};

module.exports = config;