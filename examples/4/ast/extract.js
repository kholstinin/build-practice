import fs from "node:fs";
import { parse } from "acorn";
import { walk } from "estree-walker";

const source = fs.readFileSync("./src/entry.js", "utf-8");
const ast = parse(source, { ecmaVersion: 2020, sourceType: "module" });

const imports = [];

walk(ast, {
  enter(node) {
    if (node.type === "ImportDeclaration") {
      imports.push({
        path: node.source.value,
        specifiers: node.specifiers.map((specifier) => specifier.imported.name),
      });
    }
  },
});

console.log(imports);
