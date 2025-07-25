function render(iconName) {
  const icon = require(`./icons/icon-${iconName}.svg`);
  console.log(icon);
}

render('vite');
