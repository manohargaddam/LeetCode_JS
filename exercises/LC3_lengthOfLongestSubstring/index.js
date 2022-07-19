// Given a string, return the length of the longest substring without
// repeating characters.
// --- Example
// lengthOfLongestSubstring("abcabcbb") --> 3 since length of "abc"
// lengthOfLongestSubstring("bbbbb") --> 1 since length of "b"

function lengthOfLongestSubstring(s) {
    let start = 0;
    let hash = {};
    let longest = 0;

    for (let i = 0; i < s.length; i++) {
        let ind = hash[endChar];
        if (ind >= start) {
            start = ind + 1;
        }
        longest = Math.max(longest, i - start + 1);
        hash[s[i]] = i;
    }
    return longest;
}

module.exports = lengthOfLongestSubstring;
