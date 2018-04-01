/*
10.2 - Group Anagrams
Write a method to sort an array of strings so thtat all the anagrams 
are next to each other.

We'll need a way to determine if two strings are anagrams of eachother.
Anagrams are words that have the same characters btu in different order.
If we can put the characters in teh same order, we can easily see if the new 
words are identical.

We can do this by applying merge sort or quick sort, and modify the comparator.
This comparator will be used to indicate that two strings which are anagrams of 
eachother are equivalent.

The easiest way to check if two words are anagrams is to coun the occurrences
of distinct characters in each string and return true if they match.

Or we could just sort the string. Two words that are anagrams will look the same
once they are sorted.

*/

// solution 1 - sort string characters and compare
// runtime - O(n log n)
function sortChars(str) {
    let content = str.split('');
    content.sort();
    return content.join('');

}

function compare(str1, str2) {
    return sortChars(s1) === sortChars(s2);
}

// improvement - we don't need to fully sort the array
// we only need to group the strings in the array by anagram
// we can use a hash table which maps the sorted version of the word
// to a list of its anagrams
// once we've grouped all the words into these lists of anagrams
// we can put them back in the array

let mapList = {};
let strList = [];
function gorupWords(arr) {
    for(str in arr) {
        let key = sortChars(str);
        mapList[key] = {'key': key, 'val': str};
    }

    let index = 0;
    // convert hash table to arr
    for (let property in mapList) {
        if (mapList.hasOwnProperty(property)) {
            strList[index] = property.val;
            index++
        }
    }
}

function sortChars(str) {
    let content = str.split('');
    content.sort();
    return content.join('');
}