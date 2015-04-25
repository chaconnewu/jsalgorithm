var b = require('./building');

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @returns {boolean}
 */
var isSameTree = function(p, q) {
  function recur(p, q) {
    if ((p && !q) || (!p &&q)) {
        return false;
    } else {
        if (p === null && q == null) {
            return true;
        }
        if (p.val !== q.val) {
            return false;
        } else {
            return recur(p.left, q.left) && recur(p.right, q.right);
        }
    }
  }

  return recur(p, q);
};


var a = b.buildTree('1,2,3,4'),
    b = b.buildTree('1,2,3,4');

console.log(isSameTree(a, b));
