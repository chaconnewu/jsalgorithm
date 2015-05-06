var buildTree = require("./building").buildTree;
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    var res = [];

    if (!root) {
        return res;
    }

    function arrSum(arr) {
        return arr.reduce(function (a, b) {
            return a + b;
        });
    }

    (function dfs(node, curArr) {
        if (!node.left && !node.right) {
            curArr.push(node.val);
            var curSum = arrSum((curArr));
            if (curSum === sum) {
                res.push(curArr.slice(0));
            }
            curArr.pop();
        } else {
            if (node.left) {
                curArr.push(node.val);
                dfs(node.left, curArr);
                curArr.pop();
            }

            if (node.right) {
                curArr.push(node.val);
                dfs(node.right, curArr);
                curArr.pop();
            }
        }
    }(root, []));

    return res;
};

var t = buildTree("5,4,8,11,#,13,4,7,2,#,#,5,1");
console.log(pathSum(t, 22));