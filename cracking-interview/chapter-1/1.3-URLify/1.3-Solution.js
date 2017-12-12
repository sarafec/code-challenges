
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