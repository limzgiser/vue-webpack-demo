// 公共的一些配置
const path = require('path');
// 引入自动生成 html 的插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'js/bundle.js',
    },

    module: {
        rules: [{
                test: /\.css$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../',
                        },
                    },
                    'css-loader',
                ],
            },
            {
                test: /\.less$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../',
                        },
                    },
                    'css-loader',
                    'less-loader',
                ],
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8 * 1024,
                        name: '[name].[ext]',
                        publicPath: '../images/',
                        outputPath: 'images/',
                    },
                }, ],
            },

            {
                test: /\.js$/,

                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                },
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({ template: './index.html' }),
        new MiniCssExtractPlugin({
            filename: 'css/index.css',
        }),
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
    ],
    resolve: {
        alias: {
            vue$: 'vue/dist/vue.esm.js', // 'vue/dist/vue.common.js' for webpack 1
        },
    },
};