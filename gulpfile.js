'use strict';

const gulp = require('gulp');
const eslint = require('gulp-eslint');

gulp.task('lint', function() {
  gulp.src(['**/*.js', '!node_modules'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('test', function() {
  gulp.src('./test/*-test.js', {read:false})
    .pipe(mocha({report: 'spec'}));
});

gulp.task('dev', function() {
  gulp.watch(['**/*.js', '!node_modules'], ['lint', 'test']);
});

gulp.task('default', ['dev']);
