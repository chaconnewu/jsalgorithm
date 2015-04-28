var TreeNode = require('./building').TreeNode;
var buildTree = require('./building').buildTree;

var connect = function(root) {
    if (!root) return ;
    var stack = [root, '#'],
        cur,
        i;

    i = 0;
    while (true) {
        cur = stack[i];
        if (cur === undefined) {
            break;
        }

        if (cur === '#') {
            i += 1;
            continue;
        }

        if (cur.left) {
            stack.push(cur.left);
        }

        if (cur.right) {
            stack.push(cur.right);
        }

        i += 1;
        if (stack[i] == '#') {
            stack.push('#');
        }

    }
    stack.pop();

    for (i = 0; i < stack.length; i += 1) {
        if (stack[i+1] == '#') {
            stack[i].next = null;
        } else {
            stack[i].next = stack[i+1];
        }
    }

};

var t = buildTree('1,2,3');
x = connect(t);
console.log(x);
console.log(t.next);

