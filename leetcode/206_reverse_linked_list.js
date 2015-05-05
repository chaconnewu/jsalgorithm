var ListNode = require('./building.js').ListNode;
var buildList = require("./building.js").buildList;
var printList = require("./building.js").printList;
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (head === null) {
    return head;
  }

  var newHead;
  (function recur(pre, cur) {
    if (cur.next) {
      var t = recur(cur, cur.next);
      t.next = pre;
      return t.next;
    } else {
      newHead = cur;
      cur.next = pre;
      return pre;
    }
  }(null, head));

  return newHead;
};

var l = buildList('');
printList(reverseList(l));
