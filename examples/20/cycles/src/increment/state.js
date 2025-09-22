import { initialCounter } from "./counter.js";

let count = initialCounter;
export function increment() {
  count++;
  console.log("state: count =", count);
}
