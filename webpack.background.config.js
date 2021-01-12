const path = require("path");
const NODE_ENV = process.env.NODE_ENV;
module.exports = {
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
  },
  mode: NODE_ENV ? NODE_ENV : "development",
  entry: path.resolve(__dirname, "background/index.ts"),
  output: {
    path: path.resolve(__dirname, "extension"),
    filename: "background.js",
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        exclude: [/node_modules/],
        use: ["ts-loader"],
      },
    ],
  },
};
