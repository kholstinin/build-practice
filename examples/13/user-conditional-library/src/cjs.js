const { add } = require("./utils/add.js");
const { sub } = require("./utils/sub.js");
const { mul } = require("./utils/mul.js");

console.log('CJS');

module.exports = {
  add,
  sub,
  mul,
};
