/*
Problem Statement:
Given an array of sorted integers find the closest value to a given
number.

My thoughts:
Becasue the array is sorted we can use binary search.

*/

function findClosest(arr, target) {
    let arrLength = arr.length;

    if (target <= arr[0])
        return arr[0];
    if (target >= arr[arrLength-1])
        return arr[arrLength-1];
    
    let low = 0,
        high = arrLength,
        mid = 0;
    while (low < high) {
        mid = (low + high)/2;

        if (arr[mid] === target)
            return arr[mid];
        
        if (target < arr[mid]) {
            if (mid > 0 && target > arr[mid -1])
                return getClosest(arr[mid - 1], arr[mid], target);
            j = mid;
        } else {
            if (mid < arrLength-1 && target < arr[mid+1])
                return getClosest(arr[mid], arr[mid+1], target);
            low = mid + 1;
        }
    }
    return arr[mid];
}

function getClosest(val1, val2, target) {
    return target - val1 >= val2 - target ? val1 : val2;
}