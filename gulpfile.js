const gulp = require('gulp');
const eslint = require('gulp-eslint');
gulp.task('eslint', function() {
  return gulp.src([
     'js/**/*', '!dist/**/*'
    ])
    .pipe(eslint())
    .pipe(eslint.format())
    
});

gulp.task('build', ['eslint']);
