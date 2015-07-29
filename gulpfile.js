'use strict'; // Проверка строк кода

// Плагины
var gulp         = require('gulp'),
	watch        = require('gulp-watch'),
	clean        = require('gulp-clean'),
	wiredep      = require('wiredep').stream,
	useref       = require('gulp-useref'),
	rigger       = require('gulp-rigger'),
	autoprefixer = require('gulp-autoprefixer'),
	minifyCss    = require('gulp-minify-css'),
	uglify       = require('gulp-uglify'),
	browserSync  = require('browser-sync'),
	reload       = browserSync.reload;

// Пути
var path = {
	app : {          // Исходники
		html   : 'app/*.html',
		css    : 'app/css/*.css',
		js     : 'app/js/*.js',
		images : 'app/images/**/*.*',
		fonts  : 'app/fonts/**/*.*'
	},
	dist : {         // Релиз
		html   : 'dist/',
		css    : 'dist/css/',
		js     : 'dist/js/',
		images : 'dist/images/',
		fonts  : 'dist/fonts/'
	},
	watch : {        // Наблюдение
		html   : 'app/**/*.html',
		css    : 'app/css/**/*.css',
		js     : 'app/js/**/*.js',
		images : 'app/images/**/*.*',
		fonts  : 'app/fonts/**/*.*'
	},
	clean : './dist' // Чистка
};

// Настройка сервера
var config = {
	server : {
		'baseDir' : './dist'
	},
	host : 'localhost',
	port : 9000,
	tunel : true
};

// Работа с HTML 
gulp.task('html', function(){
	var assets = useref.assets();

	gulp.src(path.app.html)
		.pipe(rigger())
		.pipe(wiredep({
			"overrides" : {
				"bootstrap" : {
					"main" : [
						"dist/js/bootstrap.js",
						"dist/css/bootstrap.css"
					]
				}
			}
		}))
		.pipe(assets)
		.pipe(assets.restore())
		.pipe(useref())
		.pipe(gulp.dest(path.dist.html))
		.pipe(reload({stream : true}));
});

// Работа с CSS 
gulp.task('style', function(){
	gulp.src(path.app.css)
		.pipe(autoprefixer())
		.pipe(minifyCss())
		.pipe(gulp.dest(path.dist.css))
		.pipe(reload({stream : true}));
});

// Работа с JavaScript
gulp.task('js', function(){
	gulp.src(path.app.js)
		.pipe(uglify())
		.pipe(gulp.dest(path.dist.js))
		.pipe(reload({stream : true}));
});

// Работа с FONTS 
gulp.task('fonts', function(){
	gulp.src(path.app.fonts)
		.pipe(gulp.dest(path.dist.fonts))
		.pipe(reload({stream : true}));
});

// Работа с IMAGES 
gulp.task('images', function(){
	gulp.src(path.app.images)
		.pipe(gulp.dest(path.dist.images))
		.pipe(reload({stream : true}));
});

// Таски
gulp.task('dist', [
	'html',
	'style',
	'js',
	'fonts',
	'images'
]);

// Наблюдение
gulp.task('watch', function(){
	watch([path.watch.html], function(event, cb){
		gulp.start('html');
	});
	watch([path.watch.css], function(event, cb){
		gulp.start('style');
	});
	watch([path.watch.js], function(event, cb){
		gulp.start('js');
	});
	watch([path.watch.fonts], function(event, cb){
		gulp.start('fonts');
	});
	watch([path.watch.images], function(event, cb){
		gulp.start('images');
	});
});

// Запуск вебсервера
gulp.task('webserver', function(){
	browserSync(config);
});

// Чистка
gulp.task('clean', function(cb){
	clean(path.clean, cb);
});

// Задачи по-умолчанию
gulp.task('default', [
	'dist',
	'webserver',
	'watch'
]);
