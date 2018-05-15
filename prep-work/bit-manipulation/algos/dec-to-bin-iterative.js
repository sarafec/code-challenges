/*

We'll store the remainder when the number is divided by 2, then we'll divide the number by two. We'll continue this process until the number is less than 0. Then, we'll print the array in reverse order.

*/

function getBinNum(num) {
	let binaryNumber = Array(1000);
	let i = 0;
	while (num > 0) {
		binaryNum[i] = n % 2;
		n = Math.floor(n / 2);
		i++;
	}

	for (let j = i - 1; j >= 0; j--) {
		console.log(binaryNumber[j]);
	}
}
