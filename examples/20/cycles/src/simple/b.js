import { a } from './a.js';

console.log('b.js загружен');
export const b = 'Модуль B';

export function fromB() {
  console.log('Функция из B вызывает a:', a);
}