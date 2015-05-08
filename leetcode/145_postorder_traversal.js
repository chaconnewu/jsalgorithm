var buildTree = require('./building').buildTree;
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
  var res = [];

  (function recur(node) {
    if (!node) {
      return;
    } else {
      if (node.left) {
        recur(node.left);
      }

      if (node.right) {
        recur(node.right);
      }

      res.push(node.val);
    }

  }(root));

  return res;
};

console.log(postorderTraversal(buildTree('1,2,3')));
