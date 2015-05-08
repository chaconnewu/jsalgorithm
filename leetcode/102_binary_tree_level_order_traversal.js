var buildTree = require('./building').buildTree;


/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) {
    return [];
  }

  var res = [],
      curItems = [],
      queue = [root, '#'],
      cur;

  var i = 0;

  while (queue.length > 1) {
    cur = queue.shift();
    if (cur === '#') {
      res.push(curItems);
      curItems = [];
      queue.push('#');
    } else {

      curItems.push(cur.val);
      if (cur.left) {
        queue.push(cur.left);
      }

      if (cur.right) {
        queue.push(cur.right);
      }
    }
  }
  res.push(curItems);
  return res
};

var t = buildTree('3,9,20,#,#,15,7');
console.log(levelOrder(t));
