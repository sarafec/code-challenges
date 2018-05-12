/* Print All Possible Expressions that Evaluate to a Target */

/*

Explanation: Put all possible binary operators in between the digits
and evaluating them. Then, check if they evaluate to the target or not.

*/

function getExpression(input, target) {
	let res;
	getExprUtil(res, "", input, target, 0, 0, 0);
	return res;
}

function getExprUtil(res, currExpr, input, target, pos, currVal, last) {
	if (pos === input.length) {
		if (currVal === target) {
			res += currExpr;
		}
		return;
	}

	for (let i = pos; i < input.length; i++) {
		if (i !== pos && input[pos] === '0') {
			break;
		}

		let part = input.substr(pos, i + 1 -pos);

		
		let curr; // take the numeric value of part

		if (pos === 0) {
			getExprUtil(res, currExpr + part, input, target, i+ 1, curr, curr);
		} else {
			getExprUtil(res, currExp + "+" + part, input, target, i + 1, currVal + curr, curr); 
			getExprUtil(res, currExp + "-" + part, input, target, i + 1, currVal - curr, -curr); 
			getExprUtil(res, currExp + "*" + part, input, target, i + 1, currVal - last + last * curr, last * curr);
		}


	}
}