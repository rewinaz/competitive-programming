/*
 * Complete the 'countSwaps' function below.
 *
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function countSwaps(a) {
    // Write your code here
    let n = a.length;
    let count=0;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      if (a[i] > a[j]) {
        let temp = a[i];
        a[i] = a[j];
        a[j] = temp;
        count++;
      }
    }
  }
  console.log("Array is sorted in " + count + " swaps.")
  console.log("First Element: " + a[0])
  console.log("Last Element: " + a[a.length-1])
}
