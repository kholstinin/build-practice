export default class MyPlugin {
  apply(compiler) {
    let counter = 0;

    compiler.hooks.compilation.tap("CountModulesPlugin", (compilation) => {
      compilation.hooks.finishModules.tap("CountModulesPlugin", (modules) => {
        counter = modules.size;
      });
    });

    compiler.hooks.done.tap("CountModulesPlugin", () => {
      console.log(`Обработано модулей: ${counter}`);
    });
  }
}
