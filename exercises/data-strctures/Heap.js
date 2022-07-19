const comparison = Object.freeze({
    BIGGEST: 1,
    SMALLEST: -1,
    EQUAL: 0,
    BIGGEST_OR_EQUAL: [0, 1],
    SMALLEST_OR_EQUAL: [0, -1]
})

const defaultCompareFn = (a, b) => {
    if (a > b) return comparison.BIGGEST;
    if (a < b) return comparison.SMALLEST;
    return comparison.EQUAL;
}

class MinHeap {
    constructor(compareFn = defaultCompareFn) {
        this.list = [];
        this._compareFn = compareFn;
    }

    peek() {
        return this.list[0];
    }

    extract() {
        if (this.list.length === 1) {
            return this.list.pop();
        }
        let res = this.list[0];
        this.list[0] = this.list.pop();
        this.heapifyDown(0);
        return res;
    }

    insert(val) {
        this.list.push(val);
        this.heapifyUp(this.list.length - 1);
    }

    heapifyUp(i) {
        while (i > 0 && this._compareFn(this.list[this.parent(i)], this.list[i]) === comparison.BIGGEST) {
            this.swap(this.parent(i), i);
            i = this.parent(i);
        }
    }

    heapifyDown(i) {
        while (i < this.list.length - 1) {
            let leftInd = this.left(i);
            let rightInd = this.right(i);

            let next = i;
            if (leftInd <= this.list.length - 1 && this._compareFn(this.list[i], this.list[leftInd]) === comparison.BIGGEST)
                next = leftInd;

            if (rightInd <= this.list.length - 1 && this._compareFn(this.list[next], this.list[rightInd]) === comparison.BIGGEST)
                next = rightInd;

            if (next === i) break;

            this.swap(i, next);
            i = next;
        }
    }

    swap(i, j) {
        [this.list[i], this.list[j]] = [this.list[j], this.list[i]];
    }

    parent(i) {
        return Math.floor((i - 1) / 2);
    }

    left(i) {
        return i * 2 + 1;
    }
    right(i) {
        return i * 2 + 2;
    }

    get length() {
        return this.list.length;
    }

    print() {
        console.log(this.list);
    }

    printTree(i = 0, noOfSpaces = 0, label = "*") {
        if (i >= this.list.length) return;
        console.log(" ".repeat(noOfSpaces) + label + ":" + this.list[i] + ` [${i}]`);
        this.printTree(this.left(i), noOfSpaces + 3, 'L');
        this.printTree(this.right(i), noOfSpaces + 3, 'R');
    }
}


class MaxHeap extends MinHeap {
    constructor(compareFn = defaultCompareFn) {
        super((a, b) => compareFn(b, a));
    }
}

// driver code
if (!module.parent) {

    console.log('Min Heap::');
    var heap = new MinHeap();

    [12, 6, 4, 2, 1].forEach(v => heap.insert(v));

    heap.print();
    heap.printTree();


    console.log(Array(heap.length).fill("").map(v => heap.extract()));

    console.log('=========================================');
    console.log('Max Heap::');
    var heap = new MaxHeap();

    [12, 6, 4, 2, 1].forEach(v => heap.insert(v));

    heap.print();
    heap.printTree();

    console.log(Array(heap.length).fill("").map(v => heap.extract()));

}

module.exports = { MinHeap, MaxHeap, comparison };