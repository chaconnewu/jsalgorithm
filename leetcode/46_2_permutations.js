/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  var res = [];
  function swap(arr, i, j) {
    tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }

  (function dfs(arr, cur) {
    if (cur === nums.length-1) {
      res.push(arr.slice(0));
    } else {
      for (var i = cur; i <= nums.length-1; i += 1) {
        swap(arr, i, cur);
        dfs(arr, cur+1);
        swap(arr, i, cur);
      }
    }
  }(nums, 0));

  return res;
}

console.log(permute([1,2,3]));
