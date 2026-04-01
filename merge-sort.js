// Use recursive function to divide arrays into single elements
function mergeSort(arr) {
    // Base case: arrays have 1 or less element are sorted 
    if (arr.length <= 1) {
        return arr;
    }

    // Split array into two halves
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    // Recursively sort both halves
    // Merge happens after array split into single elements (base case reached)
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    const result = [];
    // Tracks left array e.g. [1, 4, 6]
    let i = 0; 
    // Tracks right array e.g. [2, 3, 5]
    let j = 0; 

    // While both arrays have elements 
    while (i < left.length && j < right.length) {
        // If (1 < 2), (4 < 2)
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    return result
    .concat(left.slice(i))
    .concat(right.slice(j));
}

console.log(mergeSort([5, 12, 4, 1, 2, 8, 2, 6, 10]));
console.log(mergeSort([4, 8, 3, 1, 7, 3]));
console.log(mergeSort([6, 5, 4, 3, 2, 1]));