import promiseTry from "core-js-pure/es/promise/try.js";

function action() {
  throw new Error("Ooops");
}

promiseTry(action).catch((err) => {
  console.log("catch sync error");
});
