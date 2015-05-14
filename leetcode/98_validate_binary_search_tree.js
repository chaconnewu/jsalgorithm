var TreeNode = require('./building').TreeNode;
var buildTree = require('./building').buildTree;

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
// var isValidBST = function(root) {
//   var flatten = [];
//   (function dfs(node){
//     if (!node) {
//       return;
//     } else {
//       dfs(node.left);
//       flatten.push(node.val);
//       dfs(node.right);
//     }
//   }(root));

//   if (flatten.length <= 1) {
//     return true;
//   }

//   for (var i = 1; i < flatten.length; i += 1) {

//     if (flatten[i] <= flatten[i-1]) {
//       return false;
//     }
//   }
//   return true;
// };

var isValidBST = function(root) {
  return (function recur(node, left, right){
    if (!node) {
      return true;
    } else if (node.val <= left || node.val >= right) {
      return false;
    } else {
      return recur(node.left, left, node.val) && recur(node.right, node.val, right);
    }
  }(root, -Infinity, Infinity))
};


var t = buildTree('1, 1');
console.log(isValidBST(t));
