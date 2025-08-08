import { watch, watchFile } from "node:fs";

watchFile('./src/index.js', (current, previous) => {
  console.log(current, previous);
});

// watch("./src", { recursive: true }, (eventType, filename) => {
//   console.log(eventType, filename);
// });
