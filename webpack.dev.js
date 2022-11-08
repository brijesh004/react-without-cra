const ReactRefreshWebPackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map",
  devServer: {
    hot: true,
  },
  plugins: [new ReactRefreshWebPackPlugin()],
};
