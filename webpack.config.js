const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: {
		app: './src/app.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: [ '@babel/preset-env', '@babel/preset-react' ],
					plugins: [
						'@babel/plugin-proposal-class-properties',
						'@babel/plugin-proposal-object-rest-spread',
						'@babel/plugin-transform-runtime'
					]
				}
			},
			{
				test: /\.s?css$/,
				use: [
					'style-loader',
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							sourceMap: true
						}
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true
						}
					}
				]
			},
			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				loaders: [ 'file-loader', 'image-webpack-loader' ]
			}
		]
	},
	resolve: {
		extensions: [ '.js', '.jsx' ]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'style.css'
		})
	],
	devtool: 'cheap-module-source-map',
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		inline: true,
		historyApiFallback: true
	}
};
