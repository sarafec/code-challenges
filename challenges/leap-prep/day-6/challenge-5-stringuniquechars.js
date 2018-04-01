/*
Problem Statement:
Determine if a string has all unique characters, in place.

My thoughts:
We can sort the string and then check against its neighbors.
Or we can do a bit related solution.
Let's do the bit related thing.

Solution: if the strings has letters a-z, we'll maintain an integer
value called checker. As we iterate over the string, we will find the
integer value of the character with respect to a.
Then, the bit at that int value is set to 1.
If the bit is already set in the checker, the bit and the operation
would make checker > 0. So, we would return false.
Otherwise, checker would make the bit 1 at that index.

Explain this: let bitAtIndex = str[i] - 'a';

Explain this: (checker & (1 << bitAtIndex)) > 0
*/

function hasUniqueChars(str) {
    let checker = 0;
    for (let i = 0; i < str.length; i++) {
        let bitAtIndex = str.charAt(i) - 'a';
        if((checker & (1 << bitAtIndex)) > 0)
            return false;
        
        checker = checker | (1<<bitAtIndex);
    }
    return true;
}

// Further work:
// problem - str.charAt(i) - 'a' doesn't work in javascript
// if we can find out what it is trying to do, we can replicate it