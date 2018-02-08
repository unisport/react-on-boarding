/**
 *
 *
 */
var path = require('path'),
    webpack = require('webpack');

module.exports = {
    entry: {
        hellokitty: path.join(__dirname, '/src/hellokitty.js'),
        hello: path.join(__dirname, '/src/hello.js'),
        container: path.join(__dirname, '/src/container.js'),
        kittyswitcher: path.join(__dirname, '/src/KittySwitcher.js'),
        bindeventcontainer: path.join(__dirname, '/src/BindEventContainer.js'),
        domcontainer: path.join(__dirname, '/src/DOMContainer.js'),
        campaigncontainer: path.join(__dirname, '/src/CampaignContainer.js'),
        asynccontainer: path.join(__dirname, '/src/AsyncContainer.js'),
        basicredux: path.join(__dirname, '/src/Basicredux.js')
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
