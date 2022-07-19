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
 * @return {boolean}
 */
 var isBalanced = function(root) {
    let balanced = function(node) {
        if(!node) return 0;
        if(!node.left && !node.right) return 1;
        
        let leftHeight = balanced(node.left);
        if(leftHeight === -1) return -1;
        let rightHeight = balanced(node.right);
        if(rightHeight === -1) return -1;
        
        let diff = Math.abs(leftHeight - rightHeight);
        if(diff > 1) return -1;
        return Math.max(leftHeight, rightHeight) + 1;
    }
    
    let result = balanced(root);
    console.log(result);
    return result === -1 ? false : true;
};



// driver code


let root;
class Node {
    constructor(data) {
        this.left = null;
        this.right = null;
        this.data = data;
    }
}

// Function to insert nodes in level order
function insertLevelOrder(arr, i) {
    let root = null;
    // Base case for recursion
    if (i < arr.length && arr[i] != null) {
        root = new Node(arr[i]);

        // insert left child
        root.left = insertLevelOrder(arr, 2 * i + 1);

        // insert right child
        root.right = insertLevelOrder(arr, 2 * i + 2);
    }
    return root;
}

// Function to print tree nodes in InOrder fashion
function inOrder(root) {
    if (root != null) {
        inOrder(root.left);
        console.log(root.data + " ");
        inOrder(root.right);
    }
}

let arr = [1,2,2,3,3,null,null,4,4];
root = insertLevelOrder(arr, 0);

console.log(inOrder(root))