// sub.js
function sub(a, b) {
  return a - b;
}

// add.js
function add(a, b) {
  return a + b;
}

// index.js
import("./mul-ERI5GEEL.js").then(({ default: mul }) => {
  console.log(mul(3, 5));
});
console.log(add(3, 5));
console.log(sub(3, 5));
