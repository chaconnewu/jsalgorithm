/**
 * Definition for binary tree
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


function inorderTraverse(node) {
    if (!node) return;
    if (node.left) inorderTraverse(node.left);
    console.log(node.val);
    if (node.right) inorderTraverse(node.right);
}

function parsing(s) {
    return s.split(',').map(function(x) {
        if (x === '#') {
            return undefined;
        } else {
            return parseInt(x, 10);
        }
    });
}

function buildTree(s) {
    var arr = parsing(s),
        root = new TreeNode(arr.shift()),
        cur = root,
        l,
        r,
        stack = [];

    while (arr.length > 0) {
        l = arr.shift();
        r = arr.shift();

        if (l !== undefined) {
            lNode = new TreeNode(l);
            cur.left = lNode;
            stack.push(lNode);
        }
        if (r !== undefined) {
            rNode = new TreeNode(r);
            cur.right = rNode;
            stack.push(rNode);
        }

        cur = stack.shift();
        if (!cur) {
            break;
        }
    }

    return root;
}

// var s = '1,2,3,#,#,4,#,#,5';

// var t = buildTree(s);
// inorderTraverse(t);

exports.buildTree = buildTree;

