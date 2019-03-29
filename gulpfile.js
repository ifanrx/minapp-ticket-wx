const gulp = require('gulp')
gulp.task('copy', () => {
  return gulp.src('../src/**/*')
    .pipe(gulp.dest('./components/minapp-ticket-tx'))
})
gulp.task('watch', () => {
  return gulp.watch('../src/**/*', gulp.series('copy'))
})
gulp.task('default', gulp.series('copy', 'watch'))
