// FIBONACCI SEQUENCE

console.log("Fibonacci Sequence\nAssignment #1");

//
// Function #1: Using Iteration
//

const fibsIteration = (number) => {
  // create an array
  let fib = [];
  // loop "number" of times
  for (let i = 0; i < number; i++) {
    // if i = 0 or 1, push those to array
    if (i === 0 || i === 1) {
      fib.push(i);
      continue;
    }
    // else push fib[i-2] + fib[i-1]
    fib.push(fib[i - 2] + fib[i - 1]);
  }
  // return array
  return fib;
};

//
// Function #2: Using Recursion
//

//
// Print function
//

const printFib = (number, callback) => {
  console.log(`\nInput: ${number}`);
  console.log(callback(number));
};

printFib(5, fibsIteration);
printFib(8, fibsIteration);
