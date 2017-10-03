/*

problem statement:
given a string, reverse its characters.


running time - O(n)

work left to do:
1 - write explaination
2 - test

*/

let inputString = 'this is really fantastic';

//iterative solution
let reverseStringInPlace = function(inputString){
	let newString = '';

	for(let i = inputString.length - 1; i >= 0; i--){
		newString += inputString[i];
	}

	return newString;

};

console.log(reverseStringInPlace(inputString));