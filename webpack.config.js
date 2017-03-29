var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: {
		main: './src/app/main.ts'
		//pack once
		,vendor:"./src/vendor.ts"
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/dist/',
		filename: 'app.bundle.js'
	},
	
	module: {
		loaders: [{ test: /\.ts$/, loader: 'ts-loader' }],
		exprContextCritical: false
	},
	
	resolve: {
		extensions: ['.js', '.ts']
	},
	
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' }),
		new webpack.BannerPlugin('created by liangwei<cnliangwei@foxmail.com>'),
		new webpack.optimize.UglifyJsPlugin({
			compress: {warnings: false},
			comments:false
		})
	]
};