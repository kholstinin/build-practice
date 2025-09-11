import { _Z7squareri as square } from "./squarer.wasm";

self.postMessage('ready');

self.onmessage = ((message) => {
  const { data } = message;

  self.postMessage(square(data));
});

// import("./squarer.wasm").then(({ _Z7squareri: square }) => {
//   console.log(square(5));
// });
