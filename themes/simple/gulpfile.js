var gulp = require('gulp');
var sass = require('gulp-sass');

var input = './sass/*';
var output = './static/css/';

gulp.task('sass', function() {
  return gulp.src(input)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(output));
});

gulp.task('sass:watch', function() {
  gulp.watch('./sass/*.sass', ['sass']);
});
