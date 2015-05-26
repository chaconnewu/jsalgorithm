var buildTree = require("./building").buildTree;
var TreeNode = require('./building').TreeNode;
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// var isBalanced = function(root) {
//   if (!root) {
//     return true;
//   }
//   if (Math.abs(maxDepth(root.left) - maxDepth(root.right)) > 1) {
//     return false;
//   }
//   return isBalanced(root.left) && isBalanced(root.right);
// };

// var maxDepth = function(root) {
//     if (!root) {return 0;}
//     return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
// };

var isBalanced = function(root) {
  (function recur(node){
    if (!node) {
      return 0;
    }

    if (!node.left && !node.right) {
      node.depth = 1;
      return 1;
    } else {
      var leftDepth = recur(node.left);
      var rightDepth = recur(node.right);
      node.depth = Math.max(leftDepth, rightDepth) + 1;
      return node.depth;
    }
  }(root));

  return (function checkBalance(node){
    if (!node) {
      return true;
    }

    var leftDepth = 0,
        rightDepth = 0;

    if (node.left) {
      leftDepth = node.left.depth;
    }

    if (node.right) {
      rightDepth = node.right.depth;
    }

    if (Math.abs(leftDepth - rightDepth) > 1) {
      return false;
    }

    return checkBalance(node.left) && checkBalance(node.right);
  }(root));
};

var t = buildTree("");
console.log(isBalanced(t));
