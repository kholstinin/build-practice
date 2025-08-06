import fs from "node:fs";

export default function myLoader(options = {}) {
  return {
    name: "my-loader",
    transform(_, id) {
      if (!id.endsWith(".txt")) return null;

      const raw = fs.readFileSync(id, "utf-8");
      const lines = raw.split(/\n/);
      const code = `export default ${JSON.stringify(lines)};`;

      return { code, map: null };
    },
  };
}
