/*

Problem Statement:
Reverse a string in place.

My thoughts:
Strings in JavaScript are immutable. The latitude you have
to use other data structures is a little wishy washy.
I'll propose three methods.

Method #1:
Built in functions - word.split('').reverse().join('');

Method #2:
Add characters of word to an array starting from the back.
Then join.

Method #3:
Create a character array. Swap the respective "first" and "last" 
indexes. That is to say, in a 6 item array - 1 and 6 swap, 2 
and 5 swap, and 3 and 4 swap.

Method #3 seems like the most interesting to code. 
The other methods seem equally valid.
The process of creating a character array is O(n) automatically.
But, the space complexity of the third method is greater because
of the swapping.

*/

function reverseString(str) {
    let strArr = str.split('');
    const mid = Math.floor((strArr.length)/2)

    for (let i = 0; i < mid; i++) {
        // temp = firstChar;
        // firstChar = secondChar;
        // secondChar = temp;

        temp = strArr[i];
        strArr[i] = strArr[strArr.length - 1 - i];
        strArr[strArr.length - 1 - i] = temp;
    }

    console.log(strArr.join(''));

}

const str = 'dolphin';
reverseString(str);