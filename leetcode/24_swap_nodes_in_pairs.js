var buildList = require("./building").buildList;
var ListNode = require("./building").ListNode;
var printList = require("./building").printList;
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    var sentinel = new ListNode(0),
        first,
        second,
        cur;

    sentinel.next = head;
    cur = sentinel;
    first = head;

    if (!first || !first.next) {
        return head;
    }

    second = head.next;


    while (true) {
        first.next = second.next;
        second.next = first;
        cur.next = second;

        cur = first;
        first = first.next;
        if (!first || !first.next)
            break;
        second = first.next
    }

    return sentinel.next;
};


var l = buildList('1->2->3->4->5');
printList(swapPairs(l));
