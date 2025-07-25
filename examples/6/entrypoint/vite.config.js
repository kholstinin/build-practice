import path from 'node:path';

export default {
  build: {
    rollupOptions: {
      input: {
        about: path.resolve(__dirname, "about.html"),
        home: path.resolve(__dirname, "home.html"),
      },
    },
  },
};
