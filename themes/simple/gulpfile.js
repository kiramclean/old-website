var gulp = require('gulp');
var sass = require('gulp-sass');

var input = './sass/*';
var output = './static/css/';

// Compile sass
gulp.task('sass', function() {
  return gulp.src(input)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(output));
});

// Watch input directory for changes to sass files
gulp.task('sass:watch', function() {
  gulp.watch(input, ['sass']);
});
