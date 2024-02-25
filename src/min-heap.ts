class HeapNode {
    public left: HeapNode;
    public right: HeapNode;
    public value: number;
    constructor(left: HeapNode, right: HeapNode, value: number) {
        this.left = left;
        this.right = right;
        this.value = value;
    }
}

class MinHeap {
    private _root: HeapNode = null;
    private _size: number = 0;

    public insert(value: number): boolean {
        return false;
    }

    public extractMin(): number {
        return 0;
    }

    public remove(value: number): boolean {
        return false;
    }

    public contains (value: number): boolean {
        return false;
    }

    public inOrderPrint(): void {
        // do it
    }

    public get root(): HeapNode {
        return this._root;
    }

    public get size (): number {
        return this._size;
    }
}


// have to do this to avoid block declaration errors
function createMinHeap () {
    const minHeap = new MinHeap();
    minHeap.insert(2);
    minHeap.insert(5);
    minHeap.insert(6);
    minHeap.insert(20);
    minHeap.insert(3);
    minHeap.insert(12);
    minHeap.insert(30);
    minHeap.insert(8);
    minHeap.inOrderPrint();
    console.log('size', minHeap.size);
    // console.log('is 20 found?', minHeap.contains(20));
    // console.log('is 10 found?', minHeap.contains(10));
    // console.log('removed 5', minHeap.remove(5));
    // minHeap.inOrderPrint();
    // console.log('size', minHeap.size);
    // console.log('removed 2', minHeap.remove(2));
    // minHeap.inOrderPrint();
    // console.log('size', minHeap.size);
}

createMinHeap();
