"use strict";
exports.__esModule = true;
var ListNode_1 = require("./ListNode");
function isPalindrome(head) {
    if (head === null || head.next === null)
        return true;
    var isPalindrome = false;
    var currAtHalf = false;
    var curr = head;
    var prev = null;
    while (curr !== null) { // Traverse the list until we get to the end
        var nextVal = (curr.next !== null) ? curr.next.val : -2;
        console.log("curr bb4 if: " + curr.val);
        if (currAtHalf || curr.val !== nextVal) { // Check if and when we hit halfway
            if (currAtHalf === false) { // if we haven't hit halfway
                // console.log(`curr before reverse: ${curr.printList()}`);
                // reverse the list
                var nextTemp = curr.next;
                curr.next = prev;
                prev = curr;
                curr = nextTemp;
                // console.log(`curr after reverse: ${curr.printList()}`);
                // console.log(`prev after reverse: ${prev.printList()}`);
                // check if odd numbered list
                var oddCheck = (curr !== null && curr.next !== null) ? curr.next.val : -2;
                if (oddCheck === prev.val) {
                    currAtHalf = true;
                    curr = curr.next;
                }
                // console.log(`curr after ODD CHECK: ${curr.printList()}`);
            }
            else { // will execute if we are past halfway
                // compare reversed first half and normal 2nd half
                if (prev !== null && curr !== null && prev.val !== curr.val && prev.next !== null && curr.next !== null && prev.next.val !== curr.next.val) {
                    return isPalindrome;
                }
                else if (curr && prev && curr.next === null && prev.next === null) {
                    return !isPalindrome;
                }
                else {
                    curr = curr.next;
                    prev = prev ? prev.next : null;
                }
            }
        }
        else { // at halfway point, mark it
            // console.log(`curr in else: ${curr.val}`);
            currAtHalf = true;
            // console.log(`curr before reverse: ${curr.printList()}`);
            // reverse the list one last time
            var nextTemp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nextTemp;
            // console.log(`curr after reverse: ${curr.printList()}`);
            // console.log(`prev after reverse: ${prev.printList()}`);
        }
    }
    return isPalindrome;
}
;
var head = new ListNode_1["default"](2, new ListNode_1["default"](2, new ListNode_1["default"](2, new ListNode_1["default"](2, new ListNode_1["default"](2, null)))));
var head2 = new ListNode_1["default"](1, new ListNode_1["default"](2, null));
var head3 = new ListNode_1["default"](1, new ListNode_1["default"](2, new ListNode_1["default"](3, new ListNode_1["default"](4, new ListNode_1["default"](5, new ListNode_1["default"](5, new ListNode_1["default"](4, new ListNode_1["default"](3, new ListNode_1["default"](2, new ListNode_1["default"](1, null))))))))));
var head4 = new ListNode_1["default"](1, new ListNode_1["default"](1, new ListNode_1["default"](2, new ListNode_1["default"](1, null))));
var head5 = new ListNode_1["default"](1, new ListNode_1["default"](2, new ListNode_1["default"](2, new ListNode_1["default"](2, new ListNode_1["default"](1, null)))));
console.log(head.printList() + isPalindrome(head));
console.log(head2.printList() + isPalindrome(head2));
console.log(head3.printList() + isPalindrome(head3));
console.log(head4.printList() + isPalindrome(head4));
console.log(head5.printList() + isPalindrome(head5));
// console.log(`final result: ${head.printList()}`);
