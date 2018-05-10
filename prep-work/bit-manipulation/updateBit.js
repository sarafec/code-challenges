/*

In our updateBit method, we'll set the ith bit to a value v, we first clear the bit at position i by using  amask.
Then, we shift the intended value v, left by i bits. This will create a number with bit i equal to v and all other bits
equal to 0. Finally or | these two numbers, updating the ith bit if v is 1 and leaving it as 0 otherwise.

*/

function updateBit(num, i, bitIs1) {
	let value = bitIs1 ? 1 : 0;
	let mask = ~(1 << i);
	return (num & mask) | (value << i);
}