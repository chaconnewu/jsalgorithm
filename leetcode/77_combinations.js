/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  var res = [];

  (function recur(idx, items) {
    if (items.length === k) {
      res.push(items.slice(0));
    } else {
      for (var i = idx; i <= n; i += 1) {
        items.push(i);
        recur(i+1, items);
        items.pop()
      }
    }
  }(1, []));
  return res;
};

console.log(combine(4, 2));
