const merge = intervals => {
    intervals.sort((a,b) => a[0] - b[0]);

    for (let i = 1; i < intervals.length; i++) {

        let currentIntervalStart = intervals[i][0];
        let currentIntervalEnd = intervals[i][1];
        let lastIntervalStart = intervals[i-1][0];
        let lastIntervalEnd = intervals[i-1][1];

        if (currentIntervalStart <= lastIntervalEnd) {
            let maxEnd = Math.max(currentIntervalEnd, lastIntervalEnd);
            intervals[i] = [lastIntervalStart, maxEnd];
            intervals[i-1] = null;
        }
    }
    return intervals.filter(i => i);
};

module.exports = merge;
