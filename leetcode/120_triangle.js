/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  if (!triangle) {
    return 0;
  }

  var dp = triangle[triangle.length-1];
  for (var i = triangle.length-2; i >= 0; i -= 1) {
    var cur = [];
    for (var j = triangle[i].length-1; j >= 0; j -= 1) {
      cur[j] = Math.min(dp[j+1], dp[j]) + triangle[i][j];
    }
    dp = cur;
  }
  return dp[0];
};

var a = [
        [2],
        [3,4],
        [6,5,7],
        [4,1,8,3]
        ];

console.log(minimumTotal(a));
