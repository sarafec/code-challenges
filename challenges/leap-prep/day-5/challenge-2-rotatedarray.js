/*
Problem Statement: 
Given a sorted array that has been shifted, find out how much it has been shifted.

My thoughts:
Unlike most binary search solutions, this question does not search for a value. 
It checks the placement of values and returns a count.

Solution:
We could do a linear serach, but since the array is sorted we can cut each search size
in half giving us a better runtime. This solution only works if you have distinct values.
Each run through the function we will check 4 terminating cases
1 - our highest array index is less than our lowest array index
2 - when our highest array index is equal to our lowest array index
3 - when our right neighbor is greater than our midpoint
4 - when our midpoint is less than our left neighbor

If none of those conditions have been met, we'll cycle through the array cutting it in half 
each time.
We'll manage this by checking to see if the right side of the array is sorted (arr[mid] will be less than arr[high]).
If that is the case we'll move left. If not, we'll know our rotation exists on the right side of the array and move right.
We are choosing to check the right side of the array arbitrarily, but we'll only check one side because it'll give us the 
information we need for both sides.


Running time: O(log n)

*/

function countRotations(arr, low, high) {
    // terminating case 1 - array not rotated
    if (high < low) return 0;
    // terminating case 2 - only one item in the array
    if (high === low) return low;

    const mid = Math.floor((high - low)/2);

    // terminating case 3 - mid is greater than the item above it
    if(mid < high && arr[mid + 1] < arr[mid])
        return (mid+1);
    
    // terminating case 4 - item below mid is greater than the mid
    if (mid > low || arr[mid] < arr[mid-1])
        return mid;
    
    // recursive case 1 - right side of arary sorted, move left
    if (arr[high] > arr[mid])
        return countRotations(arr, low, mid-1);
    
    // recursive case 2 - move right
    return countRotations(arr, mid+1, high);
}