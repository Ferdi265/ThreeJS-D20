const path = require('path');

const K = 1024;
const M = 1024 * K;

module.exports = {
    mode: 'production',
    devtool: 'source-map',

    performance: {
        maxEntrypointSize: 1 * M,
        maxAssetSize: 1 * M
    },

    entry: path.resolve(__dirname, 'src/main.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};
