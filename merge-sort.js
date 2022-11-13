console.log("\nmerge sort\nassignment #2\n");

const mergeSort = (arr) => {
  // base case:if arr.len < 2, return
  if (arr.length < 1) return;

  // else
  //   sort left half of arr
  //   sort right half of arr
  //   merge sorted halves
};

//
// Print functions
//

const printInOut = (input, callback) => {
  console.log(`in:\t${input}`);
  console.log(`out:\t${callback(input)}\n`);
};

//
// Sample Tests
//

const arrayOne = [1, 9, 3, 2, 5, 7, 4];
const arrayTwo = [20, 31, 55, 11, 6, 2, 1];

printInOut(arrayOne, mergeSort);
printInOut(arrayTwo, mergeSort);
