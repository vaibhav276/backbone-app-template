const { resolve } = require('path');

const PUBLIC_PATH = resolve(__dirname, 'public');
const SRC_PATH = resolve(__dirname, 'src');

module.exports = {
    entry: `${SRC_PATH}/index.js`,
    output: {
        filename: 'bundle.js',
        path: PUBLIC_PATH
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/
            },
            {
                test: /\.tmpl$/, // our own extension to recognize templates
                loader: 'raw-loader' // because we'll use our own template engine
            }
        ]
    },
    devServer: {
        contentBase: PUBLIC_PATH
    }
};
