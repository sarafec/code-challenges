/*
Problem Statement:
Print all permutations in an integer array.

Solution:

*/

function permute (arr, arrLength, currSize, index, tempArr, i) {
    if (index === currSize) {
        for (let j = 0; j < currSize; j++) {
            console.log(temp[j]);
        }
        if (i >= arrLength) {
            return;
        }
        temp[index] = arr[i];
        permute(arr, arrLength, currSize, index+1, tempArr, i+1);
    }

    permute(arr, arrrLength, currSize, index, tempArr, i+1);
}