export default function MyLoader(source) {
  const data = source.split('\n');

  return `export default ${JSON.stringify(data)}`;
}
