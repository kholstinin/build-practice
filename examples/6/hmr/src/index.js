function route() {
  const { pathname } = location;

  if (pathname === "/" || pathname === "") {
    import("./pages/home").then(({ render }) => {
      render();
    });
  } else if (pathname === "/about") {
    import("./pages/about").then(({ render }) => {
      render();
    });
  }
}

route();
