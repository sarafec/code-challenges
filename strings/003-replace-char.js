/*
source: glassdoor
problem statement:
Given a string, replace a specific character in that string with another string

input - string, replacement string, specific char to replace
output - new string

running time - O(n)
*/

//define function input values
let inputStr = "";
let replaceStr = ".";
let searchChar = "i";

function replaceChar(inputStr, replaceStr, searchChar){
	if(inputStr.length === 0){
		return inputStr;
	}

	let inputArr = inputStr.split("");

	//sequentially search inputArr for searchChar
	for(let i = 0; i < inputArr.length; i++){
		//if searchChar is found, overwrite it with replaceStr
		if(inputArr[i] === searchChar){
			inputArr[i] = replaceStr;
		}
	}

	//return character array as string using .join() method
	return inputArr.join("");
};

console.log(replaceChar(inputStr, replaceStr, searchChar));