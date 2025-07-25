const icons = require.context(`./icons`, false, /\.svg$/);
console.log(icons[iconName]);
