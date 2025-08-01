import { z } from "zod";

const configSchema = z
  .object({
    entry: z.string(),
    output: z
      .object({
        filename: z.string(),
        path: z.string(),
      })
      .strict(),
  })
  .strict();

type Config = z.infer<typeof configSchema>;

const config: Config = {
  entry: "./some/path",
  output: {
    path: "dist",
    filename: "main.js"
  },
};

const result = configSchema.parse(config);

console.log(result);
