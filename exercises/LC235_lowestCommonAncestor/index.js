function lowestCommonAncestor(root, p, q) {
    function lowest(root, p, q) {
        if (p.val == root.val) return p;
        if (q.val == root.val) return q;
        if (p.val < root.val && q.val > root.val) return root;

        if (p.val > root.val) {
            return lowest(root.right, p, q);
        }

        return lowest(root.left, p, q);
    }

    if (p.val > q.val) {
        [p, q] = [q, p];
    }
    return lowest(root, p, q);
}

module.exports = lowestCommonAncestor;