import { _Z7squareri as square } from "./squarer.wasm";

console.log(square(5));

// import("./squarer.wasm").then(({ _Z7squareri: square }) => {
//   console.log(square(5));
// });

// const worker = new Worker(new URL("./worker.js", import.meta.url));

// worker.addEventListener("message", (message) => {
//   if (message.data === "ready") {
//     worker.postMessage(5);
//   } else {
//     console.log("result", message.data);
//   }
// });
