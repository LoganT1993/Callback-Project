/*******************************************************************************
Write a function `reject` that accepts an array and callback as arguments. The
function should call the callback for each element of the array, passing in the
element. The function should return a new array
containing elements of the original array that result in false when given to the
callback.

Note that that you cannot use the Array `map` or `filter` methods to solve this
problem.

Examples:

let isEven = function(n) {
    return n % 2 === 0;
};
console.log(reject([7, 8, 5, 6, 12, 11], isEven)); // [ 7, 5, 11 ]

let hasA = function(s) {
    return s.toLowerCase().includes('a');
};
console.log(reject(['breadth', 'GRAPH', 'depth', 'height'], hasA)); // [ 'depth', 'height' ]
*******************************************************************************/
let isPerfectSquare = function(num) {
    if(num % Math.sqrt(num) === 0) {
        return true;
    }
    return false;
}


let reject = function(array, callback) {
    let newArray = [];
    for(i = 0; i < array.length; i++) {
        if(callback(array[i]) === false) {
            newArray.push(array[i]);
        }
    }
    return newArray;
};

let squares = reject([4, 8, 5, 6, 12, 16], isPerfectSquare);

console.log(squares);




/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = reject;
