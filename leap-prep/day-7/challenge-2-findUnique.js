/*
Problem Statement:
Given a sorted array, find integer that appears once where all others appear twice.

Solution:
Use binary search to narrow down array to one elem. 
*/

function findUnique(arr, start, end) {
    if (start > end) {
        return -1;
    }

    if (start === end) {
        return arr[start];
    }

    let mid = Math.floor((start + end)/2);

    if(mid % 2 === 0) {
        if(arr[mid] === arr[mid + 1]) {
            return findUnique(arr, mid + 2, end);
        } else {
            return findUnique(arr, start, end);
        }
    } else {
        if(arr[mid] === arr[mid - 1]) {
            return findUnique(arr, mid + 1, end);
        } else {
            return findUnique(arr, start, end);
        }
    }
}