const MyPlugin = () => {
  let counter = 0;

  return {
    name: "count-modules",

    buildStart() {
      console.log("Сборка началась");
    },

    transform(code, id) {
      counter++;
      return null;
    },

    generateBundle() {
      console.log(`Обработано модулей: ${counter}`);
    },
  };
};

export default MyPlugin;
