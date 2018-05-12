/* Fermat's Primality Test  */

/*

Explanation: Pick a number randomly in the range 2 to n-2 to represent a. 
a ^ n-1 = 1 (mod n) OR a ^n-1 % n = 1 will always equal true
for a prime number. However, it might return true for numbers
which aren't prime. Iterate using different numbers to ensure the number is prime. 

*/

functio isPrime(num, iterateVal) {
	if (num <= 1 || n === 4) return false;
	if (n <= 3) return true;

	while (iterateVal > 0) {
		let a = 2 + Math.floor(Math.random(num-4));
		if (a ** n-1 !== 1) return false;

		k--;
	}

	return true;
}