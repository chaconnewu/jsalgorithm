/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var maximum = nums[0],
        curSum = nums[0],
        i;

    for (i = 1; i < nums.length; i += 1) {
        if (curSum + nums[i] < nums[i]) {
            curSum = nums[i];
        } else {
            curSum += nums[i];
        }

        if (curSum > maximum) {
            maximum = curSum;
        }
    }

    return maximum;
};

var a = [-2,1,-3,4,-1,2,1,-5,4];

console.log(maxSubArray(a));
