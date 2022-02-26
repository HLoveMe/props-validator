const path = require('path');
const TerserPlugin = require('terser-webpack-plugin')
module.exports = {
  mode: 'production',
  entry: {
    'index': path.join(__dirname, "dist", 'index.js'),
    'index.min': path.join(__dirname, "dist", 'index.js'),
  },
  watch: false,
  output: {
    // path: path.join(__dirname, "props-test-vue", 'node_modules', 'props-validator', 'cjs'),
    // path: path.join(__dirname, "props-test-react", 'node_modules', 'props-validator', 'cjs'),
    path: path.join(__dirname, "cjs"),
    filename: "[name].js",
    libraryTarget: 'umd',
    library: 'PropsValidator'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /(node_modules|bower_components|build)/,
      use: {
        loader: "babel-loader",
        options: {
          "plugins": [
            ["@babel/plugin-proposal-optional-chaining"],
          ],
          presets: ["@babel/preset-env"]
        }
      },
    },]
  },
  externals: {
    commonjs: 'prop-types',
    commonjs2: 'prop-types'
    // 源码中 commonjs 方式 加载prop-types。 打包后 不会包含prop-types 源码
  },
  plugins: [],
  resolve: {
    extensions: ['.json', '.js', '.jsx']
  },
  devtool: 'cheap-module-source-map',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        include: /\.min\.js/
      })
    ]
  }
};