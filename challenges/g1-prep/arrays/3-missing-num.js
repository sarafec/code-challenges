function findMissingNum(nums) {
	const length = nums.length + 1;	
	const total = getTotalSum(length);	
	const current = getCurrentSum(nums);

	// subtract total (sum of 0,1,2...n) from current (sum of all array values)
	return total - current;
	
};

function getTotalSum(val) {
	let count = 0;

	for(let i = 0; i <= val; i++) {
		count += i;
	}

	return count;
};

function getCurrentSum(arr) {
	return arr.reduce((prev, next) => {
		prev + next
	});
}
