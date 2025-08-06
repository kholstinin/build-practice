export default function myLoader() {
  return {
    name: "my-loader",
    resolveId(source, imported, options) {},
    load(id) {},
    moduleParsed(moduleInfo) {},
    transform(code, id) {},
  };
}
