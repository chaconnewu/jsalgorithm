var b = require('./building');


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
