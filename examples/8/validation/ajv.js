import Ajv from "ajv";

// entry - string
// output - object { path: string, filename: string }

const ajv = new Ajv();

const schema = {
  type: "object",
  properties: {
    entry: {
      type: "string",
    },
    output: {
      type: "object",
      properties: {
        filename: { type: "string" },
        path: { type: "string" },
      },
      required: ["filename", "path"],
      additionalProperties: false,
    },
  },
  required: ["entry", "output"],
};

const config = {
  entry: "./some/path",
  output: {
    path: "dist",
    filename: "main.js",
  },
};

const result = ajv.validate(schema, config);

if (!result) {
  console.error("Invalid config!");
} else {
  console.log("Valid config");
}
