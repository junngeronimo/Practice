import ListNode from "./Top\ Interview\ Questions/LinkedList/ListNode";

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {

  let l:ListNode = null;
  let l1Head = l1;
  let l2Head = l2;
  let carryOver = 0;

  let lHead = l;

  while (l1Head !== null || l2Head !== null) {

    if (lHead === null) {
      lHead = new ListNode(l1Head.val + l2Head.val, null);
      l = lHead;
      
      if (lHead.val > 9) {
        carryOver = Math.floor(lHead.val/10);
        lHead.val = lHead.val%10;
      }
      l1Head = l1Head.next;
      l2Head = l2Head.next;

    } else {

      if (l1Head !== null && l2Head !== null) { 
        lHead.next = new ListNode(l1Head.val + l2Head.val + carryOver, null);
        l1Head = l1Head.next;
        l2Head = l2Head.next;
      } else if (l1Head === null && l2Head !== null) { 
        lHead.next = new ListNode(l2Head.val + carryOver, null);
        l2Head = l2Head.next;
      } else if (l1Head !== null && l2Head === null) {
        lHead.next = new ListNode(l1Head.val + carryOver, null);
        l1Head = l1Head.next;
      }

      carryOver = 0;

      // console.log(`lHead.next.val: ${lHead.next.val}`);

      if (lHead.next.val > 9) {
        carryOver = Math.floor(lHead.next.val/10);
        // console.log(`carryOver ${carryOver}`);
        lHead.next.val = lHead.next.val%10;
      }

      lHead = lHead.next;
    }

  }

  if (carryOver > 0) {
    lHead.next = new ListNode(carryOver, null);
  }

  // l.printList();

  return l;
};

// let l1 = new ListNode(2, new ListNode(4, new ListNode(3, null)));
// // 342

// let l2 = new ListNode(5, new ListNode(6, new ListNode(4,null)));
// // 465

// addTwoNumbers(l1,l2);

let l1 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, null)))))));
let l2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, null))));

addTwoNumbers(l1,l2);

/**
 * 2 -> 4 -> 3
 *  342
 * 5 -> 6 -> 4
 *  465
 * 
 *  465 + 342 = 807
 * 
 * = 7 -> 0 -> 8
 * 
 * 
 * 
 * 
 * 349
 * 
 * 
 * 
 */