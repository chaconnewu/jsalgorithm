var buildList = require('./building').buildList;
var ListNode = require('./building').ListNode;
var printList = require('./building').printList;

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  var first = new ListNode(0);
  first.next = head;
  var cnt = 0;
  (function recur(pre, cur) {
    if (!cur.next) {
      cnt += 1;
    } else {
      recur(cur, cur.next);
      cnt += 1;
    }
    if (cnt === n) {
      pre.next = cur.next;
    }
  }(first, head));
  return first.next;
};


var l = buildList('1->2->3->4->5');
printList(removeNthFromEnd(l, 5));
