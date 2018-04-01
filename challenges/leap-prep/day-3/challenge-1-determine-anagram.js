/* 

Problem Statement:
Determine if a string is an anagram.
An anagram is a word, phrase, or name formed
by rearrancing the letters of another.

My thoughts:
Creating a set of boolean flags works, but 
is there a better way?

Steps:
If the strings are not the same length, they
can't be anagrams. 
We'll create two count arrays that represent
ASCII values.
We'll initialize those count arrays with 0s
We'll add 1 for every character that has a character
code repreented in the ASCII boolean array (it'll be all of them)

Drawbacks:
this only compares two strings
this only compares ascii characters

Running time:
O(n + m) where n is the length of the string and 
m is the length of the count array

*/

function isAnagram(str1, str2) {
    let isItAnAnagram = true;

    if (str1.length !== str2.length) {
        isItAnAnagram = false;
    }

    let boolFlag1 = [];
    let boolFlag2 = [];

    for (let i = 0; i <= 128; i++) {
        boolFlag1.push(0);
        boolFlag2.push(0);
    }

    for (let i = 0; i < str1.length; i++) {
        boolFlag1[str1.charCodeAt(i)] += 1;
        boolFlag2[str2.charCodeAt(i)] += 1;
    }

    for (let i = 0; i < boolFlag1.length; i++) {
        if (boolFlag1[i] !== boolFlag2[i]) 
        isItAnAnagram = false;
        
    }

    console.log(isItAnAnagram)
}

isAnagram('triangle', 'integral');