import 'core-js/modules/es.promise.try.js'

function action() {
  throw new Error('Ooops');
}

Promise.try(action).catch((err) => {
  console.log('catch sync error');
})
