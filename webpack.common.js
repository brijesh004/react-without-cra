const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "/src/index.tsx"),

  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
  },

  resolve: {
    extensions: [".tsx",".ts",".jsx", ".js"],
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: path.join(__dirname, "/src/index.html"),
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(ts|js)x$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },    
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.png$/,
        type: "asset/resource",
      },
      {
        test: /\.svg$/,
        use: "url-loader",
      },
    ],
  },
};
