type BSTNode<T> = BinaryTreeNode<T> | null;

class BinaryTreeNode<T> {
    public value: T;
    public left: BSTNode<T> = null;
    public right: BSTNode<T> = null;
    constructor(left: BSTNode<T>, right: BSTNode<T>, value: T) {
        this.left = left;
        this.right = right;
        this.value = value;
    }
}
class BinarySearchTree<T> {
    private _root: BSTNode<T> = null;
    private _size = 0;

    private _insert(node: BSTNode<T>, value: T): boolean {
        // Travese the tree and either add the value to the left or right side based on value
        // if the value is less than the root, than add left, otherwise go right,
        // and keep traversing til we find an empty spot
        if (value < node.value) {
            if (node.left === null) {
                node.left = new BinaryTreeNode<T>(null, null, value);
                return true;
            }
            return this._insert(node.left, value);
        }

        if (node.right === null) {
            node.right = new BinaryTreeNode<T>(null, null, value);
            return true;
        }
        return this._insert(node.right, value);
    }

    // Adds new nodes to the BST that satisfy the invariant rules of a BST
    public insert(value: T): boolean {
        // The tree is being initialized therefore this newly added element is the root node
        if (this._root === null) {
            this._root = new BinaryTreeNode<T>(null, null, value);
            return true;
        }

        if (this.contains(value)) {
            throw new Error(`Binary Search Tree already contains value ${value}`);
        }

        return this._insert(this.root, value);
    }

    public remove(value: T): boolean {
        // add logic to remove a node
        return false;
    }

    private _contains(node: BSTNode<T>, value) {
        if (node === null) {
            return false;
        }

        if (value === node.value) {
            return true;
        }

        // go left cause the value we want is greater than the current node
        if (value < node.value) {
            this._contains(node.left, value);
        }

        return this._contains(node.right, value);
    }

    public contains(value: T): boolean {
        // should check the tree to see if value exists in
        if (this._root.value === null || value === null) {
            return false;
        }

        return this._contains(this._root, value);
    }

    public get root(): BSTNode<T> {
        return this._root;
    }

    private _inOrderPrint(node: BSTNode<T>, list: T[]) {
        if (node === null) {
            return;
        }
        this._inOrderPrint(node.left, list);
        this.print(node.value, list);
        this._inOrderPrint(node.right, list);
        return list;
    }

    public inOrderPrint() {
        if (this._root === null) {
            return;
        }

        const ordered = this._inOrderPrint(this._root, []);
        console.log(ordered);
    }

    public print(value: T, list: T[]) {
        list.push(value);
    }

}

// have to do this to avoid block declaration errors
function createBST () {
    const bst = new BinarySearchTree<number>();
    bst.insert(2);
    bst.insert(5);
    bst.insert(6);
    bst.insert(20);
    bst.insert(3);
    bst.inOrderPrint();
    console.log('is 20 found?', bst.contains(20));
    console.log('is 10 found?', bst.contains(10));
}

createBST();
