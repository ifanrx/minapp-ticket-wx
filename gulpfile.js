const gulp = require('gulp')
gulp.task('copy', () => {
  return gulp.src('./src/**/*')
    .pipe(gulp.dest('./demo/components/minapp-ticket-wx'))
})
gulp.task('watch', () => {
  return gulp.watch('./src/**/*', gulp.series('copy'))
})
gulp.task('default', gulp.series('copy', 'watch'))
