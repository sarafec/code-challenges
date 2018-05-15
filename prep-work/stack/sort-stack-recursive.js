/*

The idea is to hold all values in the call stack until the stack becomes empty. When the stack is empty, insert all items one by one in sorted order.

*/

function sortStack(stack) {
	if (!stack.isEmpty()) {
		let currVal = stack.pop();
		sortStack(stack);
		sortedInsert(stack, currVal);
	}
}

function sortedInsert(stack, currVal) {
	if (stack.isEmpty() || currVal > stack.peek()) {
		stack.push(currVal);
		return;
	}

	let temp = stack.pop();
	sortedInsert(stack, currVal);

	stack.push(temp);
}
