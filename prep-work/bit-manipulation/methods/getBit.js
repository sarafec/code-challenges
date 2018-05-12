/*

In our getBit method, we will shift 1 over by i bits to create a value.
Then, we'll perform an & with that num. That will clear all bits other than the bit at bit i. 
Then, we'll compare with zero. If it is true, our value is 1 otherwise it is 0.

*/

function getBit (num, i) {
	return ((num & (1 << i)) !== 0);
}