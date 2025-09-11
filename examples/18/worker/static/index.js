const worker = new Worker("./worker.js");

worker.addEventListener("message", (message) => {
  console.log("result", message.data);
});

worker.postMessage(5);
