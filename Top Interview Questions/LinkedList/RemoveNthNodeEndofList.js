"use strict";
/*
Given the head of a linked list, remove the nth node from the end of the list and return its head.
 */
exports.__esModule = true;
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
var ListNode_1 = require("./ListNode");
function removeNthFromEnd(head, n) {
    var listLength = 0;
    var currNode = head; // traversal node
    var delNode = head; // will contain the node to be deleted
    var prevNode = head; // will contain the node before the one to be deleted
    // if empty list, return || if only 1 in list, return
    if (currNode === null || currNode.next === null) {
        head = null;
        return head;
    }
    // 
    while (currNode !== null) {
        // Start traversing once we are n indicies away from the traversal node
        if (listLength >= n) {
            delNode = delNode.next;
        }
        if (listLength >= n + 1) {
            prevNode = prevNode.next;
        }
        currNode = currNode.next;
        listLength++;
    }
    console.log("listLength: " + listLength);
    console.log("delNode: " + delNode.val);
    console.log("prevNode: " + prevNode.val);
    if (delNode.next === null) {
        prevNode.next = null;
    }
    else if (head === prevNode && head === delNode) {
        head = head.next;
        prevNode = head;
        delNode = head;
    }
    else {
        prevNode.next = delNode.next;
        delNode = null;
    }
    return head;
}
;
/*
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Input: head = [1], n = 1
Output: []

Input: head = [1,2], n = 1
Output: [1] */
var head = new ListNode_1["default"](1, new ListNode_1["default"](2, new ListNode_1["default"](3, new ListNode_1["default"](4, new ListNode_1["default"](5, null)))));
var head2 = new ListNode_1["default"](1, null);
var head3 = new ListNode_1["default"](1, new ListNode_1["default"](2, null));
var head4 = new ListNode_1["default"](1, new ListNode_1["default"](2, null));
// head = removeNthFromEnd(head, 2);
// var printNode = head;
head = removeNthFromEnd(head, 2);
head2 = removeNthFromEnd(head2, 1);
head3 = removeNthFromEnd(head3, 1);
head4 = removeNthFromEnd(head4, 2);
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
print += "\n";
var printNode = head4;
while (printNode !== null) {
    print += printNode.val + " -> ";
    printNode = printNode.next;
}
console.log("print:\n" + print);
