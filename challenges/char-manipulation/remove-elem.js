/*

problem statement:
Given an array and a value, remove all instances of that value in place and return the new length.
You cannot use extra space for another array - must use constant memory.
The order of elements can be changed. 

running time: O(n)

work left to do:
1 - write explaination
2 - test

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