'use strict';

var gulp = require('gulp');

var argv = require('yargs').argv;
var imageResize = require('gulp-image-resize');
var rename = require('gulp-rename');
// var imageResize = require('gulp-imag-resize');

gulp.task('images:web', () => {
    if (!argv.src) {
        console.error('Must pass --src to this task.');
        return;
    }
    let quality = parseFloat(argv.quality) || 1; // 0 (worst) - 1 (best)
    return gulp.src(argv.src)
        .pipe(imageResize({
            imageMagick: true,
            width : argv.width || 950,
            crop : false,
            quality: quality,
            sharpen: argv.sharpen || true,
            upscale : false
        }))
        .pipe(rename({
            suffix: argv.suffix || '',
        }))
        .pipe(gulp.dest(argv.dest || './tmp'));
});
