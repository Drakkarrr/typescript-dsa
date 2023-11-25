const arr: Array<string | number> = [1, 2, 3, 4, 5];
arr.push('drakkar'); // add element at the end
arr.unshift(0); // add element in the beginning
arr.pop(); // remove element at the end
arr.shift(); // remove element in the beginning

// for (const item of arr) console.log(item);

const mapped = arr.map((item) => {
  if (typeof item === 'number') return item * 2;
});

// console.log(mapped);

const filtered = arr.filter((item) => {
  if (typeof item === 'number') return item > 2;
});

// console.log(filtered);

const pilots = [
  {
    id: 1,
    name: 'Drakkar',
    years: 14,
  },
  {
    id: 2,
    name: 'Junrey',
    years: 30,
  },
  {
    id: 3,
    name: 'Lañas',
    years: 16,
  },
  {
    id: 4,
    name: 'Evangelist',
    years: 22,
  },
];

const totalYears = pilots.reduce((acc, pilot) => acc + pilot.years, 0);
// console.log(totalYears);

const pilotNames = pilots.reduce((acc, pilot) => {
  return acc + pilot.name + ' ';
}, '');

// console.log(pilotNames);

const sortedNames = pilots.sort((a, b) => {
  if (a.name > b.name) return 1;
  else if (a.name < b.name) return -1;
  return 0;
});

console.log(sortedNames);

const sortedYears = pilots.sort((a, b) => {
  if (a.years > b.years) return 1;
  else if (a.years < b.years) return -1;
  return 0;
});

console.log(sortedYears);
