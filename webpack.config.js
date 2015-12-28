module.exports = {
  context: __dirname + "/client",
  entry: './main.js',
  output: {
    path: './',
    filename: '/dist/index.js'
  },
  devServer: {
    contentBase: "./client",
    inline: true,
    port: 3001
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules|server)/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react'],
        plugins: ['transform-object-rest-spread']
      }
    }]
  }
};
