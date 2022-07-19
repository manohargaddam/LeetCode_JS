/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
 var solution = function(isBadVersion) {

    function findbad(start, end) {
        if (start === end) return end;
        if (end - start === 1) return end;

        let middle = start + Math.floor((end- start)/2);
        let middleBad = isBadVersion(middle);
        if (middleBad) {
            return findbad(start, middle - 1);
        }
        return findbad(middle + 1, start);
    }

    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        return findbad(0, n - 1) + 1;
    };
};