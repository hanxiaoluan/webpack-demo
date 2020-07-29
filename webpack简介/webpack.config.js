module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
  },
  mode: 'development',
  devServer: {
    port: 3000,
    publicPath: '/dist',
  },
};
