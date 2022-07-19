const threeSum = nums => {
    nums.sort((a,b) => a-b);
    let triples = [];
    for (let i = 0; i <= nums.length - 2; i++) {
        const num = nums[i];
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        const target = 0 - num;
        let left = i + 1, right = nums.length - 1;
        while (left < right) {
            if (nums[left] + nums[right] === target) {
                triples.push([num, nums[left], nums[right]])
                left++;
                while (left < right && nums[left - 1] === nums[left]) left++;
            } else if (nums[left] + nums[right] < target) left++;
            else right--;
        }
    }
    return triples;
};



module.exports = threeSum;
