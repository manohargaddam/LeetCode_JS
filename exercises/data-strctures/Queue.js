
class Queue {
    length = 0;
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enq(val) {
        let node = { val, next:  null};
        if (this.tail) 
            this.tail.next = node;
        this.tail = node;
        if (!this.head)
            this.head = node;
        this.length++;
    }

    deq() {
        if (!this.head) return null;
        this.length--;
        if (this.head === this.tail) {
            let val = this.head.val;
            this.head = this.tail = null;
            return val;
        }
        let val = this.head.val;
        this.head = this.head.next;
        return val;
    }

    peek() {
        return this.head ? this.head.val : null;
    }

    isEmpty() {
        return this.length === 0;
    }
}

module.exports = Queue;