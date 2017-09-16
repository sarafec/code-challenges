/*
source: Kal Academy S.11
problem statement:
Given a string reverse the characters in every word. 

input - string
output - ouput

running time - O(n + m), n being characters and m being words

notes - can we clean up the nested loops
		what is a lower-level implementation of a split()

*/

let inputString = 'this is really fantastic';

let reverseStringByWord = function(inputString){
	//note - what is split() really doing?
	let formatArr = inputString.split(' ');

	//note - can we clean this up?
	for(let i = 0; i < formatArr.length; i++){

		//define temp string to reverse
		let tempString = '';
		let wordLength = formatArr[i].length;

		for(let j = wordLength - 1; j >= 0; j--){
			//reverse the word
			tempString += formatArr[i].charAt(j);
		}

		//overwrite orginal value with the reversed word
		formatArr[i] = tempString;
	}

	return formatArr.join(' ');
};

console.log(reverseStringByWord(inputString));