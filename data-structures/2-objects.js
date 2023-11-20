var obj = {
    name: 'Drakkar',
    age: 22,
    isCool: true,
    sayPresent: function () { return console.log("".concat(obj.name, " is present!")); },
    sayAbsent: function () {
        console.log("".concat(this.name, " is absent!"));
    },
};
console.log(obj.name);
console.log(obj['age']);
obj.sayPresent();
obj.sayAbsent();
