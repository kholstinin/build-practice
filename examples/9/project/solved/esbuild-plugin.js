const myPlugin = () => {
  let counter = 0;

  return {
    name: "myPlugin",
    setup(build) {
      build.onResolve({ filter: /.*/ }, (args) => {
        counter++;
        return;
      });
      build.onEnd(() => {
        console.log(`[count-modules] Обработано модулей: ${counter}`);
      });
    },
  };
};

export default myPlugin;
