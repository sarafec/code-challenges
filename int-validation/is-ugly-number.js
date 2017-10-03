/*

problem statement:
Write a program to check whether a given number is an ugly number. 
An ugly numbers are positive numbers whose prime factors only include 2, 3, 5
1 is typically treated as an ugly number

work left to do:
1 - write explaination
2 - approximate running time
3 - write iteratively
4 - test

*/

let inputNum = 39999999445756643839;

var isUgly = function(num) {
	if(num === 0) return false;
	if(num === 1) return true;

	if(num%2 === 0){
		num = num/2;
		return isUgly(num);
	}

	if(num%3 === 0){
		num = num/3;
		return isUgly(num);
	}

	if(num%5 === 0){
		num = num/5;
		return isUgly(num);
	}

	return false;
};

console.log(isUgly(inputNum));