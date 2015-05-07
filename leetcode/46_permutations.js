/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  function swap(arr, i, j) {
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }

  var res = [];

  (function dfs(arr, start) {
    if (start === arr.length -1 ) {
      res.push(arr.slice(0));
    } else {
      for (var i = start; i < arr.length; i += 1) {
        swap(arr, i, start);
        dfs(arr, start+1);
        swap(arr, i, start);
      }
    }
  }(nums, 0));

  return res;
};

console.log(permute([1,2,3]));
