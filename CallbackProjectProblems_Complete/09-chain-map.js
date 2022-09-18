/*******************************************************************************
Write a function `chainMap` that accepts a value and any number of callbacks as
arguments. The function should return the final result of passing the value through
all of the given callbacks. In other words, if three callbacks are given then:

- the value is given to the first callback
- the result of the first callback is given to the second callback
- the result of the second callback is given to the third callback
- the result of the third callback is the final result

Examples:

let add5 = function(n) {
    return n + 5;
};

let half = function(n) {
    return n / 2;
};

let square = function(n) {
    return n * n;
};

console.log(chainMap(25, add5));                // 30
console.log(chainMap(25, add5, half));          // 15
console.log(chainMap(25, add5, half, square));  // 225
console.log(chainMap(4, square, half));         // 8
console.log(chainMap(4, half, square));         // 4
*******************************************************************************/

let cuber = function(num) {
    return num*num*num;
}

let addThree = function(num) {
    return num+3;
}
let divTen = function(num) {
    return num/10;
}

let chainMap = function(number, ...arguments) {
    let newNum = number;
    for(i = 0; i < arguments.length; i++) {
        let cb = arguments[i];
        newNum = cb(newNum);
    }
    return newNum;
};

let number = console.log(chainMap(4, cuber, addThree, divTen));

console.log(number);


/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = chainMap;
