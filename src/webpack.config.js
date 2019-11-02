const path = require("path");
const {
    CleanWebpackPlugin
} = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const scriptExt = require("script-ext-html-webpack-plugin");
const FontConfigWebpackPlugin = require('font-config-webpack-plugin');
module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.resolve(process.cwd(), "./dist"),
        filename: "main.[hash].js"
    },
    resolve: {
        extensions: [".js"]
    },
    mode: "development",
    devtool: "source-map",
    module: {
        rules: [{
                test: /\.css$/,
                use: {
                     loader: ["style-loader",
                    "css-loader"]
        }
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: {
                    loader : "file-loader"
            }
            },
            {
                test: /\.less$/,
                use: {
                    loader :'less-loader'
                } // compiles Less to CSS
            },
            {
                test: /\.(ttf|eot|woff|svg|woff2)$/,
                use: {
                     loader: "file-loader",
                     options : {
                         name : "./fonts//18057.ttf"
                     }
                }
            }

        ]
    }
}

