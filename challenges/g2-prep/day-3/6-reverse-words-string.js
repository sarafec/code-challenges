/* Reverse Words in String */

/*

Explanation: Use a stack to push all words before space. When we hit a space,
we'll empty the stack. 

*/

function reverseWords (str) {
	const stack = new Stack();

	for(let i = 0; i < str.length; i++) {
		if(str.charAt(i) !== ' ') {
			stack.push(str.charAt(i));
		} else {
			while(!stack.isEmpty()) {
				console.log(stack.pop());
			}
			console.log(" ");
		}
	}

	while (!stack.isEmpty()) {
		console.log(stack.pop());
	}
}