/*
Problem Statement:
Reverse a string in place

Solution:
Loop thourgh first half of string swappign the values

Running time - O(log n)

*/

function reverseStr(str) {
    let arr = str.split('');
    const mid = Math.floor(str.length/2);

    for(let i = 0; i < mid; i++) {
        // swap
        let temp = arr[i];
        arr[i] = arr[arr.length - i];
        arr[arr.length - i] = temp;

    }
}