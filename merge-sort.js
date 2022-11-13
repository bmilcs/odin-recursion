console.log("\nmerge sort\nassignment #2\n");

const mergeSort = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return "Error: An array with at least one value is required!";
  }

  if (arr.length < 2) {
    // base case: array has a single index, return array
    return arr;
  } else {
    // get low, mid, high
    const low = 0;
    const high = arr.length;
    const mid = Math.floor(high / 2);

    // split array into 2 sides
    const left = arr.slice(low, mid);
    const right = arr.slice(mid, high);

    // merge the result of mergeSort left & right
    return merge(mergeSort(left), mergeSort(right));
  }
};

const merge = (left, right) => {
  const arr = [];

  // while BOTH left & right arrays
  // have numbers left, push the lesser # of index 0 to array
  // and remove it from left/array array
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      arr.push(left.shift());
    } else arr.push(right.shift());
  }

  // if any leftover numbers exist, push them to the array
  while (left.length) arr.push(left.shift());
  while (right.length) arr.push(right.shift());

  return arr;
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
