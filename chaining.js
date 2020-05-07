// Requirements
// Using one single line of JavaScript code, complete the following tasks on the array of integers below.

// Sort the numbers in descending order (10, 9, 8, 7, etc).
// Remove any integers greater than 19.
// Multiply each remaining number by 1.5 and then subtract 1.
// Then output (either in the DOM or the console) the sum of all the resulting numbers.

const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

console.log(integers.sort((a, b) => b - a).filter(num => num < 19).map(num => num * 1.5 - 1).reduce((a, b) => a += b))

// METHOD NOTES
// The sort() method sorts the elements of an array in place and returns the sorted array. *DEFAULT SORTS BY ASCENDING*
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

