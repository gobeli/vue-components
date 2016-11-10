var ExtractTextPlugin = require("extract-text-webpack-plugin");
let extractCSS = new ExtractTextPlugin('styles.css');

module.exports = {
  entry: './docs/src/main.js',

  output: {
    path: './docs/dist',
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
        loader: 'babel!eslint',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test:  /\.scss$/,
        loader: extractCSS.extract('style-loader', 'css-loader!sass-loader')
      },
      {
        test:  /\.css$/,
        loader: extractCSS.extract('style-loader', 'css-loader')
      }
    ]
  },
  vue: {
    loaders: {
      js: 'babel!eslint',
      scss: 'style-loader!css-loader!sass-loader'
    }
  },
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },
  resolve: {
    alias: {vue: 'vue/dist/vue.js'}
  },
  plugins: [
    extractCSS
  ]
}
