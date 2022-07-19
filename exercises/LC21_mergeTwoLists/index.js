function mergeTwoLists(l1, l2) {
    if (l1 === null) return l2;
    if (l2 === null) return l1;

    let first = l1.val <= l2.val ? l1 : l2;
    let second = l1.val <= l2.val ? l2 : l1;
    
    let l3 = first;
    let l3end = first;
    first = first.next;

    while (first && second) {
        if (first.val <= second.val) {
            l3end.next = first;
            l3end = first;
            first = first.next;
        } else {
            l3end.next = second;
            l3end = second;
            second = second.next;
        }
    }

    let remaining = first || second;
    if (remaining) {
        l3end.next = remaining;
        remaining = remaining.next;
    }

    return l3;
}

module.exports = mergeTwoLists;
