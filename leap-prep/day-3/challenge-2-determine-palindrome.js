/*

Problem Statement:
Determine if a string is a palindrome.

A palindrome is a word or phrase that can be read the same forwards
as backwards.

My thoughts:
My solutions feels pretty basic. I'll be interested to see if there are more
innovative solutions.
You might also want to handle upper and lowercase letters.


Running time - O(n)

*/

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

isPalindrome('civic');
