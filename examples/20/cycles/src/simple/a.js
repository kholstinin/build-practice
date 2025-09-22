import { b } from './b.js';

console.log('a.js загружен');
export const a = 'Модуль A';

export function fromA() {
  console.log('Функция из A вызывает b:', b);
}