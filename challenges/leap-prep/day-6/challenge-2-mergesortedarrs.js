/*
Problem Statement:
Given two sorted arrays, merge them into one sorted array.

My thoughts:
Use merge sort

Solution:
Create a third array.
Copy the smaller element from arr1 or arr2 into arr3.
When there is none left to compare, add all aditional elements from
arr1 or arr2 to arr3.

Running time - O(n1 + n2) with O(n1 + n2) additional memory

*/

function mergeSortedArrs(arr1, arr2) {
    let arr3 = [],
        i = 0,
        j = 0,
        k = 0;
    
        while (i < arr1.length && j < arr2.length) {
            if(arr[i] < arr2[j]) {
                arr3[k++] = arr1[i++];
            } else {
                arr3[k++] = arr2[j++];
            }
        }

        while (i < arr1.length) {
            arr3[k++] = arr1[i++];
        }

        while (j < arr2.length) {
            arr3[k++] = arr2[j++];
        }
}