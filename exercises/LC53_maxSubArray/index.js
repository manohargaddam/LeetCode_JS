function maxSubArray(nums) {
    let p = 0;
    let maxSum = nums[0];
    let current = 0;
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        current += num;
        maxSum = Math.max(current, maxSum);
        if (current <= 0) {
            p = i;
            current = 0;
        }
    }
    return maxSum;
}

function maxSubArrayDP(nums) { //dynamic programming
    let sumStartingAt = Array(nums.length);
    sumStartingAt[nums.length - 1] = nums[nums.length - 1];
    let larget = sumStartingAt[nums.length - 1];

    for (let i = nums.length - 2; i >= 0; i--) {
        sumStartingAt[i] = sumStartingAt[i+1] > 0 ? nums[i] + sumStartingAt[i+1] : nums[i];
        larget = Math.max(sumStartingAt[i], larget);
    }
    return larget;
}
module.exports = maxSubArray;
