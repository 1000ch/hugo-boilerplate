var gulp     = require('gulp');
var concat   = require('gulp-concat');
var sequence = require('run-sequence').use(gulp);

gulp.task('default', function () {
  sequence('js', 'css');
});

gulp.task('js', function () {
  gulp.start('js:lib', 'js:app');
});

gulp.task('css', function () {
  gulp.start('css:lib', 'css:app');
});

gulp.task('js:lib', function () {

  var files = [
    'bower_components/jquery/dist/jquery.min.js'
  ];

  gulp.src(files)
    .pipe(concat('lib.min.js'))
    .pipe(gulp.dest('_public/js'));
});

gulp.task('js:app', function () {

  var uglify = require('gulp-uglify');

  var files = [
    'static/js/app.js'
  ];

  gulp.src(files)
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('_public/js'));
});

gulp.task('css:lib', function () {

  var csscomb = require('gulp-csscomb');
  var csso    = require('gulp-csso');

  var files = [
    'bower_components/normalize.css/normalize.css',
    'bower_components/highlight.js/src/styles/solarized_light.css'
  ];

  gulp.src(files)
    .pipe(concat('lib.min.css'))
    .pipe(csscomb())
    .pipe(csso())
    .pipe(gulp.dest('_public/css'));
});

gulp.task('css:app', function () {

  var csscomb = require('gulp-csscomb');
  var csso    = require('gulp-csso');

  var files = [
    'static/css/app.css'
  ];

  gulp.src(files)
    .pipe(concat('app.min.css'))
    .pipe(csscomb())
    .pipe(csso())
    .pipe(gulp.dest('_public/css'));
});
