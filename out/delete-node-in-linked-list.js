"use strict";
/*

delete-node-in-linked-list.ts

https://leetcode.com/problems/delete-node-in-a-linked-list/
*/
var AnotherListNode = /** @class */ (function () {
    function AnotherListNode(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
    return AnotherListNode;
}());
function deleteNode(root) {
    var pointer = root;
    if (pointer) {
        while (pointer && pointer.next !== null) {
            var curr = pointer;
            curr.val = pointer.next.val;
            curr.next = pointer.next.next;
            pointer = curr.next;
            debugger;
        }
    }
}
var node1 = new AnotherListNode(4);
var node2 = new AnotherListNode(5);
var node3 = new AnotherListNode(1);
var node4 = new AnotherListNode(9);
node1.next = node2;
node2.next = node3;
node3.next = node4;
deleteNode(node2);
//# sourceMappingURL=delete-node-in-linked-list.js.map