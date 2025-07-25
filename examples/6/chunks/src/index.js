import { coolUtil } from "./utils";

function route() {
  const { href } = location;

  if (href === "/" || href === "") {
    import("./pages/home").then(({ render }) => {
      render();
    });
  } else if (href === "/about") {
    import("./pages/about").then(({ render }) => {
      render();
    });
  }
}

route();
coolUtil("a");
