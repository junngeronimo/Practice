// Write a function to delete a node in a singly-linked list. 
// You will not be given access to the head of the list, instead you will be given access to the node to be deleted directly.
// It is guaranteed that the node to be deleted is not a tail node in the list.

import ListNode from "./ListNode";

function deleteNode(root: ListNode | null): void {

  let currNode = root;
  

  root.val = currNode.next.val;
  root.next = currNode.next.next;
    
};

var headList = [4,5,1,9];

var head = new ListNode(4, new ListNode(5, new ListNode(1, new ListNode(9, null))));
var head2 = new ListNode(4, new ListNode(5, new ListNode(1, new ListNode(9, null))));
var head3 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, null))));
var head4 = new ListNode(2, new ListNode(0, new ListNode(1, new ListNode(3, null))));


var printNode = head;

var node = head.next;
// Output = [4,1,9];
// Explanation: You are given the second node with value 5, the linked list should become 4 -> 1 -> 9 after calling your function.

var node2 = head2.next.next;
// Output: [4,5,9]
// Explanation: You are given the third node with value 1, the linked list should become 4 -> 5 -> 9 after calling your function.

var node3 = head3.next.next;
// Output: [1,2,4]

var node4 = head4;


deleteNode(node);
deleteNode(node2);
deleteNode(node3);
deleteNode(node4);


var print1 = "";

while (printNode !== null) {
  print1 += `${printNode.val} -> `
  printNode = printNode.next;
}

console.log(`print1: ${print1}`)

var printNode = head2;
var print2 = "";

while (printNode !== null) {
  print2 += `${printNode.val} -> `
  printNode = printNode.next;
}
console.log(`print2: ${print2}`)

var printNode = head3;
var print3 = ""

while (printNode !== null) {
  print3 += `${printNode.val} -> `
  printNode = printNode.next;
}

console.log(`print3: ${print3}`)

var printNode = head4;
var print4 = ""

while (printNode !== null) {
  print4 += `${printNode.val} -> `
  printNode = printNode.next;
}

console.log(`print4: ${print4}`)
