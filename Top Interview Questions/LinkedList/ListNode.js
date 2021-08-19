"use strict";
// export class ListNode {
//   val: number
//   next: ListNode | null
exports.__esModule = true;
exports.ListNode = void 0;
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next=== undefined ? null : next)
//   }
// }
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
    ListNode.prototype.printList = function () {
        var print = "" + this.val;
        var printNode = this.next;
        while (printNode !== null) {
            print += " -> " + printNode.val;
            printNode = printNode.next;
        }
        print += " -> null";
        console.log(print);
    };
    return ListNode;
}());
exports.ListNode = ListNode;
exports["default"] = ListNode;
