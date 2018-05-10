/*

In our setBit method, we'll shift 1 over by i bits.
Then, we'll perform an | with our num. Only the value at bit i will change.
All other bits of the mask are zero and will not affect the num.

*/

function setBit (num, i) {
	return num | (1 << i);
}