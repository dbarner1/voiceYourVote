module.exports = {
  entry: './src/index.js',
  
  output: {
    path: "build",
    filename: "bundle.js"
  },
  
  module: {
    loaders: [
    //    JS
      {
        loaders: ['react-hot', 'babel-loader'],
        test: /\.js$/,
        exclude: /node_modules/
      },
    //    CSS
      {
        loader: 'style-loader!css-loader',
        test: /\.css$/
      }
    ]
  }
};