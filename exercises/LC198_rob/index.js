function rob(nums) {
    if(nums.length == 0) return 0;
    if(nums.length == 1) return nums[0];
    if(nums.length == 2) return Math.max(nums[0], nums[1]);

    let maxLootAtNth = [nums[0], Math.max(nums[0], nums[1])];
    for (let i = 2; i < nums.length; i++) {
        let val1 = maxLootAtNth[i - 1];
        let val2 = maxLootAtNth[i - 2] + nums[i];

        maxLootAtNth.push(Math.max(val1, val2));
    }

    return maxLootAtNth.pop();
    
    
    // let mem = [];
    // mem[nums.length] = mem[nums.length + 1] = 0;

    // for (let i = nums.length - 1; i >= 0; i--) {
    //     let val1 = mem[i + 1];
    //     let val2 = mem[i + 2] + nums[i];

    //     mem[i] = Math.max(val1, val2);
    // }

    // return mem[0];


    // function robInt(nums, ind) {
    //     if (ind >= nums.length) return 0;
    //     if (ind === nums.length - 1) {
    //         return nums[nums.length - 1];
    //     }

    //     if (mem[ind]) return mem[ind];

    //     let val1 = robInt(nums, ind + 1);
    //     let val2 = robInt(nums, ind + 2) + nums[ind];
    //     return mem[ind] = Math.max(val1, val2);
    // }

    // return robInt(nums, 0);
}

module.exports = rob;
