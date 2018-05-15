/*
The whole problem - given a number, we print all n-digit binary numbers with equal sum in the left and right halves. If n is odd, then the mid element can either be 0 or 1.

The idea is to recursively build the left and right halves, keeping track of the difference between counts of 1 between them.
We'll print a string when the difference becomes 0 and there are no more characters to add.

*/

function allBinNums(num, left="", right="", diff) {
	if (num === 0) {
		if (diff === 0) {
			console.log(left + right);
		}
		return;
	}

	if (num == 1) {
		if (diff === 0) {
			console.log (left + "0" + right);
			console.log (left + "1" + right);
		}
		return;
	}

	if (2 * Math.abs(diff) <= n) {
		if (left !== "") {
			allBinNums(num-2, left+"0", right+"0", diff);
			allBinNums(num-2, left+"0", right+"1", diff-1);
		}

		allBinNums(num-2, left+"1", right+"0", diff+1);
		allBinNums(num-2, left+"1", right+"1", diff);
	}
}
