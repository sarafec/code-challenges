// problem - given a number, find if the number is divisible by all of its digits

//running time - O(n), where n is the digits
//space complexity - O(n + m), where n is the digits and m is the number

function isDivisible(num) {
	const strNum = num + '';
	const strArr = strNum.split('');

	if(!num)
		return false;

	for(let i = 0; i < strArr.length; i++) {
		if(num % +strArr[i] !== 0)
			return false;
	}

	return true;
};

isDivisible(127);