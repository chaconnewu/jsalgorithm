var b = require('./building');

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @returns {boolean}
 */
var isSameTree = function(p, q) {
    if (!p && !q) {
        return true;
    } else if (!p || !q) {
        return false;
    }
    return (p.val == q.val) && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};


var a = b.buildTree('1,2,3,4'),
    b = b.buildTree('1,2,3,4');

console.log(isSameTree(a, b));
