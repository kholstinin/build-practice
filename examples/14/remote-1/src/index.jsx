import("./Button").then((ButtonModule) => {
  const Button = ButtonModule.default;
  const root = document.createElement("div");
  document.body.appendChild(root);

  const ReactDOM = require("react-dom/client");
  ReactDOM.render(<Button />, root);
});
