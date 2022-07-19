/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
// Sort array
var kClosest = function (points, k) {
    let pts = points.map(([x, y]) => [[x, y], Math.sqrt(x * x + y * y)]);
    pts.sort((a, b) => a[1] - b[1]);

    return pts.slice(0, k).map(x => x[0]);
};

// sort k elements
var kClosest2 = function (points, k) {
    let pts = points.map(([x, y]) => [[x, y], Math.sqrt(x * x + y * y)]);

    for (let i = 0; i < k; i++) {
        let min = pts[0][1];
        for (let j = 1; j < pts.length - i; j++) {
            if (pts[j][1] > min) {
                [pts[j - 1], pts[j]] = [pts[j], pts[j - 1]];
            } else {
                min = pts[j][1];
            }
        }
    }

    return pts.slice(pts.length - k).map(x => x[0]);
}

// Max heap
var kClosest3 = function (points, k) {
    let pts = points.map(([x, y]) => [[x, y], Math.sqrt(x * x + y * y)]);

    let { MaxHeap, comparison } = require("./../data-strctures/Heap");
    let comparer = (a, b) => a[1] > b[1] ? comparison.BIGGEST : a[1] < b[1] ? comparison.SMALLEST : comparison.EQUAL;
    let maxHeap = new MaxHeap(comparer);

    for (let i = 0; i < pts.length; i++) {
        if (i >= k) {
            let peek = maxHeap.peek();
            if (pts[i][1] < peek[1]) {
                maxHeap.extract();
                maxHeap.insert(pts[i]);
            }
        } else {
            maxHeap.insert(pts[i]);
        }
    }

    return maxHeap.list.map(x=> x[0]);
}
console.log(kClosest3([[3, 3], [5, -1], [-2, 4]], 2));
