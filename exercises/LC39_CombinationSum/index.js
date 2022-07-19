/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    candidates.sort((a, b) => a - b);
    function combSum(candidates, target, dp = {}) {
        if (target < 0) return null;
        if (target === 0) return [];
        if (dp[target]) return dp[target];

        let result = [];
        for (let c of candidates) {
            if (target - c === 0) {
                result.push([c]);
            } else if (target - c < 0) {
                break;
            } else {
                let res = combSum(candidates, target - c, dp);
                if (res && res.length) {
                    res.forEach(val => result.push([...val, c]));
                }
            }
        }

        if (result.length) {
            result = result.map(r => r.sort((a, b) => a - b)).reduce((acc, val) => {
                acc[val.join(":")] = val;
                return acc;
            }, {});
            result = Object.values(result);
        }

        return dp[target] = result.length ? result : null;
    }

    let result = combSum(candidates, target);
    return result ? result : [];
};


/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// Iterative
var combinationSum = function (candidates, target) {
    candidates.sort((a, b) => a - b);
    let dp = Array(target + 1).fill(null);

    for (let i in dp) {
        let result = [];
        for (let c of candidates) {
            if (i - c === 0) {
                result.push([c]);
            } else if (i - c < 0) {
                break;
            } else {
                let dpRes = dp[i - c];
                dpRes && dpRes.forEach(val => result.push([...val, c]));
            }
        }

        if (result && result.length) {
            result = result.map(v => v.sort((a, b) => a - b)).reduce((a, v) => {
                a[v.join()] = v;
                return a;
            }, {});
            result = Object.values(result);
        }
        dp[i] = result && result.length ? result : null;
    }
    return dp[target] ? dp[target] : [];
}



console.log(combinationSum([2, 3, 6, 7], 7));
console.log(combinationSum([2], 1));

console.log(combinationSumIter([2, 3, 6, 7], 7));
console.log(combinationSumIter([2], 1));