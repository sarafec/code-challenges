/*
source: LeetCode
problem statement:
Given an array and a value, remove all instances of that value in place and return the new length.
You cannot use extra space for another array - must use constant memory.
The order of elements can be changed. 

edge cases: empty array
test cases, small: [45, 44, 33, 12, 23, 12, 29, 12, 0], 12
running time: O(n)

notes: the array may contain duplicates and binary search would not be an efficient strategy. 
imagine if the test case was [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 1
binary search would be useless
sequential search is the best you have in this case
*/

let inputArr = [1,1,1,1,1,1,1,1,1,1,1,1,1];
let inputVal = 12;

var removeElement = function(nums, val) {
	//handle empty array
	if(nums.length === 0){
		return 0;
	}

	//sequential search for val in nums array
	//starting from the end of the array
	for(let i = nums.length - 1; i >= 0; i--){
		//on match, remove item
		if(nums[i] === val){
			nums.splice(i, 1);
		}

	}
	
	//return array length
	return nums.length;
};

console.log(removeElement(inputArr, inputVal));