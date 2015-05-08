var buildTree = require('./building').buildTree;


/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) {
    return;
  }

  var res = [],
      queue = [root, '#'],
      cur;


  while (queue !== ['#', '#']) {
    cur = queue.shift();
    if (cur === '#') {
      queue.push('#');
    } else if (!cur.left && !cur.right) {
      queue.push('#');
    } else {
      if (cur.left) {
        queue.push(cur.left);
      }
      if (cur.right) {
        queue.push(cur.right);
      }
    }
    console.log(queue);
    break;
  }
};

var t = buildTree('3,9,20,#,#,15,7');
console.log(levelOrder(t));
