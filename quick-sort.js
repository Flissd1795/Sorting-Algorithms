// Version creating new arrays 
function quickSort(arr) {
    // Base case: arrays have 1 or less element are sorted 
    if (arr.length <= 1) {
        return arr;
    }

    // Picking middle value as the pivot 
    // const pivot = Math.floor(((arr.length - 1) / 2));
    const pivotIndex = Math.floor(arr.length / 2)
    const pivot = arr[pivotIndex];

    // Each time quickSort runs it creates 2 new arrays
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


// Version editing array in place 
function quickSortInPlace(arr, low = 0, high = arr.length -1) {
    // Base case: when indexes meet, array is sorted
    if (low >= high) return; 

    const pivot = arr[high]; // Pivot as last index of arr
    let i = low - 1; // Index tracks behind and swaps values when needed

    for (let j = low; j < high; j++) {
        // If the value of j is less than the pivot 
        if (arr[j] <= pivot) {
            // Increment i so it tracks behind j
            i++;
            // Swap values of i and j
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
        // Swap pivot value so it's in right position 
        [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
        // Store pivot index to use as low/high parameter in next function calls
        const pivotIndex = i + 1;

        // Recursively sort left and right partitions
        quickSortInPlace(arr, low, pivotIndex - 1);
        quickSortInPlace(arr, pivotIndex + 1, high);

        return arr;
}

console.log(quickSortInPlace([4, 10, 7, 3, 5, 12, 40, 1, 33]));
console.log(quickSortInPlace([4, 8, 3, 1, 7, 3]));
console.log(quickSortInPlace([6, 5, 4, 3, 2, 1]));