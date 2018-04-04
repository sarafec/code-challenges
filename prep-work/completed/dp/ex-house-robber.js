function maxHouseRobSum(arr) {
	if (arr.length === 0) return 0;
	if (arr.length === 1) return arr[0];

	// initialize dynammic programming structure
	const dp = [];
	dp[0] = arr[0];
	dp[1] = Math.max(arr[0], arr[1]);

	// create comparison logic
	for (let i = 2; i < arr.length; i++) {
		dp[i] = Math.max(dp[i-2] + nums[i], dp[i -1])
	}

	// return final item in dp array
	return dp[nums.length-1];

}

