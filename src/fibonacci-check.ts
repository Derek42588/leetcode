/*

fibonacci-check.ts

By definition first 2 Fibonacci numbers are
 defined as 0 and 1. nth Fibonacci number can be computed as sum of (n-2)th & (n-1)th Fibonacci numbers
Hence the Fibonacci numbers are as follows:
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
A number is given to you, how will you check if that number is a Fibonacci number or not?

*/

function fibonacciCheck(n: number): boolean {
  let pointer = 0;
  let greatestFib = 1;
  let fibMemo: { [key: number]: number } = {
    0: 0,
    1: 1,
  };

  while (greatestFib <= n) {
    if (fibMemo[pointer]) {
      greatestFib = fibMemo[pointer];
    } else {
      greatestFib = fibRecursive(pointer);

      fibMemo[pointer] = greatestFib;

      if (greatestFib === n) {
        break;
      }
    }
    pointer++;
  }

  function fibRecursive(num: number): number {
    if (num < 2) {
      return num;
    }

    return fibRecursive(num - 1) + fibRecursive(num - 2);
  }

  let x = Object.values(fibMemo);


  return x.includes(n);
}

fibonacciCheck(8);
