/*

Explaination:
This problem is looking for a condition where arr[i] = i. Therefore,
we are looking for where the value of arr[mid] is equal or close to mid.
Using binary search we can cut our search space in half on each run through.

*/

function findMagicInt(arr) {
	const low = 0; 
	const high = arr.length;
	return binarySearch(arr, low, high);
}

function binarySearch(arr, low, high) {

	//define a midpoint value
	const mid = Math.floor((low + high)/2);

	if (high >= low){
		//return mid if the mid is a magic integer
		if (mid === arr[mid]) {
			return mid;

		//if the mid is greater than the mid value at the value at the array
		//move to the right up the array
		} else if (mid > arr[mid]){
			return binarySearch(arr, mid + 1, high);

		//otherwise move left down the array
		} else {
			return binarySearch(arr, low, mid - 1);
		}
	}

	//if no condition is met, no magic index exists
	return -1;
}