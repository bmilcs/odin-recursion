console.log("\nmerge sort\nassignment #2\n");

const mergeSort = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0)
    return "Error: An array with at least one value is required!";

  // base case: array has a single element
  if (arr.length < 2) return arr;

  // get middle point
  const mid = arr.length / 2;

  // remove left side of array
  const left = arr.splice(0, mid);

  // merge the result of mergeSort left & right
  return merge(mergeSort(left), mergeSort(arr));
};

const merge = (left, right) => {
  const arr = [];

  // while BOTH left & right arrays
  // have numbers left, push the lesser # of index 0 to array
  // and remove it from left/array array
  while (left.length && right.length) {
    left[0] <= right[0] ? arr.push(left.shift()) : arr.push(right.shift());
  }

  // if any leftover numbers exist, push them to the array
  return [...arr, ...left, ...right];
};

//
// Print function
//

const printInOut = (input, callback) => {
  console.log(`in:\t${input}`);
  console.log(`out:\t${callback(input)}\n`);
};

//
// Sample Tests
//

const emptyArray = [];
const arrayOne = [1, 9, 3, 2, 5, 7, 4, 1, 1];
const arrayTwo = [20, 31, 55, 11, 6, 89, 19, 77, 555, 101];

printInOut(emptyArray, mergeSort);
printInOut(arrayOne, mergeSort);
printInOut(arrayTwo, mergeSort);
