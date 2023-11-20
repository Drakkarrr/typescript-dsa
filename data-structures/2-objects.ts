const obj = {
  name: 'Drakkar',
  age: 22,
  isCool: true,
  sayPresent: (): void => console.log(`${obj.name} is present!`),
  sayAbsent: function (): void {
    console.log(`${this.name} is absent!`);
  },
} as const;

console.log(obj.name);
console.log(obj['age']);
obj.sayPresent();
obj.sayAbsent();
