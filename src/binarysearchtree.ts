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
    private _size: number = 0;

    private _insert(node: BSTNode<T>, value: T): boolean {
        // Travese the tree and either add the value to the left or right side based on value
        // if the value is less than the root, than add left, otherwise go right,
        // and keep traversing til we find an empty spot
        if (value < node.value) {
            if (node.left === null) {
                node.left = new BinaryTreeNode<T>(null, null, value);
                this._size++;
                return true;
            }
            return this._insert(node.left, value);
        }

        if (node.right === null) {
            node.right = new BinaryTreeNode<T>(null, null, value);
            this._size++;
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

    private _digLeft(node: BSTNode<T>): BSTNode<T> {
        if (node.left === null) {
            return node;
        }

        this._digLeft(node.left);
    }

    private _remove(node: BSTNode<T>, value: T): boolean {
        if (node.value === value) {
            // if the node has only a left or right child than just do simple replace
            if (node.left === null && node.right !== null) {
                node.value = node.right.value;
                node.left = node.right.left;
                node.right = node.right.right;
                this._size--;
                return true;
            }

            if (node.right === null && node.left !== null) {
                node.value = node.left.value;
                node.left = node.left.left;
                node.right = node.right.right;
                this._size--;
                return true;
            }

            // if the node has both than find the smallest node on right child node tree
            const smallest = this._digLeft(node.right);
            // the smallest right children need to now be attached to its parent
            const tmp = smallest.value;
            smallest.value = smallest.right.value;
            smallest.left = smallest.right.left;
            smallest.right = smallest.right.right;

            node.value = tmp;
            this._size--;
            return true;
        }

        // go left cause the value is less than the node we are at
        if (value < node.value) {
            this._remove(node.left, value);
        }

        // otherwise go right cause the node is greater than the value we are seaking
        return this._remove(node.right, value);
    }

    public remove(value: T): boolean {
        if (this._root === null) {
            return false;
        }

        if (!this.contains(value)) {
            return false;
        }

        return this._remove(this._root, value);
    }

    private _contains(node: BSTNode<T>, value) {
        if (node === null) {
            return false;
        }

        if (value === node.value) {
            return true;
        }

        // go left cause the value is less than the node we are at
        if (value < node.value) {
            this._contains(node.left, value);
        }

        // otherwise go right cause the node is greater than the value we are seaking
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

    public get size(): number {
        return this._size;
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
    bst.insert(12);
    bst.insert(30);
    bst.insert(8);
    bst.inOrderPrint();
    console.log('size', bst.size);
    console.log('is 20 found?', bst.contains(20));
    console.log('is 10 found?', bst.contains(10));
    console.log('removed 5', bst.remove(5));
    bst.inOrderPrint();
    console.log('size', bst.size);
    console.log('removed 2', bst.remove(2));
    bst.inOrderPrint();
    console.log('size', bst.size);
}

createBST();
