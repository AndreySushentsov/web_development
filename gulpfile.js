var gulp = require('gulp'),
	minifycss = require('gulp-minify-css'),
	jshint = require('gulp-jshint'),
	stylish = require('jshint-stylish'),
	uglify = require('gulp-uglify'),
	usemin = require('gulp-usemin'),
	imagemin = require('gulp-imagemin'),
	concat = require('gulp-concat'),
	notify = require('gulp-notify'),
	cache = require('gulp-cache'),
	changed = require('gulp-changed'),
	rev = require('gulp-rev'),
	browserSync = require('browser-sync'),
	del = require('del');

	gulp.task('jshint', function() {
		return gulp.src('app/js/**/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter(stylish));
	});

	gulp.task('usemin',['jshint'], function(){
		return gulp.src('./app/index.html')
		.pipe(usemin({
			css:[minifycss(),rev()],
			js:[uglify(),rev()]
		}))
		.pipe(gulp.dest('dist/'));
	});

	gulp.task('imagemin', function(){
		return del(['dist/img']), gulp.src('app/img/**/*')
		.pipe(cache(imagemin({optimizationLevel:3, progressive: true, interlaced: true})))
		.pipe(gulp.dest('dist/img'))
		.pipe(notify({message: 'Images task complete'}));
	});

	gulp.task('watch',['browser-sync'],function(){
		gulp.watch('{app/js/**/*.js, app/css/**/*.css, app/**/*.html}',['usemin']);
	});

	gulp.task('browser-sync',['default'], function(){
		var files = ['app/**/*.html',
					'app/styles/**/*.css',
					'app/img/**/*.png',
					'app/js/**/*.js', 
					'dist/**/*'];

		browserSync.init(files,{
			server:{ baseDir: 'dist', index:'index.html'}
		});


		gulp.watch(['dist/**']).on('change',browserSync.reload);
	});

	gulp.task('clean',function(){
		return del(['dist']);
	});

	gulp.task('default', ['clean'], function(){
		gulp.start('usemin', 'imagemin');
	});