const isValid = s => {
    var starts = { "(": ")", "{": "}", "[": "]" };
    var stack = [];

    for (const val of s) {
        if (starts[val]) {
            stack.push(val);
        } else if (stack.length === 0) {
            return false;
        } else if (starts[stack.pop()] !== val) {
            return false;
        }
    }
    return stack.length === 0;
};

module.exports = isValid;
