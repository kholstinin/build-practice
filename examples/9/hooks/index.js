import fs from "node:fs";

import { bundle } from "./bundler.js";

const output = await bundle(process.argv[2]);

fs.mkdirSync("./dist", { recursive: true });
fs.writeFileSync(`./dist/main.js`, output);
