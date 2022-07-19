/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let lastValues = [[nums[0]]];
    for (let i = 1; i < nums.length; i++) {
        let current = nums[i];
        let result = [];
        lastValues.forEach(last => {
            for (let j = 0; j <= last.length; j++) {
                result.push(last.slice(0, j).concat([current]).concat(last.slice(j, last.length)));
            }
        })
        lastValues = result;
    }

    return lastValues;
};