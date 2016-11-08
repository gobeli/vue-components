module.exports = {
  entry: './src/main.js',

  output: {
    path: './dist',
    publicPath: "/dist/",
    filename: 'bundle.js'
  },
	devServer: {
		inline: true,
		contentBase: './',
		port: 3000
	},
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test:  /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test:  /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  },
  vue: {
    loaders: {
      js: 'babel',
      scss: 'style-loader!css-loader!sass-loader'
    }
  },
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },
  resolve: {
    alias: {vue: 'vue/dist/vue.js'}
  }
}
