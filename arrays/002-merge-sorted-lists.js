/*
source: Brandverity Mock Interview (9/26/17)
problem statement:
Given two sorted arrays, sort into a third array.

input - two sorted arrays
output - one sorted array

running time - O(n)
*/

let arr2 = [3,4,5,6,8];
let arr1 = [9,11,13,14,15,16];

function mergeArrays(arr1, arr2) {
	let count1 = 0;
	let count2 = 0;
	let sortedArr = [];

	while (count1 < arr1.length && count2 < arr2.length) {
		if (arr1[count1] < arr2[count2]) {
			sortedArr.push(arr1[count1]);
			count1++;
		} else {
			sortedArr.push(arr2[count2]);
			count2++;
		}
	}

	while (count1 < arr1.length) {
		sortedArr.push(arr1[count1++]);
	}

	while (count2 < arr2.length) {
		sortedArr.push(arr2[count2++]);
	}

	return sortedArr;
}

console.log(mergeArrays(arr1, arr2));