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

    findCommonParent(val1, val2) {
    // 1. If either value is an immediate child of this node, 
    // then THIS node ('this.value') is their closest common parent.
    if ((this.left && (this.left.value === val1 || this.left.value === val2)) ||
        (this.right && (this.right.value === val1 || this.right.value === val2))) {
        return this.value;
    }

    // 2. Otherwise, use the standard BST routing logic:
    // If both values are smaller, move left
    if (val1 < this.value && val2 < this.value) {
        return this.left ? this.left.findCommonParent(val1, val2) : null;
    }
    // If both values are greater, move right
    if (val1 > this.value && val2 > this.value) {
        return this.right ? this.right.findCommonParent(val1, val2) : null;
    }

    // If they split directions, this node is the common parent
    return this.value;
}
}

// --- Testing ---
const elements = ["J", "H", "R", "E", "S", "P", "G", "B", "L", "Y", "I"];
const bSTree = new BSNode(elements[0]);
for (let i = 1; i < elements.length; i++) {
    bSTree.insertNode(elements[i]);
}

console.log(bSTree.findCommonParent("B", "I")); // "H"
console.log(bSTree.findCommonParent("B", "G")); // "E"
console.log(bSTree.findCommonParent("B", "L")); // "J"
console.log(bSTree.findCommonParent("L", "Y")); // "R"
console.log(bSTree.findCommonParent("E", "H")); // "J"