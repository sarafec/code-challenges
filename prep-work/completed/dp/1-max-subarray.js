var maxSubArray = function(nums) {
    
    if (nums.length === 0) return 0;
    
    let maxSoFar = nums[0],
     maxEndingHere = nums[0];

    nums.forEach( (entry, index) => {
        if (index !== 0) { 
            maxEndingHere = Math.max(entry, maxEndingHere + entry);
            maxSoFar = Math.max(maxSoFar, maxEndingHere);
        }
    });

    return maxSoFar;

};
