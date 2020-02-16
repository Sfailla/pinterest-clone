const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		app: './src/app.js'
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'app.bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: [ '@babel/preset-env', '@babel/preset-react' ],
					plugins: [
						'@babel/plugin-proposal-object-rest-spread',
						'@babel/plugin-proposal-class-properties',
						'@babel/plugin-transform-runtime'
					]
				}
			},
			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				loaders: [ 'file-loader', 'image-webpack-loader' ]
			}
		]
	},
	resolve: {
		extensions: [ '.js', '.jsx', '.json' ]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		})
	]
};
