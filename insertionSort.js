/*
 * Complete the 'insertionSort1' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY arr
 */

function insertionSort1(n, arr) {
    // Write your code here
    let key, j;
    for(let i = 1; i<n;i++) {
        key=arr[i];
        j=i-1;
        
        while(j>=0 && arr[j] > key) {
            arr[j+1] = arr[j];
            j--;
            console.log(arr.toString().replaceAll(',', " ")); 
        }
        arr[j+1] = key;
    }
    console.log(arr.toString().replaceAll(',', " ")); 
}
