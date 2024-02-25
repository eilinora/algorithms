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

    public contains(value: T): boolean {
        // should check the tree to see if value exists in
        return false;
    }

    public get root(): BSTNode<T> {
        return this._root;
    }

    private _inOrderPrint(node: BSTNode<T>) {
        if (node === null) {
            return;
        }
        this._inOrderPrint(node.left);
        this.print(node.value);
        this._inOrderPrint(node.right);
    }

    public inOrderPrint() {
        if (this._root === null) {
            return;
        }

        this._inOrderPrint(this._root);
    }

    public print(value: T) {
        console.log(value);
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
}

createBST();
