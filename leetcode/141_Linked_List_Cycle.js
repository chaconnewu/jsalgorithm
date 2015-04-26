var b = require('./building')


function ListNode(val) {
    this.val = val;
    this.next = null;
}


/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    var aHead = new ListNode(0),
        fast,
        slow;

    aHead.next = head,
    fast = aHead,
    slow = aHead;

    while (fast.next) {
        fast = fast.next.next;
        slow = slow.next;

        if (fast === slow) {
            return true;
        }

        if (fast === null) {
            break;
        }
    }

    return false;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function buildCycle(l) {
    var i,
        second,
        tail,
        cur;

    cur = l;

    i = 0;
    while (cur.next) {
        i += 1;
        if (i == 2) {
            second = cur;
        }

        cur = cur.next;
    }

    cur.next = second;
    return l;
}

var l = buildCycle(b.buildList('1->2->3->4->5'));
console.log(hasCycle(l));

