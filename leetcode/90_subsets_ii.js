/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  var res = [];
  nums.sort(function(a, b) {
    return a-b;
  });

  var startSet = new Set();


  (function dfs(start, cur) {
    console.log(cur);
    res.push(cur.slice(0));
    if (start < nums.length) {
      // if (startSet.has(nums[start])) {
      //   return;
      // }

      for (var i = start; i < nums.length-1; i += 1) {
        // startSet.add(nums[i]);
        cur.push(nums[i]);
        dfs(i+1, cur);
        if (cur[i] === cur[i-1]) {
          cur.pop();
        }
        cur.pop();
      }
    }

  }(0, []));

  return res;
};

console.log(subsetsWithDup([1,2,2]));
