/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
   var res = [];
   dfs(root, res, 0);
   return res;
};

var dfs = function(root, res, level) {
	if (!root) return res;
	if (res.length < (level + 1)) {
		res.push(root.val);
	} else {
		res[level] = root.val;
	}

	dfs(root.left, res, level + 1);
	dfs(root.right, res, level + 1);

};
