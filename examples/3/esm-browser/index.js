console.log(import.meta);

console.log(import.meta.resolve('./mul.js'));

import { sub } from "http://localhost:3000/3/esm-browser/sub.js";
import { add } from "./add";
import mul from "./mul.js";

console.log(add(3, 5));
console.log(sub(3, 5));
console.log(mul(3, 5));
