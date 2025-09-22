export default class MyPlugin {
  apply(compiler) {
    compiler.hooks.emit.tap("MyPlugin", (compilation, callback) => {
      debugger;
      console.log(compilation);
    });
  }
}
