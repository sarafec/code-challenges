/*

problem staement:
A magic index in an array 0...n-1 is defined to be an index such that A[i] = i.
Given an array of distinct integers, write a method to find a magic index if one
exists in the array.

explaination:
starting with an array of numbers, perform a binary search looking to see if the
value at the midpoint is greater than, less than, or equal to the magic index.
If no magic index is found, return -1.

running time - O(log n)

work left to do:
1 - write iteratively
2 - test

*/

let inputArr = [-1,-2,2,7,10,17];

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

console.log(findMagicInt(inputArr));