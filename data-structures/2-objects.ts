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

const car = {
  model: 'Tesla',
  year: 2020,
  isElectric: true,
  price: 100000,
};

console.log(Object.keys(car));
// console.log(Object.values(car));
