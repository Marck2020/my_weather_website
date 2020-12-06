const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require('dotenv-webpack');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devServer: {
        inline: false,
        contentBase: '/dist',
    },
    devtool: 'inline-source-map',
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "../index.html"
        }),
        new MiniCssExtractPlugin({
            filename:"[name].css",
            chunkFilename:"[id].css"
        }),
        new Dotenv()
    ],
    output: {
        filename:'bundle.js',
        path:path.resolve(__dirname, './dist/')
    },
    module:{
        rules: [
            {
                
                test:/\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use:[
                    {
                        loader:'file-loader',
                        options: {
                            name:'[name].[ext]',
                            outputPath:'font/'
                        }
                    }
                ]
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true, //webpack@1.x
                            disable: true, //webpack@2.x and never
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpg|gif|jfif)$/i,
                use: [
                    {
                        loader:'url-loader',
                        options: {
                            limits:8192,
                        }
                    }
                ]
            },
            {
                test:/\.css$/,
                use :[
                    MiniCssExtractPlugin.loader,"css-loader",
                ]
            }
        ],
    },
    node: {
        fs: 'empty'
      },
};