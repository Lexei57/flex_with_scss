const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('css', () => {
    return gulp.src('./scss/**/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'));
})

gulp.watch('./scss/**/style.scss', gulp.series('css'))

gulp.task("start", gulp.series('css'))
