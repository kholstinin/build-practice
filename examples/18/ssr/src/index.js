import fs from "node:fs";

// import fg from "fast-glob";
// console.log(fg.sync("./"));

console.log(fs.readFilsSync("./package.json"), "utf-8");

// import("./utils").then(({ add }) => {
//   console.log(add(5, 5));
// });
