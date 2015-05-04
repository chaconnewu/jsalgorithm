var ListNode = require('./building').ListNode;
var buildList = require('./building').buildList;
var printList = require('./building').printList;


/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    var first = new ListNode(0),
        cur = head,
        prev;

    first.next = head;
    prev = first;

    while (cur && cur.next) {
      if (cur.val !== cur.next.val) {
        prev = cur;
        cur = cur.next;
      } else {
        while (cur.next && cur.val === cur.next.val) {
          cur = cur.next;
        }
        cur = cur.next;
        prev.next = cur;
      }
    }

    return first.next;
};

var l = buildList('1->2->3->4');
printList(deleteDuplicates(l));
