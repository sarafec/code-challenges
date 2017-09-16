/*
source: Kal Academy S.10
problem statement:
Given a string, reverse its characters

input - string
output - string

running time - O(n)

notes: we are ignoring js' built in reverse() method in order to build our own
we could also perform a recursive solution, but it is also O(n)
however, the iterative solution more straight forward, but also more verbose

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


/*
 recursive solution - O(n)

 let reverseStringInPlace = function(inputString){
	return (inputString === '') ? '' : reverseStringInPlace(inputString.substr(1)) + inputString.charAt(0);
};
*/