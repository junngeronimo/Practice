// export class ListNode {
//   val: number
//   next: ListNode | null

//   constructor(val?: number, next?: ListNode | null) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next=== undefined ? null : next)
//   }
// }

export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }

  printList() {
    let print = `${this.val}`;
  
    let printNode = this.next;
  
    while (printNode !== null) {
      print += ` -> ${printNode.val}`
      printNode = printNode.next;
    } 

    print += ` -> null`;
  
    console.log(print);
  }


}

export default ListNode;