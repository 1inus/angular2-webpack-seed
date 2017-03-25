#usage
##first
```shell
npm install
```
##second
```shell
webpack
```
or
```shell
webpack --watch
```
#package.json
```javascript
{
  "name": "angular2-webpack-seed",
  "version": "1.0.0",
  "description": "A simple starter Angular2 & webpack project",
  "main": "main.ts",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "liangwei",
  "license": "ISC",
  "dependencies": {
    "@angular/common": "^4.0.0",
    "@angular/compiler": "^4.0.0",
    "@angular/core": "^4.0.0",
    "@angular/forms": "^4.0.0",
    "@angular/http": "^4.0.0",
    "@angular/platform-browser": "^4.0.0",
    "@angular/platform-browser-dynamic": "^4.0.0",
    "@angular/router": "^4.0.0",
    "reflect-metadata": "^0.1.10",
    "rxjs": "^5.2.0",
    "zone.js": "^0.8.5"
  },
  "devDependencies": {
    "less": "^2.7.2",
    "webpack": "^2.3.2",
    "ts-loader": "^2.0.3",
    "webpack-server": "^0.1.2",
    "typescript": "^2.2.1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/angular/angular2-webpack-seed.git"
  },
  "keywords": [
    "Angular2",
    "webpack",
    "angular2-seed",
    "angular2-webpack-seed"
  ]
}

```
#webpack.config.js
```javascript
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
```