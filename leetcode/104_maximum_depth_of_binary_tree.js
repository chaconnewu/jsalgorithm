var b = require('./building');

/**
 * Get the maximum depth of a binary tree.
 * @param {object} root The root of the binary tree.
 * @return {integer} Ruturn the maximum depth of the tree.
 */
var maxDepth = function(root) {
    if (!root) {
        return 0;
    } 
        return Math.max(maxDepth(root.right)+1, maxDepth(root.left)+1);
    
};

console.log(maxDepth(b.buildTree('1,#,2,3,4')));


