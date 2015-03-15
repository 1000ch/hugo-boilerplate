var gulp     = require('gulp');
var concat   = require('gulp-concat');
var sequence = require('run-sequence').use(gulp);

gulp.task('default', function () {
  sequence('js', 'css')
});

gulp.task('js', function () {

  var uglify = require('gulp-uglify');

  var files = [
    'static/js/ga.js',
    'static/js/script.js'
  ];

  gulp.src(files)
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('_public/js'));
});

gulp.task('css', function () {

  var csscomb = require('gulp-csscomb');
  var csso    = require('gulp-csso');

  var files = [
    'bower_components/normalize.css/normalize.css',
    'bower_components/highlight.js/src/styles/solarized_light.css',
    'static/css/default.css',
    'static/css/style.css'
  ];

  gulp.src(files)
    .pipe(concat('app.min.css'))
    .pipe(csscomb())
    .pipe(csso())
    .pipe(gulp.dest('_public/css'));
});
