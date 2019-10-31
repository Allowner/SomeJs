const path = require("path");

module.exports = {
    devtool: 'source-map',
    entry: './src/script.js',
    devServer: {
        contentBase: path.resolve(__dirname, 'src'),
        port: 3000
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/build/',
        libraryTarget: 'var',
        library: 'EntryPoint'
    },
    module: {
        rules: [
            {
                test: /\.js/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    "@babel/env",
                                    {
                                        targets: {
                                            chrome: "67"
                                        }
                                    },
                                ],
                            ]
                        }
                    }
                ]
            }
        ]
    }
}