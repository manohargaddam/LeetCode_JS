const containsDuplicate = nums => {
    let hash = {};
    for (const val of nums) {
        if (hash[val]) return true;
        hash[val] = true;
    }
    return false;
};

module.exports = containsDuplicate;
