const resolve = require("enhanced-resolve");

try {
  console.log(resolve.sync("./", "./file"));
} catch (err) {
  console.log("failed to resolve");
}

const myResolve = resolve.create.sync({
  extensions: [".ts", ".js"],
});

console.log(myResolve("./", "./file"));
