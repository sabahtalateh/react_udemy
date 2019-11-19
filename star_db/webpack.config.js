const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',
    entry: {
        bundle: './src/index.tsx'
    },
    output: {
        filename: '[name].js',
        publicPath: '/assets/',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [ { loader: 'ts-loader' } ]
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader'
            }
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: 'main-[hash:8].css'
        })
    ],
    // externals: {
    //     'react': 'React',
    //     'react-dom': 'ReactDOM'
    // },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        writeToDisk: false,
        hot: true,
        overlay: true,
        historyApiFallback: true,
    },
    devtool: 'source-map',
}