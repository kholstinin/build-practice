self.onmessage = (msg) => {
  const { data } = msg;
  self.postMessage(data * data);
};
