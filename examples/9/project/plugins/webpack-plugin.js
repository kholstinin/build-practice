export default class MyPlugin {
  apply(compiler) {
    compiler.hooks.environment.tap("MyPlugin", function myPlugin() {
      console.log(compiler);
    });
  }
}
