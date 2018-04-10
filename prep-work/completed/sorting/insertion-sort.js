/*

explanation: to sort, we'll loop through the array. 
We'll keep an index pointer that will start at one less than our key (
the current value in the outer loop) that compares our pointer to our key.
If the pointer is less than the key do nothing. Otherwise, swap
our key value and the value at our pointer. 

running time: O(n^2)
space complexity: O(1)

*/



function insertionSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		let key = arr[i];
		let j = i - 1;

		while (j >= 0 && key < arr[j]) {
			arr[j+1] = arr[j];
			j = j - 1;
		}
		arr[j+1] = key;
	}
}

