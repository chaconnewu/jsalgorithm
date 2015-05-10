/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  var res = [];

  (function dfs(cur, items) {
    if (items.length === k) {
      res.push(items.slice(0));
    } else {
      for (var i=cur; i <= n; i += 1) {
        items.push(i);
        dfs(i+1, items);
        items.pop();
      }
    }
  }(1, []));

  return res;
};

console.log(combine(4, 2));
