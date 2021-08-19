"use strict";
exports.__esModule = true;
var ListNode_1 = require("./ListNode");
// Recursive implementation
function reverseList(head) {
    var prev = null;
    var curr = head;
    while (curr !== null) {
        var nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }
    return prev;
}
;
var head = new ListNode_1["default"](1, new ListNode_1["default"](2, new ListNode_1["default"](3, new ListNode_1["default"](4, new ListNode_1["default"](5, null)))));
var head2 = new ListNode_1["default"](1, new ListNode_1["default"](2, null));
var head3 = new ListNode_1["default"](null, null);
// var head4 = new ListNode(1, new ListNode(2, null));
// head = removeNthFromEnd(head, 2);
// var printNode = head;
head = reverseList(head);
head2 = reverseList(head2);
head3 = reverseList(head3);
/* ****************

head4 = removeNthFromEnd(head4, 2);
**************** */
// head3 = removeNthFromEnd(head3, 1);
// var printNode = head3;
var print = "";
var printNode = head;
while (printNode !== null) {
    print += printNode.val + " -> ";
    printNode = printNode.next;
}
print += "\n";
var printNode = head2;
while (printNode !== null) {
    print += printNode.val + " -> ";
    printNode = printNode.next;
}
print += "\n";
var printNode = head3;
while (printNode !== null) {
    print += printNode.val + " -> ";
    printNode = printNode.next;
}
// print += "\n";
// var printNode = head4;
// while (printNode !== null) {
//   print += `${printNode.val} -> `
//   printNode = printNode.next;
// }
console.log("print:\n" + print);
