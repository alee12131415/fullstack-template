import { fileURLToPath } from "url";
import path, { dirname } from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import("webpack").Configuration} */
export default {
    entry: "./src/App.tsx",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        // publicPath: "/public",
    },
    devtool: "eval-source-map",
    module: {
        rules: [
            {
                test: /\.[tj]sx?$/,
                use: ["swc-loader"],
            },
            {
                test: /\.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                            modules: {
                                namedExport: false
                            }
                        },
                    },
                    "sass-loader",
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "web",
            filename: "./index.html",
            template: "./src/index.html",
        }),
        new MiniCssExtractPlugin(),
    ],
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        alias: {
            "@components": path.resolve(__dirname, "src/components"),
            "@providers": path.resolve(__dirname, "src/providers"),
        },
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, "public"),
        },
        compress: true,
        port: 8000,
        devMiddleware: {
            writeToDisk: true,
        },
        proxy: [
            {
                context: ["/api"],
                target: "http://localhost:3000"
            }
        ]
    },
};
