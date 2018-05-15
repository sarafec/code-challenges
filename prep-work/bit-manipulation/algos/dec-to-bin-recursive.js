/*

The recursive call is decimal % 2 + 10 * (findBinary(decimal/2))

*/

function findBinNum(num) {
	if (num === 0) {
		return 0;
	} else {
		return (num % 2 + 10 * findBinNum(num / 2));
	}
}
