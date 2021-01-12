const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const NODE_ENV = process.env.NODE_ENV;
module.exports = {
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
  },
  mode: NODE_ENV ? NODE_ENV : "development",
  entry: path.resolve(__dirname, "widget/index.ts"),
  output: {
    path: path.resolve(__dirname, "extension"),
    filename: "widget.js",
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: "file-loader",
        options: {
          outputPath: "images",
        },
      },
      {
        test: /\.[tj]sx?$/,
        exclude: [/node_modules/],
        use: ["ts-loader"],
      },

      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-modules-typescript-loader?modules",
          {
            loader: "css-loader",
            options: {
              modules: {
                mode: "local",
                localIdentName: "[name]__[local]__[hash:base64:5]",
                auto: /\.module\.\w+$/i,
              },
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
};
