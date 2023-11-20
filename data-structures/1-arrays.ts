const arr: Array<string | number> = [1, 2, 3, 4, 5];
arr.push('drakkar'); // add element at the end
arr.unshift(0); // add element in the beginning
arr.pop(); // remove element at the end
arr.shift(); // remove element in the beginning

for (const item of arr) console.log(item);

const mapped = arr.map((item) => {
  if (typeof item === 'number') return item * 2;
});
