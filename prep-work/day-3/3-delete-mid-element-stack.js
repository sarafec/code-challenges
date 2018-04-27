/* Delete Middle Element From Stack */

/*

Explanation: using recursion, we'll remove all elements one by one.
Then, we'll put all items back except the middle one.

*/

function deleteMid(stack, size, curr = 0) {
	if (stack.isEmpty() || curr = size) return;

	let currItem = stack.pop();

	deleteMid(stack, size, curr+1);

	if(curr !== Math.floor(n/2)) {
		stack.push(currItem);
	}
}