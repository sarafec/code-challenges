var merge = function(nums1, m, nums2, n) {
    if (nums1 === 0 || nums2 === 0 || m === 0 || n === 0) return;
    
    const totalArr = nums1.concat(nums2);
    let skipLength = m;
    
    for (let i = skipLength; i < totalArr.length ;i++) {
        let key = totalArr[i];
        let j = i - 1;
        
        while (j >= 0 && key < totalArr[j]) {
            totalArr[j+1] = totalArr[j];
            j -= 1;
        }
        totalArr[j+1] = key;
    }
    return totalArr;
    
};