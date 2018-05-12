/* Print the Sums of All Subsets in an Array */

/*

Explanation: for every element, we will either include it in our subset or we won't.
We can use a recursive solution to print all of these elements.

Note - there is a iterative version of this solution that involves bit manipulation.

*/

function subsetSums(arr, left, right, sum = 0) {
	if (left > right) {
		console.log(sum);
		return;
	}

	subsetSums(arr, left + 1, right, sum + arr[left]);
	subsetSums(arr, left + 1, right, sum);
}

