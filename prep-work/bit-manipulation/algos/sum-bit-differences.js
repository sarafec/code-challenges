/*

A brute force solution would be to run two loops and consider all pairs, one by one. For every pair, count the bit differences. Finally, return the sum of counts.
Time complexity for this solution is O(n^2).

A more efficient solution would be to use the fact that all numbers are represented using 32 (or some fixed number of bits). The idea is to count differences at individual bit position. We'll traverse from 0 to 31 and count numbers with ith bit set. 
There would be n-count numbers where ith bit is not set. The count of differences at ith would be the: count * (n - count 2)
The running time time is O(n)

*/

function sumBitDifferences(arr, n) {
	let answer = 0;
	for (let i = 0; i < 32; i++) {
		let count = 0;
		for (let j = 0; j < n; j++) {
			if ((arr[j] & (1 << i)) === 0) {
				count++;
			}
		}

		answer += (count * (n - count) * 2);
	}
	return answer;
}

