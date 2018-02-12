### Notes from MDN's Bitwise Operators article
* Bitwise operators treat their operands as a sequence of 32 bits (zeros and ones), rather than decimal, hexadecimal, or octal number.
* Bitwise operators perform their operations on such binary representations, but they return standard JS numerical values.
  
Definitions
* Bitwise AND - a & b - returns a 1 in each bit position for which the corresponding bits of both operands are 1s.
* Bitwise OR - a | b - returns a 1 in each bit position for which the corresponding bits of either or both operands are 1s.
* Bitwise XOR - a ^ b - returns a 1 in each bit position for which the corresponding bits of either but not both operands are 1s.
* Bitwise NOT - ~a - inverts the bits of its operand
* Left shift - a << b - Shifts a in binary representation b (<32) bits to the left, shifting in 0s from the right.
* Sign propagating right shift - a >> b - Shifts a in binary representation b (<32) bits to teh right, discarding bits shifted off.
* Zero-fill right shift a - >>>> b - Shifts a in binary representation b (<32) bits to the right, discarding the bits shifted off, and shifting in 0s from the left.
  
* The oeprands of all bitwise operators are convered to signed 32-bit integers in two's complement format.
* Two's complement format means taht a number's negative counterpart is all the number's bits intverted (bitwise NOT of the number) plus 1.
* The two's complement guarantees that the left-most bit is 0 when the number is positive and 1 when the number is negative.
  
Bitwise Logical Operators
* Bitwise logical oeprands are converted to 32-bit integers and expressed by a series of bits (zeros and ones). Numbers with more than 32 bits get their most significant bits discarded.
* Each bit in the first operand is paired with the corresponding bit in the second operand: first bit to first bit, second bit to second bit, and so on.
* The operator is applied to each pair of bits, and the result is contructed bitwise.
  
Bitwise Shift Operators
* The bitwise shift operators take two operands - the first is a quantity to be shifted, and the secnod specifies the number of bit positions by which the first operand is to be shifted. The direction of the shift oepration is controleld by the operator used.
* Shift operators conver their operands to 32-bit integers in big-endian order and return a result of the same type as the left operand. The right operand should be less than 32, but if not only the low five bits will used.
  
* The bitwise logical operations are often used to create, manipulate, and read sequences of flags. Variables could be used instead of teh sequences, but binary flags take up less space.
* A bitmask is a sequence of bits that can manipulate and/or read flags. 
* Individual falg values can be extracted by ANDing them with a bitmask, where each bit with the value of one will "extract" the corresponding flag. The bitmask masks out the non-relevant flags by ANDing with zeros.
* A bitmask with multiple set flags acts like an "either/or."
* Flags can be set by ORing them with a bitmask, where each bit with the value one will set the corresponding flag, if that flag isn't already set.
* Flags can be cleared by ANDing them with a bitmask, where each bit with the value zero will clear the coreponding flag, if it isn't already cleared. This bitmask can be created by NOTing primitive bitmasks.
* Flags can be toggled by XORing them with a bitmask, where each bit with the value one will toggle the corresponding flag.
* Flags can be flipped with the NOT operator.

Example - Flags and Bitmasks
` 
    // suppose you have a series of flags
    // when a flag is set, it has a value 1
    // when a flag is cleared, it has a value of 0
    var flags = 5;  // binary 0101

    // a bitmask is a sequence of bits that can manipulate and/or read flags
    var FLAG_A = 1 // 0001
    var FLAG_b = 2 // 0010
    var FLAG_C = 4 // 0100
    var FLAG_D = 8 // 1000

    // create new bitmasks
    // by ORing the flags
    var mask = FLAG_A | FLAG_B | FLAG_D;

    // flag values can be extracted by ANDing them
    if (flags & FLAG_C) {
        // do stuff
    }

    // a bitmask with multiple set flags acts like either/or
    if ((flags & FLAG_B) || (flags & FLAG_C)) {
        // do stuff
    }

    // or

    var mask = FLAG_B | FLAG_C;
    if (flags & mask) {
        // do stuff
    }

    // flags can be set by ORing them with a bitmask, where each bit with the value 1 will set the corresponding flag, if that flag isn't already set
    var mask = FLAG_C | FLAG_D;
    flags |= mask;

    // flags can be cleared by ANDing them with a bitmask, where each bit with the value zero will clear the corresponding flag, if it isn't already cleared
    var mask = ~(FLAG_A | FLAG_C);
    flags &= mask;

    // a mask can be created with ~FLAG_A & ~FLAG_C
    // De Morgan's Law
    var mask = ~FLAG_A & ~FLAG_C;
    flags &= mask;

    // flags can be toggled by XORing them with a bitmask, where each bit with the value one will toggle the correspnding flag
    var mask = FLAG_B | FLAG_C;
    flags = flags ^ mask;

    // flags can be flipped with the NOT operator
    flags = ~flags;
`
  
Converting to and from binary
`
    // binary string to decimal
    var sBinString = '1011';
    var nMyNumber = parseInt(sBinString, 2);
    console.log(nMyNumber);

    // decimal to binary string
    var nMyNumber = 11;
    var sBinString = nMyNumber.toString(2);
    console.log(sBinString);
`

Automate Mask Creation 
`
function createMask() {
  var nMask = 0, nFlag = 0, nLen = arguments.length > 32 ? 32 : arguments.length;
  for (nFlag; nFlag < nLen; nMask |= arguments[nFlag] << nFlag++);
  return nMask;
}
var mask1 = createMask(true, true, false, true); // 11, i.e.: 1011
var mask2 = createMask(false, false, true); // 4, i.e.: 0100
var mask3 = createMask(true); // 1, i.e.: 0001


console.og(mask1);
`

Array of booleans from a mask
`function arrayFromMask(nMask) {
  // nMask must be between -2147483648 and 2147483647
  if (nMask > 0x7fffffff || nMask < -0x80000000) { 
    throw new TypeError('arrayFromMask - out of range'); 
  }
  for (var nShifted = nMask, aFromMask = []; nShifted; 
       aFromMask.push(Boolean(nShifted & 1)), nShifted >>>= 1);
  return aFromMask;
}

var array1 = arrayFromMask(11);
var array2 = arrayFromMask(4);
var array3 = arrayFromMask(1);

console.log('[' + array1.join(', ') + ']');`


Shortcut to convert decimal to binary - Number(113).toString(2);
  
Binary Tricks from Blog Posts
* Use & to find out whether a number is even or odd. An odd number's first bit will always be one. We can use & and compare the number with 1. If the number is odd, the result will always be 1.
* Masks are numbers in binary form where we have only the bit we want to modify set to 1 or 0 depending on what we want to achieve.
* Masks can also be used as a flag to define which bits are to be changed.
* If we want to flip a bit, we can use XOR.