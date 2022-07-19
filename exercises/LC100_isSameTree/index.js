function isSameTree(p, q) {
    if (!p && !q) return true;
    if(p && !q) return false;
    if (!p && q) return false;
    if(p.val != q.val) return false;
    
    let leftSame = isSameTree(p.left, q.left);
    if (!leftSame) return false;
    let rightSame = isSameTree(p.right, q.right);
    return rightSame;
}

module.exports = isSameTree;
