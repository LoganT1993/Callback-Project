/*******************************************************************************
Write a function `mapMutator` that accepts an array and a callback as arguments.
The function should pass each element and index into the callback and use the result
to overwrite elements of the original array, mutating the array.

Examples:

let arr1 = [4, 2, 6, 5];
mapMutator(arr1, function (el) {
    return el * 2;
});
console.log(arr1);  // [ 8, 4, 12, 10 ]

let arr2 = [8, 9, 10];
mapMutator(arr2, function (el, i) {
    return el * i;
});
console.log(arr2); // [ 0, 9, 20 ]
*******************************************************************************/

let mapMutator = function(array, callback) {
    console.log(array);
    for(i = 0; i < array.length; i++) {
        //console.log(array[i]);
        array.splice(i, 1, callback(array[i], i))
        //array[i] = callback(array[i]);
        //console.log(array[i]);
    }
    console.log(array);
    return array;
};

let cuber = function(num) {
    return num*num*num;
}

let newArray = mapMutator([4, 2, 3, 5], function (el, i) {
    return el * i;
});

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = mapMutator;
