/* Make All Array Elements Equal with Minimum Cost */

/*

Explanation: We will solve this problem by observing the cost when 
changing the target equal value. It will be observed that, as we increase
the target equal value, the total cost decreases up to a limit and then starts
increasing. 
We will make the smallest and largest values of our array as the limits of 
our search.

Running Time: O(n log n)

*/


function findMinCost(arr, size) {
	let low = arr[0],
		high = arr[0];

	// set limits for search
	for (let i = 0; i < size; i++) {
		if (low > arr[i]) {
			low = arr[i];
		}

		if (high < arr[i]) {
			high = arr[i];
		}
	}

	// loop until difference between low and high becomes less
	// than three, after that mid 1 and mid 2 will start repeating
	while ((high - low) > 2) {
		let mid1 = Math.floor(low + (high - low) /3);
		let mid2 = Math.floor(high - (high - low) /3);

		let cost1 = computeCost(arr, size, mid1);
		let cost2 = computeCose arr, size, mid2);

		if (cost1 < cost2) {
			high = mid2;
		} else {
			low = mid1;
		}
	}

	return computeCost(arr, size, Math.floor((low + high)/2));
}

function computeCost (arr, size, x) {
	let cost = 0;
	for (let i = 0; i < size; i++) {
		cost += Math.abs(arr[i] - x);
	}

	return cost;
}