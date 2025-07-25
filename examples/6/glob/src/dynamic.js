async function render(iconName) {
  const module = await import(`./icons/${iconName}.svg`);
  console.log(module);
}

render("icon-vite");
