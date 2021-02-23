const path = require("path");

const config = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "webpack.bundle.js",
  },
  module: {
    rules: [{ test: /\.js$/, loader: "ignore-console-log-loader" }],
    // rules: [{ test: /\.js$/, use: ["ignore-console-log-loader.js"] }],
  },
  resolveLoader: {//解析自定loader
    //   指定自定义loader的位置目录
    modules: ["node_modules", path.resolve(__dirname, "loaders")],
  },
};

module.exports = config;
