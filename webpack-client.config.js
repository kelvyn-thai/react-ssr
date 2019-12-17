module.exports = {
  entry: {
    filename: "./src/index.tsx"
  },
  output: {
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
      { test: /\.ts(x)?$/, use: "ts-loader", exclude: /node_modules/ }
    ]
  },
  mode: "development",
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx"]
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM"
  }
};
