console.log("\nfibonacci sequence\nassignment #1\n");

//
// Function #1: Iterative Fibonacci
//

const fibIteration = (num) => {
  // create an array
  let arr = [];
  // loop "num" times
  for (let i = 0; i < num; i++) {
    // if 0 or 1, push value to array
    if (i === 0 || i === 1) {
      arr.push(i);
      continue;
    }
    // else push last 2 numbers: fib[i-2] + fib[i-1]
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  // return final result
  return arr;
};

//
// Function #2: Recursive Fibonacci
//

const fibRecursive = (num, arr = []) => {
  // base case: if num is zero, return array
  if (num === 0) return arr;
  // if arr.length is zero (the original function call)
  // recursively call the function with the minimum data needed
  // to perform the fibonacci sequence & subtract 2 from "num" count:
  else if (arr.length === 0) return fibRecursive(num - 2, [0, 1]);
  else {
    // else recursively call the function with num - 1,
    // spreading the original array out & adding the
    // sum of the last 2 numbers to the end of the array
    return fibRecursive(--num, [
      ...arr,
      arr[arr.length - 2] + arr[arr.length - 1],
    ]);
  }
};

//
// Print functions
//

const printTitle = (title) => {
  console.log("-----------------------------");
  console.log(title);
  console.log("-----------------------------\n");
};

const printFib = (number, callback) => {
  console.log(`in:\t${number}`);
  console.log(`out:\t${callback(number)}\n`);
};

//
// Sample Tests
//

printTitle("iterative fibonacci:");

printFib(5, fibIteration);
printFib(8, fibIteration);
printFib(15, fibIteration);

printTitle("recursive fibonacci:");

printFib(5, fibRecursive);
printFib(8, fibRecursive);
printFib(15, fibRecursive);
