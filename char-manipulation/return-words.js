/*

problem statement:
given a string, return all words.

running time: O(n), where n are the words in the string

work left to do:
1 - add explaination
2 - rewrite without built in methods, split and join
1 - test

*/

function returnWordsFromString(str) {
	//split string by space
	let charArr = str.split(' ');
	//print as string separated by new lines
	return charArr.join('\n');
}

let str = 'this is a totally great solution to a messy problem';
console.log(returnWordsFromString(str));