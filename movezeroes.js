var moveZeroes = function(nums) {
    let insertPos = 0; // pointer for where the next non-zero should go

    // Step 1: Move all non-zero numbers to the front
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[insertPos] = nums[i];
            insertPos++;
        }
    }

    // Step 2: Fill the rest with 0s
    while (insertPos < nums.length) {
        nums[insertPos] = 0;
        insertPos++;
    }
};
