/*

Fermat's primality test checks if a number is prime or not.
However, it is a probabilistic method. If given a prime number, the method always returns true. If given a non-prime (a number that is a composite), then it may return true or false, but the probability of producing incorrect results for a composite is low and can be reduced by doing more iterations.

Fermat's primality test is often used if a rapid method is needed for filtering. For example, in the key generation phase of the RSA public key cryptographic algorithm

The running time is (k log n)

*/

function isPrime(num, k) {
	if (n <= 1 || n === 4) return false;
	if (n <= 3) return true;
	while (k > 0) {
		// pick a random number between 2 and n-2		
		let answer = 2 + Math.floor(Math.random() % (num - 4));

		// fermat's theorem
		if (Math.pow(a, num-1) !== 1) return false;
		k--;
	}
	return true;
}
