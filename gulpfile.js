var gulp = require('gulp');
var less = require('gulp-less');
var htmlminify = require("gulp-html-minify");
var webpack = require('gulp-webpack');
var dts_gen = require('dts-generator').default;

console.log(dts_gen);

gulp.task('less', function() {
	return gulp.src('src/**/*.less') // only compile the entry file
		.pipe(less()).on('error', function(err) {
			this.emit('end');
			console.log(err);
		})
		.pipe(gulp.dest('./dist'))
});

gulp.task('minhtml' , function(){
	return gulp.src("src/**/*.html")
		.pipe(htmlminify()).on('error', function(err) {
			this.emit('end');
			console.log(err);
		})
		.pipe(gulp.dest("./dist"))
});

gulp.task('watchLess', function() {
	gulp.watch('src/**/*.less', function(){
		gulp.run('less');
	}); // Watch all the .less files, then run the less task
});

gulp.task('watchHtml', function() {
	gulp.watch('src/**/*.html', function(){
		gulp.run('minhtml');
	}); // Watch all the .less files, then run the less task
});

gulp.task('watchTs', function() {
	gulp.watch(['src/components/**/*.ts', 'src/services/**/*.ts'], function(){
		dts_gen({
			baseDir: 'src/',
			project: './',
			out: 'app.d.ts'
		}); 
	}); // Watch all the .less files, then run the less task
});

gulp.task('default', ['less', 'watchLess', 'minhtml', 'watchHtml', 'watchTs']);