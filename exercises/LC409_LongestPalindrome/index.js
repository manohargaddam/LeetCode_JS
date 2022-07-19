/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    let hash = {};

    for (const c of s) {
        hash[c] = (hash[c] || 0) + 1;
    }

    let lenOfPalin = 0;
    let isOddExist = false;
    for (const k in hash) {
        const len = hash[k];
        if (len % 2 === 1) {
            lenOfPalin += (len - 1);
            isOddExist = true;
        } else {
            lenOfPalin += len;
        }
    }

    return isOddExist ? lenOfPalin + 1 : lenOfPalin;
};