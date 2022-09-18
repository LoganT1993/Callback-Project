/*******************************************************************************
Write a function `xorSelect` that accepts an array and two callback as arguments.
The function should return a new array containing elements of the original array
that result in true when passed in one of the callbacks, but not both.

Examples:

let isEven = function(n) {
  return n % 2 === 0;
};

let isPositive = function(n) {
  return n > 0;
};

console.log(xorSelect([-2, -1, 1, 2, 3, 4], isEven, isPositive));
// [ -2, 1, 3 ]


let longString = function(s) {
  return s.length > 4;
};

let startsA = function(s) {
  return s[0] === "a";
};

console.log(
  xorSelect(["art", "academy", "app", "cat", "buttery"], longString, startsA)
);
// [ 'art', 'app', 'buttery' ]
*******************************************************************************/

let xorSelect = function(array, callback1, callback2) {
  truths = 0;
  newArray = [];
  for(i = 0; i < array.length; i++) {
    truths = 0;
    if(callback1(array[i])) {
      truths++;
    }
    if(callback2(array[i])) {
      truths++;
    }
    if(truths === 1) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

let isPositive = function(num) {
  if(num >= 0) {
      return true;
  }
  return false;
}

let isEven = function(num) {
  if(num % 2 === 0) {
      return true;
  }
  return false;
}

console.log(xorSelect([-2, -1, 1, 2, 3, 4], isEven, isPositive));
// [ -2, 1, 3 ]

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = xorSelect;
