import gulpSass from 'gulp-sass';
import * as dartSass from 'sass';
import gulp from 'gulp';
import plumber from 'gulp-plumber';

const { src, dest, watch } = gulp;
const sass = gulpSass(dartSass);

export function css(done) {
    src('./src/sass/**/*.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(dest('./build/css'));

    done();
}

export function watcher(done) {
    watch('./src/sass/**/*.scss', css);

    done();
}
