// note make sure to add one to the number of stairs (num) for the 
// code to run as intended
function countWays (num, m) {
	const result = Array(num);
	result[0] = 1;
	result[1] = 1;
	for (let i = 2; i < num; i++) {
		result[i] = 0;
		for (let j = 1; j <= m && j <= i; j++) {
			result[i] += result[i-j];
		}
	}
	return result[num - 1];
}
