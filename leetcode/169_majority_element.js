/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    function recur(nums) {
        if (nums.length === 1) {
            return nums[0];
        }
        var l = recur(nums.slice(0, nums.length/2));
        var r = recur(nums.slice(nums.length/2, nums.length));

        var lCnt = 0,
            rCnt = 0,
            i;

        for (i = 0; i < nums.length; i += 1) {
            if (nums[i] === l) {
                lCnt += 1;
            } else if (nums[i] === r) {
                rCnt += 1;
            }
        }

        return lCnt > rCnt ? l : r;
    }

    return recur(nums);
};

var a = [1,1,2,3];
console.log(majorityElement(a));
