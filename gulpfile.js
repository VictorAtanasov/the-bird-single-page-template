const gulp = require('gulp');
const sass = require('gulp-sass');
const serve = require('gulp-serve');

gulp.task('compile:sass', () => {
    return gulp.src('public/sass/styles.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('public/css'));
})

gulp.task('sass', function (){
    gulp.watch('public/sass/styles.sass', ['compile:sass']);
})

gulp.task('serve', serve('public'));