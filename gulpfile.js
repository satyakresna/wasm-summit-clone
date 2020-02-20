const gulp = require('gulp');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();
const postcss = require('gulp-postcss');
const historyApiFallback = require('connect-history-api-fallback');

gulp.task('css', async function() {
  gulp.src('./src/css/style.css')
    .pipe(postcss())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('./dist/css/'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('html', async function () {
  gulp.src(['./src/**/.*html', './src/*.html'])
    .pipe(gulp.dest('./dist/'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('assets', async function () {
  gulp.src('./src/assets/**')
    .pipe(gulp.dest('./dist/assets/'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('js-plugins', async function () {
  gulp.src('./src/js/plugins/**')
    .pipe(gulp.dest('./dist/js/plugins/'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('js', async function () {
  gulp.src('./src/js/app.js')
    .pipe(gulp.dest('./dist/js/'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('js-behaviours', async function () {
  gulp.src('./src/js/behaviours/**')
    .pipe(gulp.dest('./dist/js/behaviours/'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('js-components', async function () {
  gulp.src('./src/js/components/**')
    .pipe(gulp.dest('./dist/js/components/'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('js-pages', async function () {
  gulp.src('./src/js/pages/**')
    .pipe(gulp.dest('./dist/js/pages/'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('watch', async function () {
  gulp.watch('./src/assets/**', gulp.series('assets'));
  gulp.watch('./src/js/app.js', gulp.series('js'));
  gulp.watch('./src/js/behaviours/**', gulp.series('js-behaviours'));
  gulp.watch('./src/js/components/**', gulp.series('js-components'));
  gulp.watch('./src/js/pages/**', gulp.series('js-pages'));
  gulp.watch(['./src/**/*.html'], gulp.series('html', 'css')).on('change', browserSync.reload);
});

gulp.task('browserSync', function () {
  browserSync.init({
    watch: true,
    server: {
      baseDir: "./dist/",
      middleware: [ historyApiFallback() ]
    }
  });

  gulp.watch('./src/css/style.css', gulp.series('css')).on('change', browserSync.reload);
});

// For production
gulp.task('build', gulp.series('html', 'css', 'assets', 'js-plugins', 'js-behaviours', 'js-components', 'js-pages', 'js'));

// For development
gulp.task('default', gulp.series('build', 'watch', 'browserSync'));