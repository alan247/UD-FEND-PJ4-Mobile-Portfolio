var gulp = require('gulp');
var eslint = require('gulp-eslint');
//var concat = require('gulp-concat');
var uglify= require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var clean = require('gulp-clean');
//var sourcemaps = require('gulp-sourcemaps');




gulp.task('default', ['copy-htmls', 'images', 'styles', 'scripts', 'lint'], function() {
	gulp.watch('./**/*.scss', ['styles']);
	gulp.watch('./**/*.js', ['lint']);
	gulp.watch('./**/*.html', ['copy-htmls']);


	browserSync.init({
		server: './dist'
	});
	console.log('Listo!');
});

gulp.task('copy-htmls', function(){
	gulp.src(['./**/*.html', '!./node_modules/**'])
		.pipe(gulp.dest('./dist'));
});

gulp.task('images', function(){
	gulp.src(['./**/*.jpg', './**/*.png', '!./node_modules/**'])
		.pipe(imagemin({
			progresive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		})
		.pipe(gulp.dest('./dist'))
		);
});

gulp.task('styles', function() {
	gulp.src('./sass/**/*.scss')
		.pipe(sass({
			outputStyle: 'compressed'
		}).on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 2 versions']
		}))
		.pipe(gulp.dest('./dist/css'));
		//.pipe(browserSync.stream());

	gulp.src('./views/sass/**/*.scss')
		.pipe(sass({
			outputStyle: 'compressed'
		}).on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 2 versions']
		}))
		.pipe(gulp.dest('./dist/views/css'));
		//.pipe(browserSync.stream());
});


gulp.task('scripts', function() {
	gulp.src(['./**/*.js', '!./node_modules/**', '!gulpfile.js'])
		.pipe(uglify())
		.pipe(gulp.dest('./dist'));
});


gulp.task('lint', function () {
	return gulp.src(['./**/*.js'])
		// eslint() attaches the lint output to the eslint property
		// of the file object so it can be used by other modules.
		.pipe(eslint())
		// eslint.format() outputs the lint results to the console.
		// Alternatively use eslint.formatEach() (see Docs).
		.pipe(eslint.format())
		// To have the process exit with an error code (1) on
		// lint error, return the stream and pipe to failOnError last.
		.pipe(eslint.failOnError());
});



