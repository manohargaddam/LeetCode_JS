function lengthOfLIS(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 0) return 1;

    let lengthAtNth = new Array(nums.length).fill(0);
    lengthAtNth[0] = 1;
    let longest = 1;

    for (let i = 1; i < nums.length; i++) {
        let localLargest = 0;
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j] && localLargest < lengthAtNth[j]) {
                localLargest = lengthAtNth[j];
            }
        }
        lengthAtNth[i] = localLargest + 1;
        longest = Math.max(longest, lengthAtNth[i]);
    }


    return longest;
}

// alternate nlogn solution
// ref : https://www.geeksforgeeks.org/longest-monotonically-increasing-subsequence-size-n-log-n/
function lengthOfLISnlogN(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 0) return 1;

    // Binary search (note boundaries in the caller)
    // A is ceilIndex in the caller
    function CeilIndex(A, l, r, key) {
        while (r - l > 1) {
            var m = l + parseInt((r - l) / 2);
            if (A[m] >= key)
                r = m;
            else
                l = m;
        }

        return r;
    }

    let subSets = [nums[0]];

    for (let i = 1; i < nums.length; i++) {
        const val = nums[i];

        if (val < subSets[0]) {
            subSets[0] = val;
        } else if (val > subSets[subSets.length - 1]) {
            subSets.push(val);
        } else {
            let ind = CeilIndex(subSets, -1, subSets.length - 1, val);
            subSets[ind] = val;
        }
    }
    return subSets.length;
}



module.exports = lengthOfLISnlogN;
