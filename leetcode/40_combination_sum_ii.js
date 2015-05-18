/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  candidates.sort(function(a, b) {
    return a - b;
  });

  var res = [];

  (function dfs(curIdx, items, curSum){
    if (curSum === target) {
      res.push(items.slice(0));
    } else {
      for (var i = curIdx; i < candidates.length; i += 1) {
        if (curSum + candidates[i] > target) {
          break;
        }
        items.push(candidates[i]);
        dfs(i+1, items, curSum+candidates[i]);
        items.pop();
      }
    }
  }(0, [], 0));
  var sortedRes =  res.sort();
  var realRes = [];

  for (i = 0; i < sortedRes.length-1; i += 1) {
    var is_same = (sortedRes[i+1].length == sortedRes[i].length && sortedRes[i+1].every(function(element, index){
      return element === sortedRes[i][index];
    }));
    if (!is_same) {
      realRes.push(sortedRes[i]);
    }
  }

  return realRes;
};

console.log(combinationSum2([10,1,2,7,6,1,5], 8));
