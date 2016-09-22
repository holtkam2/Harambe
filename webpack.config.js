
module.exports = {
  entry: "./client/components/app.jsx",

  output: {
    path:  __dirname + './dist',
    filename: "bundle.js"

  },

  module: {
    loaders: [
    {test: /\.jsx?$/, exclude: /(node_modules|bower_components)/,loader: 'babel'}
    ]
  }
}




