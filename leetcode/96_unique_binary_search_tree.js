/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  var res = [1, 1, 2, 5],
      i,
      j;

  for (i = 4; i <= n; i += 1) {
    var tol = 0;
    for (j = 0; j <= i-1; j += 1) {
      tol += res[j] * res[i-j-1];
    }

    res.push(tol);
  }

  return res[n]
};

for (var i = 0; i < 30; i += 1) {
  console.log(numTrees(i));
}
