function quickSort(arr) {
    // Base case: arrays have 1 or less element are sorted 
    if (arr.length <= 1) {
        return arr;
    }

    // Picking middle value as the pivot 
    // const pivot = Math.floor(((arr.length - 1) / 2));
    const pivotIndex = Math.floor(arr.length / 2)
    const pivot = arr[pivotIndex];

    const left = [];
    const right = [];

    // Split the array (excluding the pivot)
    // Loop through and push values to either right of left array (if > or < pivot)
    for (let i = 0; i < arr.length; i++) {
        if (i === pivotIndex) continue;

        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    // Recursively call function on both left and right arrays 
    // Uses spread operator to take elements and spread them into another array (so it's not nested)
    return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort([4, 10, 7, 3, 5, 12, 40, 1, 33]));
console.log(quickSort([4, 8, 3, 1, 7, 3]));
console.log(quickSort([6, 5, 4, 3, 2, 1]));