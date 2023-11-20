var arr = [1, 2, 3, 4, 5];
arr.push('drakkar'); // add element at the end
arr.unshift(0); // add element in the beginning
arr.pop(); // remove element at the end
arr.shift(); // remove element in the beginning
// for (const item of arr) console.log(item);
var mapped = arr.map(function (item) {
    if (typeof item === 'number')
        return item * 2;
});
// console.log(mapped);
var filtered = arr.filter(function (item) {
    if (typeof item === 'number')
        return item > 2;
});
// console.log(filtered);
var pilots = [
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
var totalYears = pilots.reduce(function (acc, pilot) { return acc + pilot.years; }, 0);
// console.log(totalYears);
var pilotNames = pilots.reduce(function (acc, pilot) {
    return acc + pilot.name + ' ';
}, '');
// console.log(pilotNames);
var sortedNames = pilots.sort(function (a, b) {
    if (a.name > b.name)
        return 1;
    else if (a.name < b.name)
        return -1;
    return 0;
});
console.log(sortedNames);
var sortedYears = pilots.sort(function (a, b) {
    if (a.years > b.years)
        return 1;
    else if (a.years < b.years)
        return -1;
    return 0;
});
console.log(sortedYears);
