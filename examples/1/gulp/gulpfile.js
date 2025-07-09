const { src, dest } = require('gulp');
const concat = require('gulp-concat');

// Пути к исходникам
const paths = {
  js: ['./jquery.js', './index.js']
};

function buildJS() {
  return src(paths.js)
    .pipe(concat('bundle.js'))
    .pipe(dest('./'));
}

exports.default = buildJS;
