const obj = {
  name: 'Drakkar',
  age: 22,
  isCool: true,
} as const;

console.log(obj.name);
console.log(obj['age']);
