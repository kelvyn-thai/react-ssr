const path = require("path");
const { NODE_ENV = "development" } = process.env;
const nodeExternal = require("webpack-node-externals");

module.exports = {
  entry: {
    filename: "./server/index.ts"
  },
  mode: NODE_ENV,
  target: "node",
  output: {
    filename: "server.bundle.js"
  },
  resolve: {
    extensions: [".ts", ".tsx"]
  },
  module: {
    rules: [{ test: /\.ts(x)?$/, use: "ts-loader" }]
  },
  externals: [nodeExternal()]
};
