/*
5.3 - Flip Bit to Win
You have an integer and you can flip exactly one bit from a 0 to a 1. Write code 
to find the length of the longest sequence of 1st you could create

Think of each integer as being an alternating sequence of 0s and 1s.
Whenever a 0s sequence has length one, we can potentially merge the 
adjacent 1s sequences.

A brute force approach might be to convert an integer into an array 
that reflects the lengths of 0s and 1s sequences. The subscript reflects
whether the integer corresponds to a 0s sequence or a 1s sequence.
Once we have this,we just walk through the array. At each 0s sequence, we
consider merging the adjacent 1s senqeuence if the 0s seuqnece has length 1.
Runtime - O(b) time and O(b) memory where b is the length of the sequence.

The optimal solution will reduce the space needed to solve this problem.
We don't need to hang onto the length of each sequence the entire time. We only
need it long enough to compare each 1s sequence ot the immediately preceding 1s 
sequence. 
When we see a zero, update previousLength. If the next bit is 1, previousLength should be
set to currentLength. If the next bit is 0 then we can't merge these sequences together.
So, set previousLength to 0.
Update maxLength as we go.

Runtime - O(b), but O(1) additional memory

Below we'll code the optimal solution.

*/

function flipBit(a) {
    // if all 1s, this is already the longest sequence
    if (~a === 0) return Number(2).toString(a).length;

    let currentLength = 0;
    let previousLength = 0;
    let maxLength = 1;

    while (a !== 0) {
        // current bit is 1
        if ((a & 1) === 1) {
            currentLength++;
        // current bit is 0
        } else if ((a & 1) === 0) {
            // update to 0 (if next bit is 0)
            // or currentLength (if next bit is 1)
            previousLength = (a & 2) == 0 ? 0 : currentLength;
            currentLength = 0;
        }
        maxLength = Math.max(previousLength + currentLength + 1, maxLength);
        // note is this valid js
        a >>>= 1;
    }
    return maxLength;
}