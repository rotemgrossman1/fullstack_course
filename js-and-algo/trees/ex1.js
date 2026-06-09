class BSNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insertNode(value) {
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

    // Exercise 1: Finding a Node
    findNode(value) {
        if (value === this.value) {
            return true;
        }
        
        if (value < this.value) {
            // If there's nowhere left to go, it's not in the tree
            if (this.left === null) return false;
            // Crucial: We must return the result of the recursive call
            return this.left.findNode(value);
        } else {
            if (this.right === null) return false;
            return this.right.findNode(value);
        }
    }
}

// --- Testing ---
const letters = ["H", "E", "S", "G", "L", "Y", "I"];
const bSTree = new BSNode(letters[0]);
for (let i = 1; i < letters.length; i++) {
    bSTree.insertNode(letters[i]);
}

console.log(bSTree.findNode("H")); // true
console.log(bSTree.findNode("G")); // true
console.log(bSTree.findNode("Z")); // false
console.log(bSTree.findNode("F")); // false
console.log(bSTree.findNode("y")); // false