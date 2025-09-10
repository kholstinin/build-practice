import("./button/button").then(({ Button }) => {
  const root = document.getElementById("root");
  root.innerHTML = Button();
});
