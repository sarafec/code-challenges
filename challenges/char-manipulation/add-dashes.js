/*

problem statement:
concatenate two strings replacing every space or set of multiple spaces with a single dash


running time: O(n)

work left to do:
1 - add explaination
2 - test

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