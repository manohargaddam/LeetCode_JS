/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {

    let binary = function (nums, target, i, j) {
        if (i > j) return -1;

        let middle = i + Math.floor((j - i) / 2);
        if (nums[middle] === target) {
            return middle;
        }

        if (target < nums[middle]) {
            return binary(nums, target, i, middle - 1);
        }

        return binary(nums, target, middle + 1, j);
    }

    return binary(nums, target, 0, nums.length - 1);
};


