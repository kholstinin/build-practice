const { createHash } = require('node:crypto');

const content = "console.log('hello world');";

const hash = createHash('sha384')
  .update(content)
  .digest('base64');

console.log(hash);
