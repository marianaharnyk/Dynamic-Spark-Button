'use strict'
const { src, dest, watch, parallel, series } = require('gulp');
const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const clean = require('gulp-clean');
const ghPages = require('gulp-gh-pages');

function styles () {
    return src('app/scss/style.scss')
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 10 version']
        }))
        .pipe(concat('style.min.scss'))
        .pipe(scss({outputStyle: 'compressed'}))
        .pipe(dest('app/css'))
        .pipe(browserSync.stream());
}

function deploy(){
    return src('dist/**/*')
        .pipe(ghPages());
}

function watching(){
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
    watch(['app/scss/*.scss'], styles).on('change', browserSync.reload);
    watch(['app/*.html']).on('change', browserSync.reload);
}

function building (){
    return src([
        'app/css/style.min.css',
        'app/images/**/*',
        'app/**/*.html'
    ], {base: 'app'})
        .pipe(dest('dist'))
}

function cleanDist (){
    return src('dist')
        .pipe(clean())
}

exports.styles = styles;
exports.watching = watching;
exports.deploy = deploy;

exports.build = series(cleanDist, building);
exports.default = parallel(styles, watching);