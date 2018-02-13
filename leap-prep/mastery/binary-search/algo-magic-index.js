function findMagicInt(arr){
	let low = 0; 
	let high = arr.length;
	return binarySearch(arr, low, high);
}

function binarySearch(arr, low, high){

	//define a midpoint value
	let mid = (low + high)/2;

	if(high >= low){
		//return mid if the mid is a magic integer
		if(mid === arr[mid]){
			return mid;

		//if the mid is greater than the mid value at the value at the array
		//move to the right up the array
		} else if (mid > arr[mid]){
			return binarySearch(arr, (mid + 1), high);

		//otherwise move left down the array
		} else {
			return binarySearch(arr, low, (mid - 1));
		}
	}

	//if no cond ition is met, no magic index exists
	return -1;
}