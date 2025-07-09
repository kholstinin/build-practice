const fs = require('fs');

function build(entryPath, outputPath) {
  const entryContent = fs.readFileSync(entryPath, 'utf-8');
  const splitContent = entryContent.split('\n');

  const result = [];
  splitContent.map((line) => {
    if (line.startsWith('require')) {
      const requirePath = line.match(/\('(.*)'\)/)[1];
      const resolvedFileContent = fs.readFileSync(`${requirePath}.js`, 'utf-8');
      result.push(resolvedFileContent);
    } else {
      result.push(line);
    }
  })

  fs.writeFileSync(outputPath, result.join('\n'));
}

const entryPath = './index.js';
const outputPath = './bundle.js';

build(entryPath, outputPath);
