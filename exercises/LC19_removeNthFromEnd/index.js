function removeNthFromEnd(head, n) {
    let size = 0;
    let start = head;
    while (start != null) {
        size++;
        start = start.next;
    }

    let nodeToRemove = size - n;
    if (nodeToRemove == 0) {
        return head.next;
    }

    let targetNode = head;
    for (let i = 2; i <= nodeToRemove; i++) {
        targetNode = targetNode.next;
    }

    targetNode.next = targetNode.next.next;

    return head;
}

module.exports = removeNthFromEnd;
