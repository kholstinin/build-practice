import 'core-js/stable';

const source = {
  a: 5,
};

Promise.try(function () {
  throw new Error();
});

const b = source?.a;
