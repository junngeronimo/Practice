import ListNode from "./ListNode";

// Recursive implementation
function reverseList(head: ListNode | null): ListNode | null {

  if (head === null || head.next === null) {  // base case: if end of list, return 
    return head;
  }
    
  let insertNode = reverseList(head.next);
  
  head.next.next = head;
  head.next = null;
  
  return insertNode;
};

var head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null)))));
var head2 = new ListNode(1, new ListNode(2, null));
var head3 = new ListNode(null, null);
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
  print += `${printNode.val} -> `
  printNode = printNode.next;
}

print += "\n";
var printNode = head2;

while (printNode !== null) {
  print += `${printNode.val} -> `
  printNode = printNode.next;
}

print += "\n";
var printNode = head3;

while (printNode !== null) {
  print += `${printNode.val} -> `
  printNode = printNode.next;
}

// print += "\n";
// var printNode = head4;

// while (printNode !== null) {
//   print += `${printNode.val} -> `
//   printNode = printNode.next;
// }


console.log(`print:\n${print}`)
