// FIBONACCI SEQUENCE

console.log("Fibonacci Sequence\nAssignment #1");

//
// Function #1: Using Iteration
//

const fibsIteration = (num) => {
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
// Function #2: Using Recursion
//

const fibsRecursive = (num, arr = []) => {
  if (num === 0) {
    return arr;
  } else if (arr.length === 0) return fibsRecursive(num - 2, [0, 1]);
  else {
    return fibsRecursive(--num, [
      ...arr,
      arr[arr.length - 2] + arr[arr.length - 1],
    ]);
  }
};

//
// Print function
//

const printFib = (number, callback) => {
  console.log(`\nInput: ${number}`);
  console.log(callback(number));
};

printFib(5, fibsIteration);
printFib(5, fibsRecursive);
printFib(8, fibsIteration);
printFib(8, fibsRecursive);
