/* Contains Pythagorean Triplet */

/*

Explanation: We can square every element, then sort in increasing order.
Then to find the triplet, we'll set one element as 'a'. Then we'll look for
b and c, given a.

*/

function isTriplet (arr) {
	// square elements
	for (let i = 0; i < arr.length; i++) {
		arr[i] = arr[i]*arr[i];
	}

	// sort elements - increasing
	arr.sort((a,b) => a - b);

	for (let i = arr.length - 1; i >= 2; i--) {
		let left = 0,
			right = i - 1;
		while(left < right) {
			if (arr[left] + arr[right] === arr[i]) {
				return true;
			}

			if (arr[left] + arr[right] < arr[i]) {
				left++;
			} else {
				right--;
			}
		}
	}
	return false;

}