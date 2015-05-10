/**
 * @param {string} digits
 * @return {string[]}
 */


var letterCombinations = function(digits) {
  var map = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
  };

  var res = [];

  if (!digits) {
    return res;
  }

  (function dfs(idx, items) {

    if (idx === digits.length) {
      res.push(items.slice(0).join(""));
    } else {
      for (var j=0; j < map[digits[idx]].length; j += 1) {
        items.push(map[digits[idx]][j]);
        dfs(idx+1, items);
        items.pop();
      }
    }
  }(0, []));

  return res;
};

console.log(letterCombinations('22'));
