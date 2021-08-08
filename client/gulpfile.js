const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// Logs message
gulp.task('message', async () => {
    return console.log('Gulp is running');
});

// Compile SASS
gulp.task('sass', async () => {
    return gulp.src(['src/styles/*.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(sass())
        .pipe(gulp.dest('src/'))
});

// Run all tasks in one
gulp.task('default', gulp.series(['message', 'sass']));

gulp.task('watch', async () => {
    gulp.watch('src/styles/*.scss', gulp.series('sass'));
    gulp.watch('src/styles/*/*.scss', gulp.series('sass'));
});