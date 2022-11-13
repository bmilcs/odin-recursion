console.log("\nfibonacci sequence\nassignment #1\n");

//
// Function #1: Iterative Fibonacci
//

const fibIteration = (num) => {
  // create an array
  let arr = [];
  // loop "number" of times
  for (let i = 0; i < num; i++) {
    // if i = 0 or 1, push those to array
    if (i === 0 || i === 1) {
      arr.push(i);
      continue;
    }
    // else push fib[i-2] + fib[i-1]
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  // return array
  return arr;
};

//
// Function #2: Recursive Fibonacci
//

const fibRecursive = (num, arr = []) => {
  // if num is zero, return array
  if (num === 0) {
    return arr;
    // else if arr.length is zero, call fibsRecursive with
    // num - 2 (first 2 numbers) & [0,1] - first 2 numbers of the fib sequence
  } else if (arr.length === 0) return fibRecursive(num - 2, [0, 1]);
  else {
    // else call fibsRecursive with num - 1
    //  spread the original array out & push the
    //  sum of the last 2 numbers
    return fibRecursive(--num, [
      ...arr,
      arr[arr.length - 2] + arr[arr.length - 1],
    ]);
  }
};

//
// Print functions
//

const printFib = (number, callback) => {
  console.log(`in:\t${number}`);
  console.log(`out:\t${callback(number)}\n`);
};

const printTitle = (title) => {
  console.log("-----------------------------");
  console.log(title);
  console.log("-----------------------------\n");
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
