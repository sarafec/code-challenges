/* 

problem statement: 
You are a professional robber planning to rob houses along a street. Each house has a certain amount
of money stashed, the only constraint stoppin gyou from robbing each of them is that adjacent houses
have a security system connected and it will contact the polic if two adjacent houses were broken into
on the same night.

Given a list of non-negative integers representing the amound of money of each house, determine the
maximum amount of money you can rob tonight without alerting the police.


running time: O(n)

work left to do:
1 - write explaination
2 - test

*/

let pracArr = [1000, 250, 4, 25, 300, 78, 39, 52];

var rob = function(nums) {
	let dp = [];

	//edge cases
    if(nums.length === 0){
		return 0;
    }

    if(nums.length === 1){
		return nums[0];
    }

    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);

	for(let i = 2; i < nums.length; i++){
		dp[i] = Math.max(dp[i-2] + nums[i], dp[i - 1]);
	}

    return dp[nums.length - 1];
};

console.log(rob(pracArr));