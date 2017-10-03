/*

problem statement:
given an int value representing a year, determine if it is a leap year.

running time:
O(n)

explaination:
a leap yaer is a year divisible by 4, 
but not exactly divisible by 100, 
except if divisible by 400

work left to do:
1 - test

*/

function isLeapYear(val) {

	//handle edge cases
	if(val === '' || val === null) {
		return false;
	}

	//year should be divisible by 400
	if(val % 400 === 0) {
		return true;
	}

	//but year should not be divisible by 100, if not divisible by 400
	//this is due to some rounding issue with leap years, see wikipedia
	if(val % 100 === 0){
		return false;
	}

	//year should be divisible by 4
	if(val % 4 === 0) {
		return true;
	}

	//otherwise it is not a leap year, return false
	return false;
}

//input year
intVal = 2000;
console.log(isLeapYear(intVal));