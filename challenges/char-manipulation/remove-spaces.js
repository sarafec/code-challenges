/*
problem statement:
givne a string, remove all spaces.

running time: O(n)
but, how does regex really work?

explaination:
This could be done using sequential search, checking for spaces of all types.
Or it can be done doing regex. I've opted for regex.

work left to do:
1 - test

*/

function removeSpaces(str) {
	
	// remove all spaces using regex
	str = str.replace(/\s/g, '');
	// return modified string
	return str;

}

let str = 'this is     totally  great ';

console.log(removeSpaces(str));