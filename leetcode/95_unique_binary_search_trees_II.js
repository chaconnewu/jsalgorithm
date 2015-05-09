var TreeNode = require('./building').TreeNode;

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {

  return (function dfs(start, end) {
    if (start > end) {
      return [null];
    }
    var res = [],
        val,
        i,
        j,
        left,
        right,
        node;

    for (val = start; val <= end; val += 1) {
      left = dfs(start, val-1);
      right = dfs(val+1, end);

      for (i = 0; i < left.length; i += 1) {
        for (j = 0; j < right.length; j += 1) {

          node = new TreeNode(val);
          node.left = left[i];
          node.right = right[j];
          res.push(node);
        }
      }
    }
    return res;
  } (1, n));
};


console.log(generateTrees(3));
