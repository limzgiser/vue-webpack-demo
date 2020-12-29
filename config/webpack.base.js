const path = require("path");
const packagejson = require("../package.json");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
//  var Dashboard = require('webpack-dashboard');
//  var DashboardPlugin = require('webpack-dashboard/plugin');
//  var dashboard = new Dashboard();
module.exports = {
  entry: {
    main: "./src/main.js",
   // vendor: Object.keys(packagejson.dependencies),
  },
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "js/[name].[hash].js",
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../",
            },
          },
          "css-loader",
        ],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../",
            },
          },
          "css-loader",
          "less-loader",
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../",
            },
          },
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              esModule: false,
              limit: 8 * 1024,
              name: "[name].[ext]",
              publicPath: "../assets/images/",
              outputPath: "assets/images",
            },
          },
        ],
      },

      {
        test: /\.js$/,

        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          publicPath: "../assets/fonts/",
          outputPath: "assets/fonts",
        },
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({ template: "./index.html" }),
    new MiniCssExtractPlugin({
      filename: "css/index.css",
    }),
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    // new DashboardPlugin(dashboard.setData),
    // new BundleAnalyzerPlugin(),
    new ProgressBarPlugin(),
  ],
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js",
      "@": path.resolve("src"),
    },
  },
  optimization: {
    // 配置代码分割
    splitChunks: {
      // 要分割哪些模块：all（推荐）, async(默认，只分隔异步代码), and initial
      chunks: 'all'
    }
  }
};
