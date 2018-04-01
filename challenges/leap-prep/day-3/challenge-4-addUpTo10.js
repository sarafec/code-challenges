/*
Problem Statement:
Given an array of integers, return the first two integers that
add up to 10.

My thoughts:
My first thought was that this problem needed an entirely different
solution. I think this is an improvement.

Running time - O(n)

*/

function findPairThatEqual10(arr) {
    // count array representing numbers 0-10
    let countArr = [0,0,0,0,0,0,0,0,0,0,0];

    // add to count array, if its pair is represented, print them
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] <= 10 && arr[i] >= 0) {
            countArr[arr[i]] += 1;
            if(countArr[10 - arr[i]] > 0) {
                return [arr[i], 10 - arr[i]];
            }
        }
    }
    return 'no pairs found';
}

const pairArr = [7, 6, 4, 2, 16, 7, 3]
findPairThatEqual10(pairArr);