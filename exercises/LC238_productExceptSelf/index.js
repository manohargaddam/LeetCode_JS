const productExceptSelf = nums => {
    if (nums.length === 0 ) return [];
    let right = Array(nums.length).fill(1);
    let left = Array(nums.length).fill(1);
    let prod = Array(nums.length);

    left[0] = nums[0];
    for (let i = 1; i < nums.length; i++) {
        left[i] = left[i-1] * nums[i];
    }

    right[nums.length - 1] = nums[nums.length - 1];
    for (let i = nums.length - 2 ; i >= 0; i--) {
        right[i] = right[i+1] * nums[i];
    }

    for (let i = 0; i < nums.length; i++) {
        prod[i] = (i !== 0 ? left[i-1] : 1) * ((i != nums.length - 1) ? right[i+1] : 1);
    }

    return prod;
};

module.exports = productExceptSelf;
