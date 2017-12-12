/*

problem statement: 
determine if  a word is a palindrome

running time: O(n-1/2)

explaination:
convert to a character array. 
work from the outermost character inwards checking for equality.
if all characters are equal, return true.
if a character is not equal, return false.

edge cases:
 - if one character return true
 - if 0 characters return true

work left:
1 - why doesn't it return anything?
2 - write iteratively 
3 - test

*/

function isPalindrome(str) {
	let charArr = str.split('');
	let charArrLength = charArr.length;

	// if there is one character or an empty arr, it is a palindrome
	if(charArrLength === 0 || charArrLength === 1){
		return true;
	} else {
		// compare characters moving from the outermost in
		compareChars(charArr, 0, charArrLength - 1);
	}
}

function compareChars(charArr, low, high) {
	
	//if only one character is represented, return true
	if(low === high){
		return true;
	}

	// if the specified characters are not equal, return false
	if(charArr[low] !== charArr[high]) {
		return false;
	}

	// if there are characters left to compare, call function again
	if(low + 1 < high) {
		return compareChars(charArr, low + 1, high - 1);
	}

	// if nothing left to compare, return true
	return true;
}

let strVal = 'madtam';

console.log(isPalindrome(strVal));