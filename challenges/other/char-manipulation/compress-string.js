/*

problem statement: 
Given a string, perform basic string compression using the counts of repeated characters.
If the compressed string would not become smaller than the original string, 
your method should return the original string.

running time: O(n)

work left to do:
1 - write explaination
2 - test

*/

let str = "aaabbbc";

function compressString(str){
	let strOutput = "";
	let sum = 1;

	for(let i = 0; i < str.length; i++){
		//if the characters side by side are equal increment the sum
		if (str.charAt(i) === str.charAt(i + 1)){
			sum++;
		} else {
			//append compression expression to output string
			strOutput = strOutput + str.charAt(i) + sum;
			//reset sum
			sum = 1;
		}
	}

	if(strOutput.length > str.length){
		return str;
	} else {
		return strOutput;
	}

}

console.log(compressString(str));