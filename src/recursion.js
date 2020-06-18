/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {

  //number can't be negative
  if (n<0) {
    return null;
  }

  //if number is zero, factorial is 1
  //this is the base case
  if (n === 0) {
    return 1;
  }

  return (n*factorial(n-1));
};

/*
########################################################
FACTORIAL COMPLETED
########################################################
*/

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {

  //base case. if length is 0 then return 0
  if (array.length === 0) {
    return 0;
  }

  //creates a smaller array that is the input array without it's last element
  var smallerArr = array.slice(0,array.length-1);

  //recursive case
  return array[array.length-1] + sum(smallerArr);

};

/*
########################################################
SUM COMPLETED
########################################################
*/

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {

  //base case. if array's length is 0 then return 0
  if (array.length === 0) {
    return 0;
  }

  //last element of the input array
  var lastElem = array[array.length-1];

  //if the last element is an array
  //then we must figure out the sum of that array and set it equal to that element
  if (Array.isArray(lastElem)) {
    lastElem = arraySum(lastElem);
  }

  //creates a smaller array that is the input array without its last element
  var smallerArr = array.slice(0,array.length-1);

  //recursive case
  return lastElem + arraySum(smallerArr);

};

/*
########################################################
ARRAYSUM COMPLETED
########################################################
*/

// 4. Check if a number is even.
var isEven = function(n) {
  if (n === 1 || n === -1) {
    return false;
  } else if (n === 0 || n === 2) {
    return true;
  }

  return isEven(Math.abs(n-2));
};

/*
########################################################
ISEVEN COMPLETED
########################################################
*/

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {


  //base case
  if (n === 0) {
    return 0;
  }

  //recursive case if num is positive
  if (n>0) {
    return (n-1) + sumBelow(n-1);
  }

  //recursive case if num is negative
  if (n<0) {
    return (n+1) + sumBelow(n+1);
  }
};

/*
########################################################
SUMBELOW COMPLETED
########################################################
*/

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {

  //base case
  if (x === y || x+1 === y || x-1 === y) {
    return [];
  }

  //recursive case if x < y
  if (x < y) {
    return [x+1].concat(range(x+1,y));
  }

  //recursive case if x > y
  if (x > y) {
    return [x-1].concat(range(x-1,y));
  }
};

/*
########################################################
RANGE COMPLETED
########################################################
*/

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  //base case
  if (exp === 0) {
    return 1;
  }

  //recursive case if exponent is negative
  if (exp < 1) {
    return parseFloat(((1/base) * exponent(base, exp+1)).toFixed(5));
  }

  //recursive case if exponent is positive
  return base * exponent(base, exp-1);
};

/*
########################################################
EXPONENT COMPLETED
########################################################
*/

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  //base cases
  if (n === 1) {
    return true;
  } else if (n < 1) {
    return false;
  }

  //recursive case
  return powerOfTwo(n/2);
};

/*
########################################################
POWEROFTWO COMPLETED
########################################################
*/

// 9. Write a function that reverses a string.
var reverse = function(string) {
  //base case
  if (string.length === 0) {
    return '';
  }

  //recursive caes
  return string[string.length-1] + reverse(string.slice(0,string.length-1));
};

/*
########################################################
REVERSE COMPLETED
########################################################
*/

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  //make lowercase and remove space
  string = string.split(' ').join('').toLowerCase();

  //base case if palindrome
  if (string.length === 0) {
    return true;
  }

  //base case it not a palindrome (if the front and end characters dont match)
  if (string[0] !== string[string.length-1]) {
    return false;
  }

  //recursive case
  return palindrome(string.slice(1,string.length-1));
};

/*
########################################################
PALINDROME COMPLETED
########################################################
*/


// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {

  if (x === 0 && y === 0) {
    return NaN;
  }


  if (x < 0 && y > 0) {

    if (x - x - x < y) {
      return x;
    }

    return modulo(x+y,y);

  } else if (x < 0 && y < 0) {

    if (x > y) {
      return x;
    }

    return modulo(x-y,y);

  }  else if (x > 0 && y < 0) {

    if (x < y - y - y) {
      return x;
    }

    return modulo(x+y,y);

  } else {

    if (x < y) {
      return x;
    }

    return modulo(x-y,y);

  }

};

/*
########################################################
MODULO COMPLETED
########################################################
*/

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
  if (x === 1) {
    return y;
  } else if (y === 1) {
    return x;
  } else if (x === 0 || y === 0) {
    return 0;
  }

  if (x > 0 && y > 0) {
    return x + multiply(x,y-1);
  }

  if (x > 0  && y < 0) {
    return y + multiply(x-1,y);
  }

  if (x < 0  && y > 0) {
    return x + multiply(x,y-1);
  }

  if (x < 0 && y < 0) {
    return (x - x - x) + multiply (x, y+1);
  }

};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
  if (y === 1) {
    return x;
  } else if (y === 0) {
    return NaN;
  }

  if (x === 0) {
    return 0;
  }

  if (x > y) {
    if (x < 0) {
      return 0;
    }
    return 1 + divide(x-y,y);
  }

  if (x < y) {
    return 0;
  }
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {

  if (x <= 0 || y <= 0) {
    return null;
  }

  if (y > x) {

  }


};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {

  if (str1.length === 0 && str2. length === 0) {
    return true;
  } else if (str1.length === 0 && str2. length !== 0) {
    return false;
  } else if (str1.length !== 0 && str2. length === 0) {
    return false;
  }

  if (str1[str1.length] === str2[str2.length]) {
    str1 = str1.slice(0,str1.length-1);
    console.log('str1:'+str1);
    str2 = str2.slice(0,str2.length-1);
    console.log('str2:'+str2);
    return compareStr(str1,str2);
  } else {
    return false;
  }
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {

  if (str.length === 0) {
    return [];
  }

  let curLetterArr = [str[0]];


  str = str.slice(1,str.length);

  return curLetterArr.concat(createArray(str));
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
