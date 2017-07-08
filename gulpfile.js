var gulp = require('gulp'),
  sourcemaps = require('gulp-sourcemaps'),
  sass = require('gulp-sass'),
  browserSync = require('browser-sync').create();
  // sassPaths = []

gulp.task('sass:dev', function() {
	return gulp.src('public/src/sass/**/*.scss')
		.pipe(sourcemaps.init())
    .pipe(sass({
      // includePaths: sassPaths
    }).on('error', sass.logError))
		.pipe(sourcemaps.write('./maps'))
		.pipe(gulp.dest('public/dist/css'))
    // .pipe(browserSync.stream())
});

gulp.task('dev', function() {
	browserSync.init({
		files: ['public/**/*.html', 'public/dist/**/*.css', 'public/dist/**/*.js'],
		proxy: 'localhost:3000',
    port: 8080
	});
	gulp.watch('public/src/sass/**/*.scss', ['sass:dev']);
});

gulp.task('default', ['dev']);
