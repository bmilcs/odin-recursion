//
// Print functions
//

const printTitle = (title) => {
  console.log("-----------------------------");
  console.log(title);
  console.log("-----------------------------\n");
};

const printInOut = (input, callback) => {
  console.log(`in:\t${input}`);
  console.log(`out:\t${callback(input)}\n`);
};

//
// #1: Natural Numbers, Under X, Sum of multiples of 3/5
//

const getMultiplesOf3And5 = (num) => {
  --num;

  // base case
  if (num === 1) return 0;

  const isDivisibleBy3 = num % 3 === 0;
  const isDivisibleBy5 = num % 5 === 0;

  if (isDivisibleBy3 || isDivisibleBy5) return num + getMultiplesOf3And5(num);
  return getMultiplesOf3And5(num);
};

printTitle("natural numbers under X\nthat are multiples of 3 & 5");

printInOut(10, getMultiplesOf3And5);
printInOut(1000, getMultiplesOf3And5);

//
// Sum Even Fibonacci Numbers
//

const sumOfEvenFibonacciNumbers = (limit, arr = [0, 1]) => {
  const nextNum = arr[arr.length - 1] + arr[arr.length - 2];
  if (nextNum < limit)
    return sumOfEvenFibonacciNumbers(limit, [...arr, nextNum]);
  return arr.reduce(
    (total, fibNum) => (fibNum % 2 === 0 ? total + fibNum : total),
    0
  );
};

printTitle("sum of even fibonacci numbers");
printInOut(4000000, sumOfEvenFibonacciNumbers);

//
// Prime Factors
//  natural number, not 1, whos only factors
//  are 1 and itself
//

const isPrimeFactor = (num, x = 2) => {
  if (x === num) return true;
  if (num % x === 0) return false;
  return isPrimeFactor(num, x + 1);
};

printTitle("is a prime factor of a number");
printInOut(5, isPrimeFactor);
printInOut(29, isPrimeFactor);
printInOut(30, isPrimeFactor);
