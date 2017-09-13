/*
source: LeetCode
problem statement:
Find the contiguous subarray within an array which has the largest sum.

edge cases: empty array, check array with one value
test cases, small:
test cases, large:
running time: O(n)
*/

let inputArr = [20, -30, 50, 150, -50, 25];

var maxSubArray = function(nums) {
	//handle edge cases
	if(nums.length === 0){
		return 0;
	}

	//initialize vars for dynamic programming solution
    let maxSum = nums[0];
    let currSum = nums[0];

    for(let i = 1; i < nums.length; i++){
		//given current nums[i], find current largest sum
		currSum = Math.max(nums[i], currSum + nums[i]);
		
		//check if currSum is greater or less than maxSum 
		//from initialization or previous iterations
		maxSum = Math.max(currSum, maxSum);
    }

    return maxSum;
};

console.log(maxSubArray(inputArr));