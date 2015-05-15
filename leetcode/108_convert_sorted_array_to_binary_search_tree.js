var TreeNode = require('./building').TreeNode;

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  if (nums.length === 0) {
    return null;
  }

  if (nums.length === 1) {
    return new TreeNode(nums[0]);
  }

  var mid = Math.floor(nums.length/2);
  var newNode = new TreeNode(nums[mid]);
  newNode.left = sortedArrayToBST(nums.slice(0, mid));
  newNode.right = sortedArrayToBST(nums.slice(mid+1));

  return newNode;
};

var preorderTraversal = function (node) {
  if (node) {
    console.log(node.val);
    preorderTraversal(node.left);
    preorderTraversal(node.right);
  }
}

var arr = [1,2,3,4,5,6,7,8];
var root = sortedArrayToBST(arr);
preorderTraversal(root);
