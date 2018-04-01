/* 

Problem Statement:
Determine the number of palindromes in a string 
in O(n) time.

My solution:
To get the permutations of the palidromes takes O(n!),
but to count them is O(n).
The space complexity is O(n!) as well.
Finding a better solution would be wise.

Further work:
Find a better solution

*/

function countPalindromes(str) {
    let count = 0; 
    let permArr = getAllPermutations(str);

    for (let i = 0; i < permArr.length; i++) {
        if(isPalindrome(permArr[i]))
            count += 1;
    }
    return count;
}

function isPalindrome(str) {
    let mid = Math.floor(str.length/2);

    if(str.length === 0 || str.length === 1) 
        return true;

    for(let i = 0; i < mid; i++) {
        if(str.charAt(i) !== str.charAt(str.length - 1 - i))
            return false;
    }

    return true;
}

// todo: write function to get all permutations - getAllPermutations(str)