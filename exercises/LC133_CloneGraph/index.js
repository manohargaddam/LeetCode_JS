
// Definition for a Node.
function Node(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
};


/**
 * @param {Node} node
 * @return {Node}
 */
 var cloneGraph = function (node) {
    let map = {};
    if(!node) return node;

    function clone(node, map) {
        if (map[node.val]) return map[node.val];

        let newNode = new Node(node.val, []);

        map[node.val] = newNode;
        newNode.neighbors = node.neighbors.map(n => clone(n, map));
        map[node.val] = newNode;
        return newNode;
    }

    return clone(node, map);
};

// drive code

let node1 = new Node(1, []);
let node2 = new Node(2, []);
let node3 = new Node(3, []);
let node4 = new Node(4, []);

node1.neighbors = [node2, node4];
node2.neighbors = [node1, node3];
node3.neighbors = [node2, node4];
node4.neighbors = [node1, node3];

cloneGraph(node1);