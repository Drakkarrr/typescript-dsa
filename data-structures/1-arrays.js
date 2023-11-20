var arr = [1, 2, 3, 4, 5];
arr.push('drakkar'); // add element at the end
arr.unshift(0); // add element in the beginning
arr.pop(); // remove element at the end
arr.shift(); // remove element in the beginning
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var item = arr_1[_i];
    console.log(item);
}
