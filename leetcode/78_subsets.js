/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  var res = [];

  nums.sort(function(a, b) {
    return a-b;
  });

  (function recur(idx, items){
    res.push(items.slice(0));
    if (idx === nums.length) {
      return;
    } else {
      for (var i = idx; i < nums.length; i += 1) {
        items.push(nums[i]);
        recur(i+1, items);
        items.pop();
      }
    }

  }(0, []));

  return res;
};

console.log(subsets([1,2,3]));
