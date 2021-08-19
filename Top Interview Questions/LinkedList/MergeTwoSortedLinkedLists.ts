import ListNode from "./ListNode";

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {

  let curr1 = l1;
  let curr2 = l2;
  let newList = null;
  if (l1 === null) return curr2;
  if (l2 === null) return curr1;
  let currNew = newList;
  
  while (curr1 !== null && curr2 !== null) {

    if (curr1.val <= curr2.val) { // insert curr1.val
      
      if (newList === null) { // is the newList still empty?
        newList = new ListNode(curr1.val, null);
        currNew = newList;
        curr1 = curr1.next;
        // console.log(`currNew.val: ${currNew.val}`);
      } else {
        currNew.next = new ListNode(curr1.val, null);
        currNew = currNew.next;
        curr1 = curr1.next;
      }

    } else { // curr1.val > curr2.val, // insert curr2.val
      
      if (newList === null) { // is the newList still empty?
        newList = new ListNode(curr2.val, null);
        currNew = newList;
        curr2 = curr2.next;
        // console.log(`currNew.val: ${currNew.val}`);
      } else {
        currNew.next = new ListNode(curr2.val, null);
        currNew = currNew.next;
        curr2 = curr2.next;
      }
    }
  }
  // console.log(`currNew.val: ${currNew.val}`)
  // console.log(`curr1.val: ${currNew.val}`)
  // console.log(`curr2.val: ${currNew.val}`)

  // final iteration
  if (curr1 !== null) { 
    currNew.next = curr1;
  } else if (curr2 !== null) {
    currNew.next = curr2;
  }

  return newList;

};


var head = new ListNode(1, new ListNode(2, new ListNode(4, null)));
var head2 = new ListNode(1, new ListNode(3, new ListNode(4, null)));
// var head = null;
// var head2 = new ListNode(0, null);

// var head4 = new ListNode(1, new ListNode(2, null));


// head = removeNthFromEnd(head, 2);
// var printNode = head;

var head3 = mergeTwoLists(head, head2);
console.log(head3.printList());
  /* ****************

head4 = removeNthFromEnd(head4, 2);
  **************** */

// head3 = removeNthFromEnd(head3, 1);
// var printNode = head3;
// var print = "";

// var printNode = head3;

// while (printNode !== null) {
//   print += `${printNode.val} -> `
//   printNode = printNode.next;
// }

function printList(head) {
  let print = "";

  let printNode = head;

  while (printNode !== null) {
    print += `${printNode.val} -> `
    printNode = printNode.next;
  } 

  console.log(`print:\n${print}`)
}

// print += "\n";
// var printNode = head2;

// while (printNode !== null) {
//   print += `${printNode.val} -> `
//   printNode = printNode.next;
// }

// print += "\n";
// var printNode = head3;

// while (printNode !== null) {
//   print += `${printNode.val} -> `
//   printNode = printNode.next;
// }

// print += "\n";
// var printNode = head4;

// while (printNode !== null) {
//   print += `${printNode.val} -> `
//   printNode = printNode.next;
// }



