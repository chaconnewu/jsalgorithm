var b = require('./building');

function ListNode(val) {
    this.val = val;
    this.next = null;
}


/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    var cur1 = l1,
        cur2 = l2,
        head = new ListNode(0),
        cur;

        cur = head;

        while (cur1 && cur2) {
            if (cur1.val < cur2.val) {
                cur.next = cur1;
                cur = cur1;
                cur1 = cur1.next;
            } else {
                cur.next = cur2;
                cur = cur2;
                cur2 = cur2.next;
            }
        }

        if (cur1) {
            cur.next = cur1;
        } else {
            cur.next = cur2;
        }

        return head.next;
};


var l1 = b.buildList('1->2->3->4->5'),
    l2 = b.buildList('1->2->3->4->5');

b.printList(mergeTwoLists(l1, l2));
