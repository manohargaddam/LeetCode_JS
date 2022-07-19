/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    let [nstart, nend] = newInterval;
    let left = intervals.filter(i => i[1] < nstart);
    let right = intervals.filter(i => i[0] > nend);

    if (left.length + right.length != intervals.length) {
        let s = Math.min(intervals[left.length][0], nstart);
        let e = Math.max(intervals[intervals.length - right.length - 1][1], nend);
        newInterval = [s, e];
    }
    return [...left, newInterval, ...right];
}