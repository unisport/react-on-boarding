/**
 *
 *
 */
var path = require('path'),
    webpack = require('webpack');

module.exports = {
    entry: {
        hellokitty: path.join(__dirname, '/src/hellokitty.js')
    },
    output: {
        path: path.join(__dirname, '/dist/js/'),
        filename: '[name].js'
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react', 'stage-2']
            }
        }]
    }
};
