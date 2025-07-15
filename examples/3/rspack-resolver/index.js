import * as defaultResolver from "@rspack/resolver";

const resolvedDefaultPath = defaultResolver.sync("./", "./file.ts");
console.log(resolvedDefaultPath);

const customResolver = new defaultResolver.ResolverFactory({
  extensions: [".js"],
});

console.log(customResolver.sync("./", "./file"));
