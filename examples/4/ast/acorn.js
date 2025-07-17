import fs from "node:fs";
import { parse } from "acorn";

const source = fs.readFileSync("./source.js", "utf-8");

fs.writeFileSync(
  "ast.json",
  JSON.stringify(parse(source, { ecmaVersion: 2020 }), null, 2)
);
