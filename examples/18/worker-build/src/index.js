const worker = new Worker(new URL("./worker.js", import.meta.url));

worker.addEventListener("message", (message) => {
  console.log("result", message.data);
});

worker.postMessage(5);
