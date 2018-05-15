/*

A pythagorean triplet is one that satisfies the equation a2 + bb^2 = c^2

A brute force solution would run three loops and check if the three elements form a pythagorean triplet.
The running time is O(n^3)

A more efficient squares every element, then sorts in increasingly element. Then, fixes the last element as a, and then search for the pair b, c. If one is not found, move the a position one position down.
The running time is O(n^2)

*/

function isTriplet(arr, n) {
	for (let i = 0; i < n; i++) {
		arr[i] = arr[i] * arr[i];
	}

	arr.sort((a,b) => a - b);

	for (let i = n -1; i >= 2; i--) {
		let left = 0,
			right = i - 1;
		while (left < right) {
			if (arr[left] + arr[right] === arr[i]) {
				return true;
			}
			if (arr[left] + arr[right} < arr[i]) {	
				left++;
			} else {
				right++;
			}
		}
	}
	return false;
}
