/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function(root, p, q) {
    let lca = function (node, p, q) {
        if (!node) return [false, false, null];
        
        let result = [false, false, null];
        let l = lca(node.left, p, q);
        if (l[2] != null) return l
        let r = lca(node.right, p, q);
        if (r[2] != null) return r

        result[0] = l[0] || r[0];
        result[1] = l[1] || r[1];

        if (node.val === p.val)
            result[0] = true;
        if(node.val === q.val)
            result[1] = true;

        if (result[0] && result[1]) {
            result[2] = node;
        }
        return result;
    }

    let res = lca(root, p, q);
    return res[2];
};