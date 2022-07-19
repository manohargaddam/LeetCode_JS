/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var middleNode = function (head) {
    let length = 0;
    let start = head;
    while (start) {
        start = start.next;
        length++;
    }

    start = head;
    length = Math.floor(length/2);
    while (length) {
        start = start.next;
        length--;
    }

    return start;
};