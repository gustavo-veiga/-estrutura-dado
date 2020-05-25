const gulp = require('gulp');
const babel = require('gulp-babel');
const minify = require('gulp-minify');
const concat = require('gulp-concat');

gulp.task('default', () =>
  gulp.src([
    'src/cli/ascii-art/estrutura-de-dados.js',
    'src/cli/ascii-art/mais-saude.js',
    'src/lesson/queue.js',
    'src/lesson/queue-priority.js',
    'src/lesson/stack.js',
    'src/lesson/stack-operations.js',
    'src/lesson/random-numbers.js',
    'src/lesson/vector.js',
    'src/tde/task-queue.js',
    'src/tde/task-queue-stack.js',
    'src/tde/task-queue-priority.js',
    'src/tde/task-stack.js',
    'src/tde/task-stack-operations.js',
    'src/index.js'
  ])
  .pipe(concat('all.js'))
  .pipe(babel({
    presets: ['@babel/env']
  }))
  .pipe(minify())
  .pipe(gulp.dest('dist'))
);
