/*

We'll remove all items one by one, then we recur. After the recursive calls, we push all items back except the middle item.
Running time O(n)
Space complexity O(n), recursing through all stack elements

*/

function deleteMid(stack, n, curr=0) {
	if (stack.empty() || curr === n) {
		return;
	}

	let currItem = stack.pop();

	deleteMid(stack, n, curr+1);

	if (curr !== Math.floor(n/2)){
		stack.push(currItem);
	}
}
