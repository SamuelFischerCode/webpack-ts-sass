
const path = require('path');

module.exports = {
    entry: './src/imports.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        port: process.env.PORT || 8080,
    },
};