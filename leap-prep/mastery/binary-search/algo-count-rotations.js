function countRotations(arr, low, high) {
    if (high < low)
        return 0;

    // If there is only one element left
    if (high == low)
        return low;

    let mid = (high - low)/2; 

    // Check if element (mid+1) is minimum element. 
    if (mid < high && arr[mid+1] < arr[mid]) {
        return (mid + 1);
    }

    // Check if mid itself is minimum element
    if (mid > low && arr[mid] < arr[mid - 1]) {
        return mid;
    }

    // Decide whether we need to go to left 
    // half or right half
    if (arr[high] > arr[mid]) {
        return countRotations(arr, low, mid - 1);
    }

    return countRotations(arr, mid + 1, high);
};