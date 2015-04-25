var b = require('./building');

/**
 * Get the maximum depth of a binary tree.
 * @param {object} root The root of the binary tree.
 * @return {integer} Ruturn the maximum depth of the tree.
 */
var helper = function(root) {
    function getDepth(node){
        if (node === null) {
            return 0;
        }
        return Math.max(getDepth(node.left), getDepth(node.right)) + 1;
    }
    return getDepth(root);
}

var maxDepth = function(root) {
    return helper(root);
};

console.log(maxDepth(b.buildTree('1,#,2,3,4')));


