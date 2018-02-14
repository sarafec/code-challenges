/*

Explaination:
Looking for the point where mid-1 is greater than mid. Or mid+1 is less than mid.
At that point, the sorted array is not behaving as it should and that is where the
rotation is.
Instead of looking for a value, you're looking for a condition that would make a 
sorted list appear unsorted.

*/

function countRotations(arr, low, high) {
    if (high < low)
        return 0;

    // If there is only one element left
    if (high === low)
        return low;

    let mid = Math.floor((high - low)/2); 

    // current (mid) is greater than current +1, then current+1 starts rotation
    if (mid < high && arr[mid+1] < arr[mid]) {
        return mid + 1;
    }

    // current (mid) is less than current-1, then current starts rotation
    if (mid > low && arr[mid] < arr[mid - 1]) {
        return mid;
    }

    // if the right side array is sorted, go left
    if (arr[high] > arr[mid]) {
        return countRotations(arr, low, mid - 1);
    }

    // if the left side of array is sorted, go right
    return countRotations(arr, mid + 1, high);
};