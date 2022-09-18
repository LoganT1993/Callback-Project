/*******************************************************************************
Write a function `selectiveMap` that accepts an array and two callbacks as arguments.
The function should return a new array where elements are replaced with the results
of calling the second callback on the element only if calling the first callback
on the element results in true. If calling the first callback on an element results
in false, then the element should not be changed in the new array.

Note that that you cannot use the Array `map` or `filter` methods to solve this
problem.

Examples:

function isEven(n) {
    return n % 2 === 0;
}

function isPositive(n) {
    return n > 0;
}

function square(n) {
    return n * n;
}

function flipSign(n) {
    return n * -1;
}

console.log(selectiveMap([8, 5, 10, 4], isEven, square));
// [ 64, 5, 100, 16 ]

console.log(selectiveMap([-10, 4, 7, 6, -2, -9], isEven, flipSign));
// [ 10, -4, 7, -6, 2, -9 ]

console.log(selectiveMap([-10, 4, 7, 6, -2, -9], isPositive, square));
// [-10, 16, 49, 36, -2, -9]

AFTER YOU ARE FINISHED WITH THIS PROBLEM, ASK FOR A CODE REVIEW
    (optional if you already asked a question for this problem.)
- Explain how you are using both of the callbacks in the function.
- What do you expect each callback function to be returning?
- How many times are you calling each callback function?
*******************************************************************************/
let cuber = function(num) {
    return num*num*num;
}

function isEven(n) {
    return n % 2 === 0;
}


let selectiveMap = function(array, callback1, callback2) {
    let newArray = [];
    console.log(array.length);
    for(i = 0; i < array.length; i++) {
        let element = array[i];
        //console.log(element);
        if(callback1(element)) { // Is the number even?
            newArray.push(callback2(element)) // Add the cubed element to the new array.
        }
        else { // This is if the number is NOT even.
            newArray.push(element); // Add the original element to the array.
        }
    }
    return newArray;
};

let number = selectiveMap([8, 5, 10, 4], isEven, cuber);
console.log(number);

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = selectiveMap;
