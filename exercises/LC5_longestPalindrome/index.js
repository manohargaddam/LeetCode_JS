//Given a string s, find the longest palindromic substring in s
// --- Example
// longestPalindrome("cbbd") --> "bb"
// longestPalindrome("abba") --> "abba"
// longestPalindrome("a") --> "a"

function longestPalindrome(s) {

    let longestIndex = 0;
    let longest = 1;

    function expandAround(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        let palinLength = right - left - 1;
        if (palinLength > longest) {
            longestIndex = left + 1;
            longest = palinLength;
        }
    }
    for (let i = 0; i < s.length; i++) {
        expandAround(i - 1, i + 1);
        expandAround(i, i + 1);
    }
    return s.substring(longestIndex, longestIndex + longest);
}

module.exports = longestPalindrome;
