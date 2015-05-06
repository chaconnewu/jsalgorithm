var buildTree = require("./building").buildTree;

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    var found = false;
    if (!root) {
        return false;
    }

    (function dfs(node, curSum) {
        if (!node.left && !node.right) {
            if(curSum + node.val === sum) {
                found = true;
            }
        } else {
            if (node.left) {
                dfs(node.left, curSum + node.val);
            }

            if (node.right) {
                dfs(node.right, curSum + node.val);
            }
        }
    }(root, 0));
    return found;
};

var t = buildTree("5,4,8,11,#,13,4,7,2,#,#,#,1");
console.log(hasPathSum(t, 21));