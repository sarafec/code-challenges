/* Does Subset Equal to Sum Exist in Array */

/*

Explanation: The question is whether or not to include the 
next number in the subset. We can do this problem recursively
or using dynamic programming. 

To use a memo table, we'll have the value of subset[i][j] equal
to true, if there is a subset of set[0...j-1] with sum equal to i.
Otherwise, it'll be false.
We'll return subset[sum][size] at the end of the function.

*/

function isSubsetSum(set, size, sum) {
	const subsetTable; // grid size [sum+1][size+1]

	for (let i = 0; i <= size; i++) {
		subsetTable[0][i] = true;
	}

	for (let i = 1; i <= size; i++) {
		subset[i][0] = false;

		for (let j = 1; j <= sum; j++) {
			for (let k = 1; k <= size; k++) {
				if (i >= set[j-1]) {
					subset[i][j] = subset[i][j] || subset[i - set[j-1]][j-1];
				}
			}
		}
	}
	return subset[sum][n];
}