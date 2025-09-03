const data = Array(1000)
  .fill(0)
  .map((_, i) => ({
    id: <string>crypto.randomUUID(),
    name: <string>crypto.randomUUID(),
  }));

export function testData(): { id: string; name: string }[] {
  return data;
}
