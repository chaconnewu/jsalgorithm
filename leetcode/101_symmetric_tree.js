var b = require('./building');

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @returns {boolean}
 */
var isSymmetric = function(root) {
    function check(left, right) {
        if (!left && !right) {
            return true;
        } else if (!left || !right) {
            return false;
        }
        return (left.val == right.val) && check(left.left, right.right) && check(left.right, right.left);
    }
    if (!root) {
        return true;
    } else {
        return check(root.left, root.right);
    }
};

var t = b.buildTree('1,2,2,#,1,1');
console.log(isSymmetric(t));
