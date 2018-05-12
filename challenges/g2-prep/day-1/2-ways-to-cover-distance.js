/* Count Number of Ways to Cover a Distance */

/*

Explanation (recursive): You can find your solution by finding the sum of the sums of the 3 numbers before it.
Given that fact, it is easy to see how you can unfurl this problem all the way to 0. 
However, the time complexity is high and there are many subproblems.
Running Time: O(3^n)
Space Complexity: ??? - how many recursive calls in the stack at any given time?

Explanation (dynamic programming): You can avoid the overlapping subproblems by constructing a
temporary array and fill it in a bottom-up manner.
Running Time: O(n), where n represents the distance's length
Space Complexity: O(n)


*/

// recursive solution
function countWays(dist) {
	if (dist < 0) return 0;
	if (dist === 0) return 1;

	return	countWays(dist-1) +
			countWays(dist-2) +
			countWays(dist-3);
}


// dynamic programming
function countWaysDp(dist) {
	const count = Array(dist + 1);

	count[0] = 1;
	count[1] = 1;
	count[2] = 2;

	for (let i = 3; i <= dist; i++) {
		count[i] = count[i-1] + count[i-2] + count[i-3];
	}

	return count[dist];
}