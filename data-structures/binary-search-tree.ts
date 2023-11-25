interface NodeProps {
  value: number;
  left: Node | null;
  right: Node | null;
}

class Node {
  value: number;
  left: Node | null;
  right: Node | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  root: Node | null;

  constructor() {
    this.root = null;
  }

  isEmpty(): boolean {
    return this.root === null;
  }

  insert(value: number): void {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root: Node, newNode: Node): void {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  search(root: Node | null, value: number): boolean {
    if (!root) {
      return false;
    }
    if (root.value === value) {
      return true;
    } else if (value < root.value) {
      return this.search(root.left, value);
    } else {
      return this.search(root.right, value);
    }
  }

  min(root: Node): number {
    if (!root.left) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }

  max(root: Node): number {
    if (!root.right) {
      return root.value;
    } else {
      return this.max(root.right);
    }
  }

  delete(value: number): void {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(root: Node | null, value: number): Node | null {
    if (root === null) {
      return root;
    }
    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      }
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }
      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
    return root;
  }

  inOrder(root: Node | null): void {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }

  preOrder(root: Node | null): void {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  postOrder(root: Node | null): void {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }

  levelOrder(): void {
    const queue: Node[] = [];
    if (this.root) {
      queue.push(this.root);
    }
    while (queue.length) {
      let curr = queue.shift()!;
      console.log(curr.value);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }

  height(node: Node | null): number {
    if (!node) {
      return 0;
    } else {
      const leftHeight = this.height(node.left);
      const rightHeight = this.height(node.right);
      return Math.max(leftHeight, rightHeight) + 1;
    }
  }

  printLevel(node: Node | null, level: number): void {
    if (!node) {
      return;
    }
    if (level === 1) {
      console.log(`${node.value} `);
    } else if (level > 1) {
      this.printLevel(node.left, level - 1);
      this.printLevel(node.right, level - 1);
    }
  }

  isBST(node: Node | null, min: number, max: number): boolean {
    if (!node) {
      return true;
    }
    if (node.value < min || node.value > max) {
      return false;
    }
    return (
      this.isBST(node.left, min, node.value) &&
      this.isBST(node.right, node.value, max)
    );
  }
}

// TODO: Implement level order and delete methods

const bst = new BinarySearchTree();
console.log(bst.isEmpty());
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(13);
bst.insert(17);
bst.insert(2);
console.log(bst.search(bst.root, 10));
console.log(bst.search(bst.root, 7));
bst.inOrder(bst.root);
bst.preOrder(bst.root);
bst.postOrder(bst.root);
bst.levelOrder();
bst.printLevel(bst.root, 3);
console.log(bst.min(bst.root!));
console.log(bst.max(bst.root!));
console.log(bst.height(bst.root!));
