const path = require('path');

module.exports = {
  entry: './src/index.js', // Main file
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js', // Output bundle
  },
  module: {
    rules: [
      {
        test: /\.js$/,          // For JS files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  devServer: {
    static: './dist',
    port: 3000,
  },
  mode: 'development',
};
