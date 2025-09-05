const button = import('./components/button').then(({button}) => {
  eval('console.log(5)');
  const node = document.getElementById('app');

  window.log = function log() {
    console.log('log');
  }

  node.innerHTML = `cool <button onclick="log()" class="button">${button}</button>`;
})
