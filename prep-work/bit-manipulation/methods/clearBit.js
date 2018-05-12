/*

We'll do 3 clear bit methods
1) clear a specific bit
2) clear the most significant bit through i
3) clear bits i through 0 (inclusive)

In our first method, we'll negate our mask.
Then we'll perform an & with our mask and num.
This will clear the ith bit and leave the remainder unchanged.

In our second method, we'll create a mask with a 1 and the ith bit.
Then, we'll subtract 1 from it, giving a sequence of 0s followed by i 1s.
Then, we'll & our num with the mask to leave just the last i bits.

In our third method, we'll take a sequence of all 1s (is -1) and shift it 
left by i + 1 bits. This gives us a sequence of 1st (in the most significant bits)
followed by i 0 bits.

*/

function clearBit(num, i) {
	let mask = ~(1 << i);
	return num & mask;
}

function clearBitsMSBthroughI(num, i) {
	let mask = (1 << i) - 1;
	return num & mask;
}

function clearBitsIthrough0(num, i) {
	let mask = (-1 << (i + 1));
	return num & mask;
}

