function route() {
  const { href } = location;

  if (href === "/" || href === "") {
    import("./pages/home").then(({ default: render }) => {
      render();
    });
  } else if (href === "/about") {
    import("./pages/about").then(({ default: render }) => {
      render();
    });
  }
}

route();
