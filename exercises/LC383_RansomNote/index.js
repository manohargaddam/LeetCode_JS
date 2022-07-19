/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function(ransomNote, magazine) {
    let hash = {};

    for (const ch of magazine) {
        hash[ch] = (hash[ch] || 0) + 1;
    }

    for (const r of ransomNote) {
        let count = hash[r];
        if (!count) {
            return false;
        }
        hash[r] -= 1;
    }

    return true;
};