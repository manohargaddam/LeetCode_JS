function levelOrder(root) {
    function traverse(node, level, memo) {
        if (!node) return;
        memo[level] = memo[level] || [];
        memo[level].push(node.val);
     
        traverse(node.left, level + 1, memo);
        traverse(node.right, level + 1, memo);
    }
    
    let level = 0;
    let memo = [];
    traverse(root, level, memo);
    return memo;
}

module.exports = levelOrder;
