const gulp = require('gulp');
const babel = require('gulp-babel');
const minify = require('gulp-minify');
const concat = require('gulp-concat');

gulp.task('default', () =>
  gulp.src([
    'src/lesson/stack.js',
    'src/lesson/queue.js',
    'src/lesson/vector.js',
    'src/tde/task1.js',
    'src/index.js'
  ])
  .pipe(concat('all.js'))
  .pipe(babel({
    presets: ['@babel/env']
  }))
  .pipe(minify())
  .pipe(gulp.dest('dist'))
);
