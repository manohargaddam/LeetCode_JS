function canJump(nums) {
    if (nums.length === 1) return true;
    let reachFromNthPos = new Array(nums.length).fill(false);
    reachFromNthPos[nums.length - 1] = true;

    for (let i = nums.length - 2; i >= 0; i--) {
        let currentVal = nums[i];
        if (currentVal == 0) continue;
        for (let j = i + 1; (j <= currentVal + i) && (j < nums.length); j++) {
            if (reachFromNthPos[j]) {
                reachFromNthPos[i] = true;
                break;
            }
        }
    }

    return reachFromNthPos[0];
}

module.exports = canJump;
