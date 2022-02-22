const path = require('path');
module.exports = {
  mode: 'production',
  entry: path.join(__dirname, "dist", 'index.js'),
  watch: false,
  output: {
    path: path.join(__dirname, "cjs"),
    filename: "index.js",
    // commonjs/2 暴露给commonjs模块  amd 暴露给amd模块。umd 暴露给所有模块
    // commonjs和commonjs2几乎相同，只不过commonjs只包含exports，而commonjs2还包含module.exports，所以直接使用commonjs2即可
    libraryTarget: 'umd',
    // libraryExport: "default",// 只导出 default
    library: 'PropsValidator' // amd umd 需要指定 值为你的库的名称 会
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /(node_modules|bower_components|build)/,
      use: {
        loader: "babel-loader",
      },
    },]
  },
  externals: {
    'prop-types': 'commonjs2 prop-types', // 源码中 commonjs 方式 加载prop-types。 打包后 不会包含prop-types 源码
  },
  plugins: [],
  resolve: {
    extensions: ['.json', '.js', '.jsx']
  },
  // devtool: 'cheap-module-source-map',
};