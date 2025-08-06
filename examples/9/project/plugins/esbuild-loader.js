const myPlugin = () => {
  return {
    name: "myPlugin",
    setup(build) {
      build.onResolve({ filter: /\.txt$/ }, (args) => {
        console.log("resolve", args);
      });

      build.onLoad({ filter: /\.txt$/ }, (args) => {
        console.log("load", args);
      });
    },
  };
};

export default myPlugin;
