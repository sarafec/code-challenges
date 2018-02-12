/*
Problem Statement:
Given two strings, concatenate them and replace spaces with a single dash

Solution:
Concatenate strings, create character array, map to replace spaces with dashe

The tricky part of this problem is that we need to look backwards to see if our previous
character was a dash and we need our next character to be a dash.

Running time: O(n);

// there is something bad about deleting from an array you're looping through that is bad

*/

function formatStrings(str1, str2) {
    let megaStr = str1 + str2;
    let megaArr = [];

    for(let i = 0; i < megaStr.length; i++) {
       if(megaStr.charAt(i) === ' ' && megaArr[megaArr.length -1] !== '-') {
            megaArr.push('-');
       } else if (megaStr.charAt(i) === ' ' && megaArr[megaArr.length -1] === '-' ) {
           // do nothing
       } else {
        megaArr.push(megaStr.charAt(i));
       }
    }

    return megaArr.join('');
};

formatStrings('this is a grand day    to go do the   park', '    maybe i  love to go    to  the park');