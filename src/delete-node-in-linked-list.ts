/* 

delete-node-in-linked-list.ts

https://leetcode.com/problems/delete-node-in-a-linked-list/
*/

class AnotherListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
function deleteNode(root: ListNode | null): void {
  let pointer = root;
  if (pointer) {
    while (pointer && pointer.next !== null) {
      let curr: ListNode = pointer;
      curr.val = pointer.next.val;
      curr.next = pointer.next.next;

      pointer = curr.next;
      debugger;
    }
  }
}

let node1 = new AnotherListNode(4);
let node2 = new AnotherListNode(5);
let node3 = new AnotherListNode(1);
let node4 = new AnotherListNode(9);

node1.next = node2;
node2.next = node3;
node3.next = node4;

deleteNode(node2);
