/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
  var i,
      head = 0,
      curTotal = 0,
      minLength = nums.length,
      found = false,
      curLength = 0;

  for (i = 0; i < nums.length; i += 1) {
    curTotal += nums[i];
    if (curTotal >= s) {
      found = true;
      while (curTotal >= s) {
        curTotal -= nums[head];
        head += 1;
      }
      head -= 1;
      curTotal += nums[head];
    }
    if (curTotal >= s && i - head + 1 < minLength) {
      minLength = i - head + 1;
    }
  }
  if (!found) {
    return 0;
  } else {
    return minLength;
  }
};


console.log(minSubArrayLen(7, [9]));
