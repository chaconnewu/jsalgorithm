var ListNode = require('./building').ListNode;
var buildList = require('./building').buildList;
var printList = require('./building').printList;

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  var cur = head;
  while (cur && cur.next) {
    while (cur.next && cur.next.val === cur.val) {
      cur.next = cur.next.next;
    }
    cur = cur.next;
  }

  return head;
};


var l = buildList('');
printList(deleteDuplicates(l));
