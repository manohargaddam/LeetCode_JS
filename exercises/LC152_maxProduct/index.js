
// function maxProduct1(nums) {
//     let productAt = Array(nums.length);
//     productAt[0] = nums[0] > 0 ? [nums[0], null] : nums[0] < 0 ? [null, nums[0]] : [null, null];

//     let largest = nums[0];

//     for (let i = 1; i < nums.length; i++) {
//         const num = nums[i];
//         let pos = productAt[i - 1][0];
//         let neg = productAt[i - 1][1];
//         if (num > 0) {
//             pos = pos != null ? pos * num : num;
//             neg = neg != null ? neg * num : null;
//         } else if (num < 0) {
//             let prevPos = pos;
//             pos = neg != null ? neg * num : null;
//             neg = prevPos != null ? prevPos * num : num;
//         } else {
//             pos = null;
//             neg = null;
//         }

//         productAt[i] = [pos, neg];
//         if (pos != null)
//             largest = Math.max(largest, num, pos);
//         else if (neg != null)
//             largest = Math.max(largest, num, neg);
//         else
//             largest = Math.max(largest, num);
//     }
//     return largest;
// }

function maxProduct(nums) {
    let maxAt = Array(nums.length).fill(0);
    let minAt = Array(nums.length).fill(0);
    maxAt[0] = minAt[0] = nums[0];

    let largest = nums[0];

    for (let i = 1; i < nums.length; i++) {
        const num = nums[i];
        maxAt[i] = Math.max(num, maxAt[i-1] * num, minAt[i-1] * num)
        minAt[i] = Math.min(num, maxAt[i-1] * num, minAt[i-1] * num)
        largest = Math.max(largest, maxAt[i])
    }
    return largest;
}

module.exports = maxProduct;
