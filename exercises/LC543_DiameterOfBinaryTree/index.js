/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var diameterOfBinaryTree = function(root) {
    let depth = function (root) {
        if (!root) return [0,0];

        let [lefth, leftmax] = depth(root.left);
        let [righth, rightmax] = depth(root.right);

        let localbreadth = lefth + righth;
        
        return [Math.max(lefth, righth) + 1, Math.max(localbreadth, leftmax, rightmax)];
    }
    
    let [height, maxbreadth] = depth(root);

    return maxbreadth;
};