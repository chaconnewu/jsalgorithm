var buildTree = require('./building').buildTree;


/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
  return (function recur(node) {
    if (!node) {
      return 0;
    } else if (node.left && !node.right) {
      return recur(node.left) + 1;
    } else if (!node.left && node.right) {
      return recur(node.right) + 1;
    } else {
      return Math.min(recur(node.left), recur(node.right)) + 1;
    }
  }(root));
};

var t = buildTree('1,2');
console.log(minDepth(t));
