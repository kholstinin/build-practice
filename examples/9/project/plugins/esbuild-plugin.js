const myPlugin = () => {
  return {
    name: "myPlugin",
    setup(build) {
      const options = build.initialOptions;

      build.onStart(() => {});

      build.onEnd(() => {});

      build.onDispose(() => {});
    },
  };
};

export default myPlugin;
