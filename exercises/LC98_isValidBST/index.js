function isValidBST(root) {

    function isValid(node, min, max) {
        if (!node) return true;

        if ((min != null && node.val <= min) || (max != null && node.val >= max)) return false;

        let left = isValid(node.left, min, node.val);
        if (!left) return false;
        let right = isValid(node.right, node.val, max);
        return right;
    }

    return isValid(root, null, null);
}

module.exports = isValidBST;
