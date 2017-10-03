/*

problem statement:
given a string reverse the characters in every word. 

running time - O(n + m), n being characters and m being words

work left to do:
1 - write explaination
2 - test

*/

let inputString = 'this is really fantastic';

function reverseStringByWord(inputString){
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