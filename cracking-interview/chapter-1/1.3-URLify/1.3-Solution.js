// performance: o(n) -- technicallly O(3n), you have to loop over each character three times
// the first time when splitting the string, the second when overwriting the array items, 
// and third when joining the array as a string

// there were additional considerations to be made if you are using a language that
// does not dynamically size their arrays

function urlify(str) {

	// create character array
	let strArr = str.split('');

	// search for strings and overwrite spaces with '%20'
	for(let i = 0; i < strArr.length; i++) {
		if(strArr[i] === ' ') {
			strArr[i] = '%20';
		}
	}

	// return single string
	return strArr.join('');

}

console.log(urlify('bah bah black sheep  '));

// questions remaining
// 1 - how does JavaScript dynamically size its arrays?