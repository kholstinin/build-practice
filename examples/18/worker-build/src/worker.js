import { square } from './utils';

self.onmessage = (msg) => {
  const { data } = msg;
  self.postMessage(square(data));
};
