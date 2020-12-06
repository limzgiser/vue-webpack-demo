 const path = require('path');
 const HtmlWebpackPlugin = require('html-webpack-plugin');
 const MiniCssExtractPlugin = require('mini-css-extract-plugin');
 const { CleanWebpackPlugin } = require('clean-webpack-plugin');
 const VueLoaderPlugin = require('vue-loader/lib/plugin');
 const ProgressBarPlugin = require('progress-bar-webpack-plugin');
 const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
 //  var Dashboard = require('webpack-dashboard');
 //  var DashboardPlugin = require('webpack-dashboard/plugin');
 //  var dashboard = new Dashboard();
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
                         esModule: false,
                         limit: 8 * 1024,
                         name: '[name].[ext]',
                         publicPath: '../assets/images/',
                         outputPath: 'assets/images',
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
                     publicPath: '../assets/fonts/',
                     outputPath: 'assets/fonts',
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
         //  new DashboardPlugin(dashboard.setData),
         //  new BundleAnalyzerPlugin(),
         new ProgressBarPlugin()
     ],
     resolve: {
         alias: {
             vue$: 'vue/dist/vue.esm.js',
            '@':path. resolve('src')
         },
     },
 };