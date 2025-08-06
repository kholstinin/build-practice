export default function myVitePlugin() {
  return {
    name: "transform-file",
    buildStart() {
      console.log("vite build started");
    },
  };
}
