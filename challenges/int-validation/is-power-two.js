/*

problem statement:
given an int, determine if that number is a power of 2

running time: O(n)


work left to do:
1 - add explaination
2 - test

*/

function isPowerOfTwo(val) {
	//0 is not a power of 2
	if(val === 0){
		return false;
	}

	//2^0 is 0
	if(val === 1) {
		return true;
	}

	//1 is the smallest power of two
	//keep dividing the val by 2 until we get below 1
	while(Math.floor(val) > 0) {
		val = val/2;

		if(val === 1) {
			return true;
		}

	}

	return false;
}

let val = 256;
console.log(isPowerOfTwo(val));