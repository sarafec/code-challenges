/*
source: Kal Academy A.3
problem statement:
Given a sorted array of n integers that has been rotated an unknown number of times,
write code to find an element in the array. Assume the array was originally sorted
in increasing order.

input - array and integer
output - integer, representing the index of the 

running time - O(log n)

*/

let inputArr = [3,4,5,1,2];
let searchElem = 1;

function findElement(arr, searchElem){
	let low = 0;
	let high = arr.length - 1;
	return binarySearch(arr, low, high, searchElem);
}

function binarySearch(arr, low, high, searchElem){
	if(low > high) return - 1;

	//define midpoint val to base search off of
	let mid = (low + high) / 2 | 0;

	//return the element if it matches the midpoint
	if(arr[mid] === searchElem){
		return mid;
	}

	//if values within high and low are sorted
	if(arr[low] <= arr[mid]){
		if(searchElem >= arr[low] && searchElem <= arr[mid]){
			return binarySearch(arr, low, mid - 1, searchElem);
		}
		return binarySearch(arr, mid + 1, high, searchElem);
	}

	//if values between high or low are not sorted
	if(searchElem >= arr[mid] && searchElem <= arr[high]){
		return binarySearch(arr, mid + 1, high, searchElem);
	} else {
		return binarySearch(arr, low, mid - 1, searchElem);
	}
}

console.log(findElement(inputArr, searchElem));