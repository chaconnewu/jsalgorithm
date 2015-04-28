var TreeNode = require('./building').TreeNode;
var buildTree = require('./building').buildTree;

/**
 * @param {TreeNode} root
 * @returns {number[]}
 */
var preorderTraversal = function(root) {
    var res = [];
    (function recur(node) {
        if (node) {
            res.push(node.val);
            if (node.left) {
                recur(node.left);
            }

            if (node.right) {
                recur(node.right);
            }
        }
    }(root));

    return res;
};

var t = buildTree('1,#,2,3');
console.log(preorderTraversal(t));
