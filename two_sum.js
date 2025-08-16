var twoSum = function(nums, target) {
    const seen = new Map(); // store numbers with their indices
    
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (seen.has(complement)) {
            return [seen.get(complement), i];
        }
        seen.set(nums[i], i);
    }
};
