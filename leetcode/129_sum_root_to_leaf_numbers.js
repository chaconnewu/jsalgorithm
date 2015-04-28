var b = require('./building');

function TreeNode(val) {
   this.val = val;
   this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @returns {number}
 */
var sumNumbers = function(root) {
    var tol = 0;
    if (!root) {
        return 0;
    }

    (function recur(node, curSum) {
        if (!node.left && !node.right) {
            curSum += node.val.toString();
            tol += parseInt(curSum, 10);
        } else {
            curSum += node.val.toString();
            if (node.left) {
                recur(node.left, curSum);
            }
            if (node.right) {
                recur(node.right, curSum);
            }
        }
    }(root, ''));

    return tol;
};

console.log(sumNumbers(b.buildTree('1,2')));
