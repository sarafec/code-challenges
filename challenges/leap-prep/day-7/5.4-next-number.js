/*
5.4 - Next Number
Given a positive integer, print the next smallest 
and the next largest number that have the same number 
of 1 bits in their binary representation

The brute force approach is to count the number of 1s in n,
and then to incrmeent (or decrement) until you find a number 
with the same number of 1s. 

Alternatively we can use bit manipulation to get the next number
and previous numbers.

Bit facts:
If we flip a number to a one, we must flip a one to a zero
When we do that, the number will be bigger if the zero-to-one bit was
to the left of the one-to-zero bit.
To make the number bigger, but not physically bigger, we need to flip
to the right-most zero which has ones on the right of it.

In other words, we will flip the rightmost non-trailing zero.

Steps of Solution:
1 - flip rightmost non-trailing zero
2 - clear bits ot the right of p
3 - add in c1 - 1 ones
That'll give us the smallest number bigger than n with the same number of ones.


We can shrink the number by rearranging all the bits to the right of bit
p such that the 0s are on the left and rights are on the right. As we do this,
we want to replace one of the 1s with a 0.
A relatively easy way of doing this is to count how many ones are to the right
of p, clear all the bits from 0 until p, and then add back in c1-1 ones. Let c1
be the number of ones to the right of p and c0 be the number of zeros to the right of p.

To clear the bits, we create a mask that is a sequence of ones, followed by p zeros.
We do this by doing the following - 
a = 1 << p;     // all zeros except for a 1 at position p
b = a - 1;      // all zeros, followed by p ones
mask = ~b;      // all ones, followed by p zeros
n = n & mask;   // clears rightmost p bits

This is equivalent to the operations above:
n &- ~((1 <<p) - 1);

To add c1 - 1 ones:
a = 1 << (c1 -1);   // 0s with a 1 at position c1 - 1
b = a - 1;          // 0s with 1s at posiitons 0 through c1 - 1
n = n | b;          // inserts 1s at positionso 0 through c1 - 1

This is equivalent to the operations above:
n |= (1 << (c1 - 1)) - 1;

*/

function getNext(n ) {
    // compute c0 and c1
    let c = n;
    let c0 = 0;
    let c1 = 0;

    while(((c & 1) === 0) && (c !== 0)) {
        c0++;
        c >>=1;
    }
    
    // there is no bigger number with the same numebr of zeros
    if (c0 + c1 === 31 || c0 + c1 === 0) {
        return -1;
    }

    // position of rightmost non-trailing zero
    let p = c0 + c1; 

    // flip rightmost non-trailing zero
    n |= (1 << p);

    // clear alll bits to the right of p
    n &= ~((1 << p) - 1);

    // insert (c1 - 1) ones on the right
    n |= (1 << (c1 - 1)) - 1;

    return n;
};

// still need to implement getPrev()
// steps 
// 1 - get initial num
// 2 - clear bits 0 thorugh p
// 3 - insert c1 + 1 ones imemdiately to the right of position p