/**
 * Definition for binary tree
 * @param {val} int Value for TreeNode
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * Preprocessing for binary tree serialization. Parse the string, divided into * items, and make them integer. If a value equals #, make it undefined.
 * @param s string String representation of binary tree.
 * @return Return an array representation of the binary tree.
 */
function parsing(s) {
    return s.split(',').map(function(x) {
        if (x === '#') {
            return undefined;
        } else {
            return parseInt(x, 10);
        }
    });
}

/**
 * My implementation of binary tree serialization on LeetCode.
 * Idea:
 * 1. Identify the root
 * 2. Each time, get two head nodes from the string representation
 * 3. For either of the two, if it is value, make it a node, link it to the parent, and push it into the stack.
 * 4. After processing the two head values, get the current node, which is the head of the stack.
 * @param {s} string String representation of binary tree.
 * @return Return a binary tree representation.
 */
function buildTree(s) {
    var arr = parsing(s),
        root = new TreeNode(arr.shift()),
        cur,
        l,
        r,
        stack = [];

    cur = root;

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
// ========= Build List ===========================================

/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * Print Linked List.
 * @param {ListNode} l The head of the LinkedList.
 * @return Return nothing.
 */
function printList(l) {
    var cur = l,
        res = "";
    while (cur !== null) {
        res += cur.val + '->';
        cur = cur.next;
    }

    console.log(res);
}

/**
 * Build a singly-linked list from a string. e.g. 1->2->3->4.
 * @param {string} s The string to be transferred.
 * @return {ListNode} Return the head node of the linked list.
 */
function buildList(s) {
    function preProcessing(s) {
        return s.split('->').map(function(x) {
            return parseInt(x, 10);
        });
    }

    var items = preProcessing(s),
        head = new ListNode(0),
        cur,
        i;

    cur = head;
    for (i = 0; i < items.length; i += 1) {
        newNode = new ListNode(items[i]);
        cur.next = newNode;
        cur = newNode;
    }

    return head.next;
}


var l = buildList('1->2->3->4->5');
printList(l);

exports.buildTree = buildTree;
exports.buildList = buildList;
exports.printList = printList;
