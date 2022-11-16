console.log("\nfibonacci sequence\nassignment #1\n");

//
// Function #1: Iterative Fibonacci
//

const fibIteration = (num) => {
  let arr = [];

  // loop "num" times
  for (let i = 0; i < num; i++) {
    // if 0 or 1, push directly to array
    if (i === 0 || i === 1) {
      arr.push(i);
      continue;
    }
    // else push last 2 numbers: fib[i-2] + fib[i-1]
    arr.push(arr[i - 2] + arr[i - 1]);
  }

  return arr;
};

//
// Function #2: Recursive Fibonacci
//

const fibRecursive = (num) => {
  if (num < 2) return [0];
  if (num < 3) return [0, 1];
  const arr = fibRecursive(num - 1);
  return [...arr, arr[num - 2] + arr[num - 3]];
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
