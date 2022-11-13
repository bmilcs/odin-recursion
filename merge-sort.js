console.log("\nmerge sort\nassignment #2\n");

const mergeSort = (arr, level = 0) => {
  logRecursion(level, "start: " + arr);

  if (arr.length < 2) {
    // base case: array has a single index, return array
    logRecursion(level, "done: " + arr);
    return arr;
  } else {
    // get low, mid, high
    const low = 0;
    const high = arr.length;
    const mid = Math.floor(high / 2);
    logRecursion(level, "mid: " + arr[mid]);

    // split array into 2 sides
    const left = arr.slice(low, mid);
    const right = arr.slice(mid, high);

    // merge the result of mergeSort left & right
    const result = merge(
      mergeSort(left, level + 1),
      mergeSort(right, level + 1)
    );

    logRecursion(level, "sort: " + result);

    return result;
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
// Print functions
//

const logRecursion = (level, data) => {
  var space = "";
  for (i = 0; i < level; i++) {
    space += "  ";
  }
  console.log(space + data);
};

const printInOut = (input, callback) => {
  console.log(`in:\t${input}`);
  console.log(`out:\t${callback(input)}\n`);
};

//
// Sample Tests
//

const arrayOne = [1, 9, 3, 2, 5, 7, 4, 1, 1];
const arrayTwo = [20, 31, 55, 11, 6, 2, 1];

printInOut(arrayOne, mergeSort);
printInOut(arrayTwo, mergeSort);

//   merge sorted halves
//    A      B      C (sorted)
//    i      j      k
//    5      4

// merge(a, b, m, n)
//   i=1, j=1, k=1

// while (i <= m && j <= n)
//   if (a[i] < b[j])
//     c[k++] = a[i++]
//   else
//     c[k++] = b[j++]

// for (i; i<=m; i++)
//    c[k++] = a[i]
// for (j; j<=n; j++)
//    c[k++] = b[j]

// two way merge

//     1  2  3  4  5  6  7  8
//    ------------------------
// A | 9   3   7   5   6   4   8   2
// 1   3   9 | 5   7 | 4   6 | 2   8   (new array, then move back to orig array)
// 2   3   5   7   9 | 2   4   6   8
// 3   2   3   4   5   6   7   8   9

//  9 3 7 4 6 4 8 2
//  l             h
//  low           high

// algorithm mergeSort(l, h) - array[0] array[array.length]
//    if (l < h)
//      mid = l+h / 2;
//      mergeSort (l, mid)
//      mergeSort (mid + 1, h)
//      merge (l, mid, h)
