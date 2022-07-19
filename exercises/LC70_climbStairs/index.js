
const climbStairs = n => {
    if (n <= 3) return n;
    let mem = [0, 1, 2, 3];
    for (let index = 4; index <= n; index++) {
        mem.push(mem[index - 1] + mem[index - 2])
    }
    return mem[n]
};

module.exports = climbStairs;
