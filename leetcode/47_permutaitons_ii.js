/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  function swap(arr, i, j) {
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }

  var res = [];

  nums.sort(function(a, b) {
    return a-b;
  });

  (function dfs(arr, idx) {
    if (idx === arr.length-1) {
      res.push(arr.slice(0));
    } else {
      for (var i = idx; i < arr.length; i += 1) {
        if (i > idx && arr[i] === arr[i-1]) {
          continue;
        } else {
          swap(arr, i, idx);
          var p1 = arr.slice(0, idx+1);
          var p2 = arr.slice(idx+1);
          p2.sort(function(a, b) {
            return a-b;
          });
          arr = p1.concat(p2);
          dfs(arr, idx+1);
          swap(arr, i, idx);
        }
      }
    }
  }(nums, 0));

  return res;
};

console.log(permuteUnique([0,1,0,0,9]));
