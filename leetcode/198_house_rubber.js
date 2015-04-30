/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums.length === 0) {
    return 0;
  }
  var dp = [],
      i;

      dp[0] = 0,
      dp[1] = nums[0],
      dp[2] = nums[1];


      for (i = 3; i < nums.length+1; i += 1) {
        dp[i] = Math.max(dp[i-2], dp[i-3]) + nums[i-1];
      }

      return Math.max(dp[nums.length], dp[nums.length-1]);

};

var a = [1,3,1];
console.log(rob(a));
