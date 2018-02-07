// optimal solution
// 1 - create boolean array representing all ascii characters
// 2 - set boolean array to false 
// 3 - loop through the string, checking if the charCode (ascii value) at that index is false
// 4 - if it is, set it to true and move onto the next character
// 5 - if not, return false
// 6 - if we have reached the end of the function, return true - the string is unique

// edge cases - if the string has more characters than there are ascii characters


function isUnique(str) {
	// if str has more letters than there are ascii values, they can't be unique
	if (str.length > 128) return false;

	// fill alphabet boolean array
	let alphabetArr = [];
	for (let i = 0; i <= 128; i++) {
		alphabetArr.push(false);
	}

	// check if letter has been seen before
	for (let j = 0; j < str.length; j++) {
		let strCharCode = str.charCodeAt(j);
		if(alphabetArr[strCharCode]) {
			return false;
		}

		alphabetArr[strCharCode] = true;
	}

	return true;
}

console.log(isUnique(''));

// questions remaining
// 1 - is the empty string unique?