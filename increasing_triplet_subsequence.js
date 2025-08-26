/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let first = Infinity;   // smallest so far
    let second = Infinity;  // second smallest so far

    for (let n of nums) {
        if (n <= first) {
            first = n;       // update first if smaller
        } else if (n <= second) {
            second = n;      // update second if between first and second
        } else {
            // n > second → found a triplet (first < second < n)
            return true;
        }
    }
    return false;
};
