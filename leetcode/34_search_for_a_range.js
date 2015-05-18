/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  var lo = 0,
      hi = nums.length - 1,
      mid,
      start = -1,
      end = -1;

  while (lo <= hi) {
    mid = Math.floor((lo+hi)/2);
    if (nums[mid] > target) {
      hi = mid - 1;
    } else if (nums[mid] < target) {
      lo = mid + 1;
    } else {
      if (nums[mid-1] === nums[mid]) {
        hi = mid - 1;
      } else {
        start = mid;
        break;
      }
    }
  }
  lo = 0,
  hi = nums.length - 1;

  while (lo <= hi) {
    mid = Math.floor((lo+hi)/2);
    if (nums[mid] > target) {
      hi = mid - 1;
    } else if (nums[mid] < target) {
      lo = mid + 1;
    } else {
      if (nums[mid+1] === nums[mid]) {
        lo = mid + 1;
      } else {
        end = mid;
        break;
      }
    }
  }

  return [start, end];
};


console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
