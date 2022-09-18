/*******************************************************************************
Write a function `count` that accepts an array and a callback as arguments. The
function should return the number of elements of the array that return true when
passed to the callback.

Examples:

let result1 = count([18, 5, 32, 7, 100], function (n) {
    return n % 2 === 0;
});
console.log(result1); // 3

let result2 = count([17, 5, 31, 7, 100], function (n) {
    return n % 2 === 0;
});
console.log(result2); // 1

let result3 = count(['follow', 'the', 'yellow', 'brick', 'road'], function (str) {
    return str.includes('o');
});
console.log(result3); // 3

let result4 = count(['follow', 'the', 'yellow', 'brick', 'road'], function (str) {
    return str.includes('x');
});
console.log(result4); // 0
*******************************************************************************/

let count = function(array, callback) {
    let truths = 0;
    for(i = 0; i < array.length; i++) {
        if(callback(array[i], i)) {
            truths++;
        }
    }
    return truths;
};

let truthOrLies = count([2, 5, 6, 1, 4, 5], function(element, i) {
    if(i % element === 0) {
        return true;
    }
    return false;
});

console.log(truthOrLies);


/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = count;
