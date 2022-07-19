/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let stack = [];
    let ops = {
        "+": (v1, v2) => (+v1) + (+v2),
        "*": (v1, v2) => (+v1) * (+v2),
        "/": (v1, v2) => { let res = (+v1) / (+v2); return res < 0 ? Math.ceil(res) : Math.floor(res) },
        "-": (v1, v2) => (+v1) - (+v2)
    }

    for (let tk of tokens) {
        if (ops[tk]) {
            let val1 = stack.pop();
            let val2 = stack.pop();

            let res = ops[tk](val2, val1);

            stack.push(res);
        } else {
            stack.push(tk);
        }
    }

    return stack.pop();
};

console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]));