/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  var res = [];
  (function dfs(start, cur, rest){
    if (cur.length === k && rest === 0) {
      res.push(cur.slice(0));
    } else {
      if (cur.length < k) {
        for (var i = start; i < 10; i += 1) {
          if (rest - i >= 0) {
            cur.push(i);
            dfs(i+1, cur, rest-i);
            cur.pop();
          } else {
            break;
          }
        }
      }
    }

  }(1, [], n));

  return res;
};


console.log(combinationSum3(3, 9));
