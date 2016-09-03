const gulp = require('gulp');

const LIB_JS_FILES = [
  'bower_components/jquery/dist/jquery.min.js',
  'bower_components/highlightjs/highlight.pack.js'
];

const APP_JS_FILES = [
  'static/js/app.js'
];

const LIB_CSS_FILES = [
  'bower_components/normalize.css/normalize.css',
  'bower_components/highlightjs/styles/solarized_light.css'
];

const APP_CSS_FILES = [
  'static/css/app.css'
];

gulp.task('watch', () => {
  gulp.watch(APP_JS_FILES, () => {
    gulp.start('js:app');
  });

  gulp.watch(APP_CSS_FILES, () => {
    gulp.start('css:app');
  });
});

gulp.task('build', () => {
  gulp.start('js', 'css');
});

gulp.task('js', () => {
  gulp.start('js:lib', 'js:app');
});

gulp.task('css', () => {
  gulp.start('css:lib', 'css:app');
});

gulp.task('js:lib', () => {
  const concat = require('gulp-concat');

  gulp.src(LIB_JS_FILES)
    .pipe(concat('lib.min.js'))
    .pipe(gulp.dest('_public/js'));
});

gulp.task('js:app', () => {
  const concat = require('gulp-concat');
  const uglify = require('gulp-uglify');

  gulp.src(APP_JS_FILES)
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('_public/js'));
});

gulp.task('css:lib', () => {
  const concat = require('gulp-concat');
  const csscomb = require('gulp-csscomb');
  const csso = require('gulp-csso');

  gulp.src(LIB_CSS_FILES)
    .pipe(concat('lib.min.css'))
    .pipe(csscomb())
    .pipe(csso())
    .pipe(gulp.dest('_public/css'));
});

gulp.task('css:app', () => {
  const concat = require('gulp-concat');
  const csscomb = require('gulp-csscomb');
  const csso = require('gulp-csso');

  gulp.src(APP_CSS_FILES)
    .pipe(concat('app.min.css'))
    .pipe(csscomb())
    .pipe(csso())
    .pipe(gulp.dest('_public/css'));
});
