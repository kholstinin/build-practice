require.config({
    paths: {
        sub: './math'
    }
});

define('add', [], function () {
    return function (a, b) { return a + b; }
});

require(['add', 'sub'], function (add, sub) {
  console.log(add(2, 3));
  console.log(sub(3, 1));
});
