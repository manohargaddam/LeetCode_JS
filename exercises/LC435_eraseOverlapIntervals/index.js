//"if we choose the interval that ends earlier, then there is more space for other intervals" really helps.

const eraseOverlapIntervals = intervals => {
    intervals.sort((a, b) => a[0] - b[0]);
    let deletions = 0;

    for (let i = 1; i < intervals.length; i++) {
        const interval = intervals[i];
        if (interval[0] < intervals[i - 1][1]) {
            intervals[i] = intervals[i - 1][1] > intervals[i][1] ? intervals[i] : intervals[i - 1];
            deletions++;
        }
    }
    return deletions;
};

module.exports = eraseOverlapIntervals;
