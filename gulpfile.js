/**
 * Created by Vladimir on 13.12.2016.
 */
var gulp   = require('gulp');
var less = require('gulp-less');
var path = require('path');

gulp.task('less', function () {
    return gulp.src('./less/*.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(gulp.dest('./css'));
});
gulp.task('default', [], function() {
    //gulp.start();
    gulp.start('less');
});
