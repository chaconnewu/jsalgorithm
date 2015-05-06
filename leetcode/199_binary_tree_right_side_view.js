var buildTree = require('./building').buildTree;

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
  var res = [];
      curDepth = 0;
  (function recur(node, depth) {
    if (!node) {
      return;
    }

    if (depth === curDepth + 1) {
      res.push(node.val);
      curDepth += 1;
    }

    if (node.right) {
      recur(node.right, depth+1);
    }

    if(node.left) {
      recur(node.left, depth+1);
    }
  }(root, 1));

  return res;
};


var t = buildTree('1,2,3,#,5,#,4');
console.log(rightSideView(t));
