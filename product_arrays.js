/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let n = nums.length;
    let answer = new Array(n);

    // Step 1: calculate prefix products
    let prefix = 1;
    for (let i = 0; i < n; i++) {
        answer[i] = prefix;   // store product of all elements before i
        prefix *= nums[i];    // update prefix
    }

    // Step 2: calculate suffix products and multiply with prefix
    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
        answer[i] *= suffix;   // multiply stored prefix with suffix
        suffix *= nums[i];     // update suffix
    }

    return answer;
};

// Example usage:
console.log(productExceptSelf([1,2,3,4]));      // [24, 12, 8, 6]
console.log(productExceptSelf([-1,1,0,-3,3])); // [0, 0, 9, 0, 0]
