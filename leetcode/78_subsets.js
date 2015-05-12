/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  var res = [];

  nums.sort(function(a, b) {
    return a-b;
  });

  (function dfs(start, length, items) {
    res.push(items.slice(0));
    if (start === nums.length) {
      return;
    }

    for (var i = start; i < nums.length; i += 1) {
      items.push(nums[i]);
      dfs(i+1, length+1, items);
      items.pop();
    }
  }(0, 0, []));

  return res;
};

console.log(subsets([4,1,0]));
