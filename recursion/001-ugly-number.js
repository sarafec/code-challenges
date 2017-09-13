/*
source: LeetCode
problem statement:
Write a program to check whether a given number is an ugly number. 
Ugly numbers are positive numbers whose prime factors only include 2, 3, 5
Note - 1 is typically treated as an ugly number

edge cases: 1 is ugly, 0 is not ugly, negative numbers
test cases, small: 50, 100, 35, 14
test cases, large: 10003847, 384736, 39999999445756643839
running time: 

attempted iteratively: not yet!
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