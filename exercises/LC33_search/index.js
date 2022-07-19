function search(nums, target) {
    let l = 0, r = nums.length - 1;

    while (l + 1 < r) {
        let mid = l + Math.floor((r - l) / 2);

        if (nums[mid] == target) return mid;
        if (nums[l] < nums[mid]) {
            if (nums[l] <= target && nums[mid] > target) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }
        else if (nums[mid] < nums[r]) {
            if (nums[mid] < target && nums[r] >= target)
                l = mid + 1;
            else
                r = mid - 1;
        }
    }
    if (nums[l] === target) return l;
    if (nums[r] === target) return r;
    return -1;
}

module.exports = search;
