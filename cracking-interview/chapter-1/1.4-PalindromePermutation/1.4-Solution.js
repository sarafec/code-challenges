function isPalindrome(str) {
	// move to lower case to create case insensitive string
	let modifiedStr = str.toLowerCase();
	let isOdd = modifiedStr.length % 2 !== 0;
	let foundOdd = false;
	let frequencyTable = {};

	// fill frequency table with counts
	for(let i = 0; i < modifiedStr.length; i++) {
		let targetChar = modifiedStr.charAt(i)

		if(targetChar !== ' ') {
			if(!frequencyTable[targetChar]){
				frequencyTable[targetChar] = 1;
			} else {
				frequencyTable[targetChar] += 1;
			}
		}
	}

	// check to make sure there is not more than one odd item on odd length str
	// and only even counts on non-odd length strings
	for( let entry in frequencyTable) {
		if(frequencyTable[entry] % 2 !== 0 && isOdd) {
			if (foundOdd) {
				return false;
			} else {
				foundOdd = true;
			}
		} else if (frequencyTable[entry] % 2 !== 0) {
			return false;
		}
	}

	return true;
}

console.log(isPalindrome('jerksjerk'));

// improvements - instead of counts, toggle 0s and 1s