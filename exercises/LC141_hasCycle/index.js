function hasCycle(head) {
    let s = new Set();
    while (head != null) {
        let l = s.size;
        s.add(head);
        if (l == s.size) {
            return true;
        }
        head = head.next;
    }
    return false;
}

module.exports = hasCycle;
