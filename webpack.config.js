var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: {
		main: './src/app/main.ts'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/dist/',
		filename: 'bundle.js'
	},
	
	module: {
		loaders: [{ test: /\.ts$/, loader: 'ts-loader' }],
		exprContextCritical: false
	},
	
	resolve: {
		extensions: ['.js', '.ts']
	},
	
	plugins: [
		new webpack.BannerPlugin('created by liangwei<cnliangwei@foxmail.com>'),
		new webpack.optimize.UglifyJsPlugin({
			compress: {warnings: false}
		})
	]
};