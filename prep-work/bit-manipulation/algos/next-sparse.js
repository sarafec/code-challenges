/*

The brute force solution creates a utility function called isSparse and then adds 1 to the current number until the sparse number is found.
The time complexity for that solution is O(n log n), if isSparse is O(log n) and the next sparse number is O(x) distance away.

A more efficient solution is to store the binary of the given number is a boolean array. Then, initialize the lastFin bit position as 0. We'll start traversing the array from the least significant bit. If we get two adjacent 1st such that the next (or third bit) is not 1, then we'll make all bits after this 1 to the lastFin bit as 0. And we'll update the lastFin bit as the next bit.
This solution's running time is O(log n)   

*/

function nextSparse(num) {
	const bin = [];
	while (num !== 0) {
		bin.push(num&1);
		num >>= 1;
	}

	bin.push(0);
	let n = bin.length;
	let lastFinal = 0;

	for (let i = 1; i < n - length; i++) {
		if (bin[i] == =1 && bin[i-1] === 1 && bin[i+1] !== 1) {
			bin[i+1] = 1;
			for (let j = i; j >= lastFinal; j--) {
				bin[j] = 0;
			}
			lastFinal = i+1;
		}
	}
	let answer = 0;
	for (let i = 0; i < n; i++) {
		answer += bin[i] * (1 << i);
	}
	return answer;
}
