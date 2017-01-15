module.exports = {
  entry: './src/index.js',
  output: {
    path: './dist',
    filename: 'bundle.js'
  },
   module: {
      loaders: [
                {
                    test: /\.js$/,   //regExp,
                    loader: 'babel',
                    query: {
                        presets: [ 'es2015' ]
                    }
                }
            ]
    }

};
