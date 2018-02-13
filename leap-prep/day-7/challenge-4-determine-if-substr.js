/*
Problem Statement:
Determine if one string is a substring of the other.

Solution:
Starting at the end of both strings, compare ends.
If they match, decrement both.

Running time - O(n)
*/

// if str1 is a substring of substr 2

function isSubstring(str1, str2, str1Len, str2Len) {

    if (str1Len === 0) return true;
    if (str2Len === 0) return false;

    if (str1[str1Len - 1] === str2[str2Len - 1]) {
        return isSubstring(str1, st2, str1Len-1, str2Len-1);
    }

    return isSubstring(str1, st2, str1Len, str2Len-1);

}