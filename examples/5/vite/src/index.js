const { sub } = require("./sub");
const { add } = require("add");

import mul from "./mul";
import data from "./data";

import("./async").then(({ default: asyncLoadedData }) => {
  console.log(asyncLoadedData);
});

console.log(data);
console.log(add(3, 5));
console.log(sub(3, 5));
console.log(mul(3, 5));
