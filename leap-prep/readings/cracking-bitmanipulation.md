### Cracking the Coding Interview: Bit Manipulation
* 0110 + 0110 is equivalent to 0110 * 2, which is equivalent to shifting 0110 left by 1.
* 0100 equals 4, and multiplying by for is just left shifting by 2. So we shift 0011 left by 2 to get 1100.
* If you XOR a bit with its own negated value, you will always get 1. The solution to a^(~a) will be a sequence of 1s.
* ~0 is a sequence of 1s, so ~0 << 2 is 1s followed by two 0s. ANDing that with another value will clear the last two bits of the value.
  
* Bit Facts and Tricks:
```
x ^ 0s = x
x ^ 1s = ~x
x ^ x = 0
x & 0s = 0
x & 1s = x
x & x = x
x | 0s = x
x | 1s = 1s
x | x = x
```

* Operations occur bit-by-bit, so what happens with one bit never impacts the other bits. That means that if one of the above statements is true for a single bit, then its true for a sequence of bits.
  
* Computers typically store integers in two's complement representation. A positive number is represented as itself while a negative number is represented as the two's complement of its absolute value (with a 1 in its sign bit to indicatethat a negative value). 
* The two's complement of an N-bit number (where N is the number of bits used for the number, excluding the sign bit) is the complement of the number with respect to 2^N.
* The binary reprsentation of -K (negative K) as a N-bit number is concat(1, 2^N-2 - K). Or, we invert the bits in the positive representation and add 1. 
* There are two types of right shift operators. The arithmetic right shift essentially divides by two. The logical right shift shifts bits. 
* In a logical right shift, we shift the bits and put a 0 in the most significant bit. 
* In an artithmetic right shift, we shift values to the right but fill the new bits with the value of the sign bit. This has the effect of dividing by two.
  
Common Bit Tasks
* To get a bit, we can shift 1 over by i bits and perform and AND with the number. Doign that will clear all bits other than the bit at bit i. Finally, we can compare that to 0. If the new value is not 0, then bit i must have a 1. Otherwise bit i is a 0.
```
function getBit(num, i) {
    return ((num & (1 << i)) != 0);
};
```

* To set a bit, we can shift 1 over by i bits. By performnign an OR with the number, only the value at bit i will change. All other bits of the mask are zero and will not affect num.
```
function setBit(num, i) {
    return num | (1 << 1);
};
```

* To clear a bit, we get the reverse of a number and then negate it. Then, we perform and AND wit the number. This will clear the ith bit and leave the remainder unchanged.
```
function clearBit(num, i) {
    const mask = ~1( << i);
    return num & mask;
};
```

* To clear all bits from the most significant through i (inclusive), we can create a mask with 1 at the ith bit (1 << i). Then, we subtract 1 from it, giving us a sequence of 0s followed by i 1s. We then AND our number with this mask to leave just the last i bits.
```
function clearBitsMSThroughI(num, i) {
    const mask = (1 << i) - 1;
    return num & mask;
};
```

* To clear all bis from i through 0 (inclusive), we take a sequence of all 1s (which is -1) and shift it left by i + 1 bits. This gives us a sequence of 1st (in the most signifiant bits) followed by i 0 bits.
```
function clearBitsIThrough(num, i) {
    const mask = (-1 << (i + 1));
    return num & mask;
};
```

* To update bits - in order to set the ith bit to the value v, we first clear the bit at poisiotn i by using a bask. Then we shift the intended value, v, left by i bits. THis will create a number with bit i equal to v and all other bis equal to 0. Finally, we OR these two numbers, updating the ith bit if v is 1 and leaving it as 0 otherwise.
```
function updateBit(num, i, isBit1) {
    const value = isBit1 ? 1 : 0;
    const mask = ~(1 << i);
    return (num & mask) | (value << i);
};
```
  
Chosen Questions:
* 5.2 - Binary to String
Given a real number between 0 and 1 that is passed in as a double, print the binary representation. If the number cannot be represented accurately in binary with at most 32 characters, print "error."
* 5.3 - Flip Bit to Win
You have an integer and you can flip exactly one bit from a 0 to a 1. Write code to find the length of the longest sequence of 1st you could create
* 5.4 - Next Number
Given a positive integer, print the next smallest and the next largest number that have the same number of 1 bits in their binary representation
* 5.6 - Conversion
Write a function to determine the number of bits you would need to flip to convert integer A to integer B.