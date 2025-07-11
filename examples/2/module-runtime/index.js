import { sub } from "./sub.js";
import { add } from "./add.js";

import("./mul.js").then(({ default: mul }) => {
  console.log(mul(3, 5));
});

console.log(add(3, 5));
console.log(sub(3, 5));
