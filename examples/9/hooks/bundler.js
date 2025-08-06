import fs from "node:fs";
import path from "node:path";
import fg from 'fast-glob';

import { runHook } from './hook-runtime.js';

export async function bundle(entryPath) {
  const hooks = await fg('./hooks/*');

  for (const hook of hooks) {
    await import(hook);
  }

  const entryContent = fs.readFileSync(entryPath, "utf-8");
  const requireCalls = searchRequireCalls(entryContent).map((modulePath) => ({
    modulePath: modulePath,
    parent: entryPath,
  }));

  const header = `var modules = {};
function require(name) {
  modules[name](require, modules[name]);
  return modules[name].exports;
}`;

  const entry = `(function(require, module) { ${entryContent} })(require, modules)`;

  const modules = [];
  while (requireCalls.length !== 0) {
    const { modulePath, parent } = requireCalls.pop();
    let finalModulePath;

    if (path.isAbsolute(modulePath)) {
      finalModulePath = modulePath;
    } else {
      finalModulePath = path.resolve(path.dirname(parent), modulePath);
    }

    const moduleCode = fs.readFileSync(finalModulePath, "utf-8");
    const moduleMeta = {
      code: moduleCode,
      path: finalModulePath
    }
    runHook('onModuleInit', moduleMeta);
    const moduleRequireCalls = searchRequireCalls(moduleMeta.code);

    if (moduleRequireCalls.length) {
      requireCalls.push(
        ...moduleRequireCalls.map((newModulePath) => ({
          modulePath: path.resolve(path.dirname(finalModulePath), newModulePath),
          parent: finalModulePath,
        }))
      );
    }

    modules.push(`modules['${modulePath}'] = function (require, module) {
${moduleCode}
    };`);
  }

  return `${header}\n${modules.join("\n")}\n${entry}`;
}

function searchRequireCalls(code) {
  return [...code.matchAll(/require\(('|")(.*)('|")\)/g)].map(
    (item) => item[2]
  );
}
