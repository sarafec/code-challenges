/*
source: mock interview - 9/16/2017
problem statement:
Given an integer input, return its closest whole number square root

input - int
output - int

running time: O(log n)
*/

//define initial input values
let inputNum = 22593;
let highVal = inputNum;

function findSquareRoot(num, low, high){
	if(low > high) return - 1;

	//hanlde edge cases
	if (num === 0){
		return 0;
	} else if (num === 1){
		return 1;
	} else {
	//handle upper bound of numbers in js
		high = Math.min(high, Number.MAX_SAFE_INTEGER);
	}

	//define midpoint for current iteration
	let mid = Math.floor((low + high)/2);
	let midSquared = (mid**2);

	//return midpoint if its squared value is less than or equal to the input value
	//or if its next value squared is less greater than the input value
	if (midSquared <= num && (mid+1)*(mid+1) > num){
		return mid;
		
	//call the findSquareRoot function moving "left" down the line of possible square roots
	} else if(midSquared > num){
		return findSquareRoot(num, low, mid-1);

	//call the findSquareRoot function moving "right" down the line of possible square roots
	}  else {
		return findSquareRoot(num, mid+1, high);
	}

}

console.log(findSquareRoot(inputNum, 1, highVal));