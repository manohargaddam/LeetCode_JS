function isAnagram(s, t) {

    if (s.length != t.length) {
        return false;
    }

    let firsthash = {};

    for (const val of s) {
        firsthash[val] = (firsthash[val] || 0) + 1;
    }

    for (const val of t) {
        if (firsthash[val]) {
            firsthash[val] -= 1;
        } else {
            return false;
        }
    }
    return true;
}

module.exports = isAnagram;
