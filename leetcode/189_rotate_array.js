/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  var len = k % nums.length;
  for (var i = 0; i < nums.length - len; i += 1) {
    nums.push(nums.shift());
  }

  // console.log(nums);
};

console.log(rotate([1,2], 3));
