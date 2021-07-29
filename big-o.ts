
function newArray(length: number) {
  return Array(length).fill(0).map((_, i) => i);
}

function logTime(name: string, func: () => void) {
  console.time(name);
  func();
  console.timeEnd(name);
}

function stupidFunc(arr: number[]) {
  let total = 0;
  return total;
}

const arr5 = newArray(5);
const arr1000 = newArray(1000);
const arr1000000 = newArray(1000000);

function sum(arr: number[]) {
  let total = 0; // O(1)
  for (let num of arr) { // O(n)
    total += num;
  }
  return total; // O(1)
  // O(n)
}

// logTime('sum', () => sum(arr5));
// logTime('sum', () => sum(arr1000));
// logTime('sum', () => sum(arr1000000))

function printMatrix(a: number) {
  for (let i = 0; i <= a; i++) { // O(1) + O(n) + O(n - 1)
    for (let j = 0; j <= a; j++) { // O(2n)
      
    }
  }
}

logTime('printMatrix', () => printMatrix(5));
logTime('printMatrix', () => printMatrix(50));
logTime('printMatrix', () => printMatrix(500));