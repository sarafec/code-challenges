/*

problem statement:
Given a string, replace a specific character in that string with another string

running time - O(n)

work left to do:
1 - write explaination
2 - test

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