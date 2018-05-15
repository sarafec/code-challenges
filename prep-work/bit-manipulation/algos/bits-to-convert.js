/*

The XOR of two numbers will have set the bits at those places where A differs from B.

*/

function flippedCount(a, b) {
	return countSetBits(a^b);
}

function countSetBits(num) {
	let count = 0; 
	while (num !== 0) {
		count += num & 1;
		num >>= 1;
	}
	return count;
}

