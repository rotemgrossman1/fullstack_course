class BSNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insertNode(value) {
        if (value === undefined) {
            this.value = undefined; 
            return;
        }
        if (this.value === undefined) {
            this.value = value;
            return;
        }
        if (value < this.value) {
            if (this.left === null) {
                this.left = new BSNode(value);
            } else {
                this.left.insertNode(value);
            }
        } else if (value > this.value) {
            if (this.right === null) {
                this.right = new BSNode(value);
            } else {
                this.right.insertNode(value);
            }
        }
    }

    // Helper to find the maximum value in a subtree
    _findMax(node) {
        while (node.right !== null) {
            node = node.right;
        }
        return node.value;
    }

    // Exercise 3: Removing a Node
    // Note: Instead of passing a parent reference down, this pattern 
    // updates the parents by returning the modified node back up.
    removeNode(node, value) {
        if (node === null) return null;

        // 1. Search for the node
        if (value < node.value) {
            node.left = this.removeNode(node.left, value);
            return node;
        } else if (value > node.value) {
            node.right = this.removeNode(node.right, value);
            return node;
        } else {
            // 2. Node found! Handle the 3 scenarios:
            
            // Scenario 1: No children (Leaf Node)
            if (node.left === null && node.right === null) {
                return null; // Parent will set its link to null
            }

            // Scenario 2: One child
            if (node.left === null) {
                return node.right; // Right child replaces current node
            }
            if (node.right === null) {
                return node.left;  // Left child replaces current node
            }

            // Scenario 3: Two children
            // Find the maximum value to the left
            const maxLeftValue = this._findMax(node.left);
            // Replace current node's value with it
            node.value = maxLeftValue;
            // Delete the duplicate value from the left subtree
            node.left = this.removeNode(node.left, maxLeftValue);
            
            return node;
        }
    }
}

// --- Testing ---
const numbers = [8, 9, 12, 3, 5, 1, 11, 4];

// Test Node with One Child (Deleting 9)
let nodeWithOneChild = new BSNode();
numbers.forEach(n => nodeWithOneChild.insertNode(n));
console.log("Tree after removing 9:");
console.log(nodeWithOneChild.removeNode(nodeWithOneChild, 9)); 

// Test Node with Two Children (Deleting root 8)
let nodeWithTwoChildren = new BSNode();
numbers.forEach(n => nodeWithTwoChildren.insertNode(n));
console.log("\nTree after removing 8:");
console.log(nodeWithTwoChildren.removeNode(nodeWithTwoChildren, 8));