const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = {
	entry: {
		app: './src/index.js'
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'app.bundle.js',
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
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
			filename: 'index.html',
			template: './src/index.html'
		}),
		new Dotenv(),
		new webpack.DefinePlugin({
			'process.env': {
				UPSPLASH_ACCESS_KEY: JSON.stringify(UPSPLASH_ACCESS_KEY),
				FIREBASE_API_KEY: JSON.stringify(FIREBASE_API_KEY),
				FIREBASE_AUTH_DOMAIN: JSON.stringify(FIREBASE_AUTH_DOMAIN),
				FIREBASE_PROJECT_ID: JSON.stringify(FIREBASE_PROJECT_ID),
				FIREBASE_PROJECT_ID: JSON.stringify(FIREBASE_PROJECT_ID),
				FIREBASE_STORAGE_BUCKET: JSON.stringify(
					FIREBASE_STORAGE_BUCKET
				),
				FIREBASE_SENDER_ID: JSON.stringify(FIREBASE_SENDER_ID),
				FIREBASE_APP_ID: JSON.stringify(FIREBASE_APP_ID),
				FIREBASE_MEASUREMENT_ID: JSON.stringify(
					FIREBASE_MEASUREMENT_ID
				)
			}
		})
	]
};
