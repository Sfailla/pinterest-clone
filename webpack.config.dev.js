const path = require('path');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					{
						loader: 'style-loader'
					},
					'css-loader',
					'sass-loader'
				]
			}
		]
	},
	devtool: 'cheap-module-source-map',
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		inline: true,
		historyApiFallback: true
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[id].css'
		})
	]
});
