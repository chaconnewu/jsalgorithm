var TreeNode = require('./building').TreeNode;
var buildTree = require('./building').buildTree;

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
  var maxPathSum = -Infinity;

  (function dfs(node){
    if (!node) {
      return 0;
    }

    var leftMax = 0,
        rightMax = 0,
        left,
        right;

    if (node.left) {
      left = dfs(node.left);
      if (left > 0) {
        leftMax = left;
      }
    }

    if (node.right) {
      right = dfs(node.right);
      if (right > 0) {
        rightMax = right;
      }
    }

    if (node.val+leftMax+rightMax > maxPathSum) {
      maxPathSum = node.val+leftMax+rightMax;
    }

    return Math.max(node.val, Math.max(node.val+leftMax, node.val+rightMax));

  }(root));

  return maxPathSum;
};

var t = buildTree('1,2,3,4')

console.log(maxPathSum(t));
