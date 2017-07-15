var path = require('path');
var webpack = require('webpack');

module.exports = {
	devtool: "source-map",
	entry: {
		main: './src/main.ts',
		vendor:'./src/vendor.ts'
	},
	
	output: {
		path: path.resolve(__dirname, 'dist'),
		//publicPath: '/dist/',
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
		/*生成公共代码块*/
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',					//名字
			filename: 'vendor.bundle.js',	//生成的文件名
			chunks:["vendor"],				//指定这个chunk是由哪些页面构成的
			minChunks:1						//最小引用次数，一个依赖最少被引入这个次数才会被加到公共的chunk中
		}),
		
		/*代码开头插入*/
		//new webpack.BannerPlugin('created by liangwei<cnliangwei@foxmail.com>'),
		
		/*压缩js*/
		/*new webpack.optimize.UglifyJsPlugin({
			compress: {warnings: false},
			comments:false
		})*/
	]
};