import ListNode from "./ListNode";

function reverseList(head: ListNode | null): ListNode | null {
  let prev:ListNode = null;
  let curr:ListNode = head;
  while (curr !== null) {
    let nextTemp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextTemp;
  }

  return prev;
};

// 1-2-3-4-5

// loop until null,
  // [1]
  // curr = 1
  // nextTemp = curr.next (2)
  // curr.next (2) -> prev (2);
  // prev (2) -> curr (1); // 
  // curr = nextTemp (2);
  // curr -> 2, prev -> 1
  // 2,1,3,4,5

  //[2]
  // curr = 1
  // nextTemp = curr.next (3)
  // curr.next -> prev (3);
  // prev -> curr (1); // 
  // curr = nextTemp (3);
  // curr -> 3, prev -> 1
  // 

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
