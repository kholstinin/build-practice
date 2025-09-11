import initWasm from "./squarer.wasm?init";

initWasm().then((instance) => {
  const square = instance.exports._Z7squareri;
  console.log(square(5));
})

// import wasmUrl from "./squarer.wasm?url";
// const response = await fetch(wasmUrl);
// const { instance } = await WebAssembly.instantiateStreaming(response);
// console.log(instance.exports._Z7squareri(5));
