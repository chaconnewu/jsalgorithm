var b = require('./building');

/**
 * Make a helper function for recursion. Notice that global variables should
 * be avoided, because it will not be cleared between two consecutive tests.
 * @param root The root node of a binary tree.
 * @return Return an array of the inorder traversal result of the binary tree.
 */
var helper = function (root) {
    var res = [];

    function recur(root) {
        if (!root) return;
        if (root.left) recur(root.left);
        res.push(root.val);
        if (root.right) recur(root.right);
    };
    recur(root);
    return res;
}

var inorderTraversal = function(root) {
    return helper(root);
};

console.log(inorderTraversal(b.buildTree('1,2')));
