/* 

problem statement:

running time: O(n)

work left to do:
1 - write explaination
2 - test

*/

function reverseStringInPlace(inputString){
	return (inputString === '') ? '' : reverseStringInPlace(inputString.substr(1)) + inputString.charAt(0);
}

console.log(reverseStringInPlace('mississippi'));