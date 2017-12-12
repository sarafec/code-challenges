// optimial solution
// performance: O(n x m) if n are the ascii count arrays and m are the orginal strings
// 				O(2n) space complexity, if n are the ascii count arrays

// edge case - if the strings are a different length, they cannot be permutations

// steps
// create two count arrays for the strings
// initialize the arrays with zeros
// then fill the arrays with the counts based on the string's ascii values
// then compare the two count arrays
// if they are identical the strings are permutations. if not, return false

function isPermutation(str1, str2) {
	if(str1.length !== str2.length) return false;

	// create and fill count arrays
	let strArr1 = [];
	let strArr2 = [];
	for(let i = 0; i <= 128; i++) {
		strArr1.push(0);
		strArr2.push(0);
	}

	// add count to 0-initialized array
	for(let j = 0; j < str1.length; j++) {
		strArr1[str1.charCodeAt(j)] += 1;
		strArr2[str2.charCodeAt(j)] += 1;
	}


	// compare the two count arrays
	// if values are not equal, it is not a permutation, return false
	for(let k = 0; k < strArr1.length; k++) {
		if(strArr1[k] !== strArr2[k]) return false;
	}

	return true;

}

console.log(isPermutation('aab', 'bab'));

// assumptions - the string is an ascii string