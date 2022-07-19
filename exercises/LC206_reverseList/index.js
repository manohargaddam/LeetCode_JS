const reverseList = head => {
    let current = head;
    let prev = null;
    while (current != null) {
        let temp = current.next;
        current.next = prev;
        
        prev = current;
        current = temp;
    }

    return prev;
};

module.exports = reverseList;
