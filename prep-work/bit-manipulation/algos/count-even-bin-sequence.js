/*

The full problem is - given a number n, find the count of all binary sequences of length 2n, wuch that the sum of the first n bits is the same as the sum of the last n bits.

The idea is to fix the first and last bits and then recur for n - 1. There are a number of possibilities - 
-- The first and last bits are the same, the remaining n-1 bits on both sides should also have the same sum. 
-- The first bit is 1 and last bit is 0, the sum of remaining n-1 bits on the left side should be 1 less than the sum n-1 bits on the right side. 
-- The first bit is 0 and the last bit is 1, sum of the remaining n-1 bits on the left side should be 1 more than the sum n-1 bits on the right side.
The running time is exponential.

There is a recursive solution, but we can optimize using a dynamic programming solution. We create a memo look up table to compute the result.

We'll implement both solutions.

*/

// recursive
funciton countSeq (n, diff) {
	if (Math.abs(diff) > n) return 0;

	if (n === 1 && diff === 0) return 2;

	if (n === 1 && Math.abs(diff) === 1) return 1;

	let result = countSeq(n-1, diff+1) + countSeq(n-1, diff) + countSeq(n-1, diff-1);

	return result;
}

// dynamic programming solution
function countSeqDP(n) {
	const memo = new Matrix (1000, 1000, -1);
	return countSeqDPUtil(n, 0, memo);
}

function countSeqDPUtil(n, diff, memo) {
	if (Math.abs(diff) > n) return 0;
	if (n === 1 && diff === 0) return 2;
	if (n === 1 && Math.abs(diff) === 1) return 1;

	if (memo[n][n+diff] !== -1) {
		return memo[n][n+diff];
	}

	let result = countSeqDPUtil(n-1, diff+1, memo) + countSeqDPUtil(n-1, diff, memo) + countSeqUtil(n-1, diff-1, memo);

	memo[n][n+diff] = result;
	return result;
}
