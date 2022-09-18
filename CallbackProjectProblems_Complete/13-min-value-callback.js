/*******************************************************************************
Write a function `minValueCallback` that accepts an array and an optional callback as arguments.
If a callback is not passed in, then the function should return the smallest
value in the array. If a callback is passed in, then the function should return
the result of the smallest value being passed into the given callback.

Examples:
console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3

*******************************************************************************/

let minValueCallback = function(array, ...callback) {
    console.log(callback[0]);
    if(callback[0] != undefined) { // do we have a callback?
        cb = callback[0];
        minValue = cb(array[0]);
        for(i = 1; i < array.length; i++) {
            if(cb(array[i]) < minValue) {
                minValue = cb(array[i]);
            }
        }
        return minValue;
    }
    else if (callback[0] === undefined) {
        minValue = array[0];
        for(i = 0; i < array.length; i++) {
            if(array[i] < minValue) {
                minValue = array[i];
            }
        }
        return minValue;
    }
};

let squarer = function(num) {
    return num*num;
}

let mValue = console.log(minValueCallback([64, 25, 49, 9, 100], squarer));
//console.log(mValue);



/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = minValueCallback;
