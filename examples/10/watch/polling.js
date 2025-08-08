import { stat } from "node:fs";

let lastMtime;

setInterval(() => {
  stat("./src/index.js", (_err, stats) => {
    const currentMtime = stats.mtime;
    
    if (lastMtime === undefined) {
      lastMtime = currentMtime;
    } else if (Number(lastMtime) !== Number(currentMtime)) {
      lastMtime = currentMtime;
      console.log("File changed!");
    }
  });
}, 1000);
