/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  candidates.sort(function(a, b) {
    return a - b;
  });

  var res = [];

  (function recur(idx, cur){
    var i,
        total;

    if (cur.length > 0 ){
      total = cur.reduce(function(a, b) {
      return a + b;
      });
    } else {
      total = 0;
    }

    if (total === target) {
      res.push(cur.slice(0));
    } else if (total > target || idx >= candidates.length) {
      return;
    } else {
      for (i = idx; i < candidates.length; i += 1) {
        cur.push(candidates[i]);
        recur(i, cur);
        cur.pop();
      }
    }

  }(0, []));

  return res;
};

var a = [7,6,3,2];
console.log(combinationSum(a, 7));
