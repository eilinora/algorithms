class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    insert(value) {
      this.root = this._insert(this.root, value);
    }
  
    _insert(node, value) {
      if (node === null) {
        return new TreeNode(value);
      }
  
      if (value < node.value) {
        node.left = this._insert(node.left, value);
      } else if (value > node.value) {
        node.right = this._insert(node.right, value);
      }
  
      return node;
    }
  
    // Additional methods for searching, traversal, etc. can be added here.
  }
  
  // Example Usage:
  
  let bst = new BinarySearchTree();
  
  // Inserting nodes
  bst.insert(5);
  bst.insert(3);
  bst.insert(7);
  bst.insert(2);
  bst.insert(4);
  bst.insert(6);
  bst.insert(8);
  
  // Visualizing the tree
  console.log(bst.root);
  