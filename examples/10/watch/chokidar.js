import { watch } from 'chokidar';

const watcher = watch('./src');

watcher.on('change', (...args) => {
  console.log(args);
})
