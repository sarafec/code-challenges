/*

problem statement:
given two strings, determine they are anagrams

running time: 
O(n + m), where n represents string characters and m represents array entries
with O(2n) additional memory

explaination: 
create two arrays with 256 entries, which is the number of ascii characters
go through both the strings increment the values (initialized as 0) specified by
the index of both string
if the strings are anagrams, these two count arrays will match
loop through the count arrays to check for equality

work left to do:
1 - clean up explaination
2 - test

*/

function isAnagram(str1, str2) {
	//initialize arrays with 0s
	count1 = initArr(256);
	count2 = initArr(256);

	//if string length doesn't match, it isn't an anagram
	if(str1.length !== str2.length) {
		return false;
	}

	//fill in arrays based on character code
	//in js the character code is the same as ascii up to 128
	//using String.prototype.charCodeAt
	for(let i = 0; i < str1.length; i++) {
		count1[str1.charCodeAt(i)]++;
		count2[str2.charCodeAt(i)]++;
	}


	//compare arrays of characters
	for(let i = 0; i < count1.length; i++){
		if(count1[i] != count2[i]){
			return false;
		}
	}

	//if the character arrays are the same, return true
	return true;
}

//initialize array of the specified length with 0s
function initArr(n) {
	let arr = Array.apply(null, Array(n));
	return arr.map(function(x) { return 0 });
}

let str1 = 'listen';
let str2 = 'silent';

console.log(isAnagram(str1, str2));

