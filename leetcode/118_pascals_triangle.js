/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  var res = [],
      cur,
      row = [];
  for (var i = 1; i <= numRows; i += 1) {
    row = [];
    for (var j = 0; j < i; j += 1) {
      if (j === 0 || j === i - 1) {
        cur = 1;
      } else {
        cur = res[i-2][j] + res[i-2][j-1];
      }
      row[j] = cur;
    }
    res.push(row);
  }

  return res;
};

console.log(generate(10));
