/*
Problem Statement:
5.6 - Conversion
Write a function to determine the number of bits 
you would need to flip to convert integer A to 
integer B.

To figure out which bits in two numbers are different, 
you can use an XOR.

Each 1 in the XOR represents a bit that is different bewtween A and B.
Therefore, to check the number of bits that are different
between A and B, we need to coutn the numebr of bits in A^B that are 1.

*/

// solution 1
function bitSwapRequired(a,b) {
    let count = 0;
    for (let c = a ^ b; c !==0; c = c >> 1) {
        count += c & 1;
    }
    return count;
};

// improvements
// instead of shifting c repeatedly while checking for the least significant bit
// we can continouously flip the least signfiticant bit and count how long it takes
// c to reach 0
// the opeartion c = c & (c - 1) will clear the least significant bit in c
function improvedBitSwapRequired(a, b) {
    let count = 0;
    for (let c = a ^ b; c !== 0; c = c & (c - 1)) {
        count++;
    }
    return count;
}
