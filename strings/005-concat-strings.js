/*
source: Glassdoor
problem statement:
concatenate two strings replacing every space or set of multiple spaces with a single dash

input - two strings
output - one string

running time: O(n)

note: I am choosing to insert a space between the two strings
*/

let str1 = "this is absolutely great";
let str2 = "and I am      not interested in that.";

function concatStrings(str1, str2){

	if(str1.length === 0 && str2.length === 0){
		return "";
	}

	//concat strings together
	let concatArr = (str1 + " " + str2).split("");
	
	for(let i = 0; i < concatArr.length; i++){
		if(concatArr[i] === " "){
			concatArr[i] = "-";
		}
	}

	return concatArr.join("");

}

console.log(concatStrings(str1, str2));