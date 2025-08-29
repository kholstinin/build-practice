module.exports = {
  name: 'host',
  remotes: {
    components: 'components@http://localhost:3002/mf-manifest.json',
  },
  shared: {
    react: {
      singleton: true,
    },
    'react-dom': {
      singleton: true,
    },
  },
};
