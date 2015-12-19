module.exports = {
  entry: './main.js',
  output: {
    path: './',
    filename: 'dist/index.js'
  },
  devServer: {
    inline: true,
    port: 3001
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react'],
        plugins: ['transform-object-rest-spread']
      }
    }]
  }
};
