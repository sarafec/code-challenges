/*
source: glassdoor
problem statement:
Given a string, determine if the string is a palindrome.
A palindrome is a sequence of characters that is read the same forward as it is
backwards.

input - string
output - boolean

running time - O(n)
*/

let inputStr = "madam";
let mid = Math.floor(inputStr.length/2);

function isPalindrome(inputStr){
	if(inputStr.length === 0){
		return false;
	} else if(inputStr.length === 1){
		return true;
	}

	//how to handle the midpoint case defines how you set up your logic
	//come back to this problem

};

console.log(isPalindrome(inputStr));