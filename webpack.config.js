const path = require('path');
module.exports = {
  mode: 'production',
  entry: path.join(__dirname, "cjs", 'dev', 'index.js'),
  watch: false,
  output: {
    path: path.join(__dirname, "cjs", 'prod'),
    filename: "index.js",
    libraryTarget: 'commonjs2',
    library: 'library'
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
    'prop-types': 'commonjs prop-types',
  },
  plugins: [],
  resolve: {
    extensions: ['.json', '.js', '.jsx']
  },
  // devtool: 'cheap-module-source-map',
  devtool: 'source-map'
};