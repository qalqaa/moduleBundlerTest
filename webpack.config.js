const path = require("path");
const BundleAnalyzer = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  entry: {
    index: "./src/index.js",
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [new BundleAnalyzer()],
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 9000,
  },
};
