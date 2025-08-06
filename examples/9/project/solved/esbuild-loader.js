import fs from "node:fs/promises";

const myLoader = () => {
  return {
    name: "myPlugin",
    setup(build) {
      build.onResolve({ filter: /\.txt$/ }, (args) => {
        console.log("resolve", args);
      });

      build.onLoad({ filter: /\.txt$/ }, async (args) => {
        const data = (await fs.readFile(args.path, 'utf-8')).split('\n');

        return {
          contents: `export default ${JSON.stringify(data)}`,
        };
      });
    },
  };
};

export default myLoader;
