require.config({
    paths: {
        add: './add'
    }
});

require(["add"], function ({ add }) {
  console.log(add(2, 3));
});
