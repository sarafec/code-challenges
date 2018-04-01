var containsDuplicate = function(nums) {
    if (nums.length === 0 || nums.length === 1) return false;
    
    
    const sortedArr = nums.sort((a, b) => a - b );

    
    for (let i = 0; i < sortedArr.length; i++) {
        if (sortedArr[i] === sortedArr[i + 1]) return true;
    };

    return false;

};
