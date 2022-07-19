function findMin(nums) {
    if (nums.length === 1) return nums[0];

    let i = 0, j = nums.length - 1;
    if (nums[i] < nums[j]) return nums[i];

    while (i+1 < j) {
        let middle = i + Math.floor((j - i) / 2);
        if (nums[middle] < nums[i]) j = middle;
        else i = middle;
    }
    return nums[i] < nums[j] ? nums[i] : nums[j];
}

module.exports = findMin;
