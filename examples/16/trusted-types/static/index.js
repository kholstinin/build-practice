trustedTypes.createPolicy("default", {
  createHTML(value) {
    console.log("Please refactor this code");
    return value;
  },
});

// globalThis.trustedPolicy = trustedTypes.createPolicy("yaPolicy", {
//   createScriptURL: (s) => s,
//   createHTML: (s) => s,
//   createScript: (s) => s,
// });

const root = document.getElementById("root");

// root.innerHTML = trustedPolicy.createHTML("<h1>hello</h1>");
root.innerHTML = "<h1>hello</h1>";
