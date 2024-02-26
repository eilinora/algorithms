class MinHeap {
    private _heap: number[] = [];

    private _bubbleDown(n: number, value: number): void {
        // should swap element down to correct position in tree
        if (n >= this._heap.length-1) {
            return;
        }
        // navigate forward 
        // left 2*n + 1;
        // right 2*n + 2;
        const leftIndex = 2*n+1;
        const rightIndex = 2*n+2;

        // if the value is larger than the left side
        if (leftIndex < this._heap.length -1 && value > this._heap[leftIndex]) {
            [this._heap[n], this._heap[leftIndex]] = [this._heap[leftIndex], this._heap[n]];
            this._bubbleDown(leftIndex, value);
            return;
        }

        if (rightIndex < this._heap.length -1 &&  value > this._heap[rightIndex]) {
            [this._heap[n], this._heap[rightIndex]] = [this._heap[rightIndex], this._heap[n]];
            this._bubbleDown(rightIndex, value);
            return;
        }
    }

    private _bubbleUp(n: number, value: number): void {
        // should swap element up to correct position in tree
        if (n < 0) {
            return;
        }

        // getting my parent
        const parentN = Math.floor((n-1) / 2);
        if (parentN < 0) {
            return;
        }

        // check to see if we should swap the parent
        if (value < this._heap[parentN]) {
            [this._heap[n], this._heap[parentN]] = [this._heap[parentN], this._heap[n]];
            this._bubbleUp(parentN, value);
        }
    }

    public insert(value: number): void {
        // add value to end of tree
        this._heap.push(value);

        // bubble that value up through its parents until its in the correct position
        this._bubbleUp(this._heap.length-1, value);
    }

    public extractMin(): number {
        const v = this._heap.shift();
        const e = this._heap.pop();
        
        this._heap.unshift(e);

        this._bubbleDown(0, e);
        return v;
    }

    // Your thinking in Nodes and not taking advantage of the fact that its an array!
    // private _remove(n: number, value: number): boolean {
    //     const leftIndex = 2*n+1;
    //     const rightIndex = 2*n+2;

    //     if (this._heap[n] === value) {
    //         [this._heap[n], this._heap[this._heap.length-1]] = [this._heap[this._heap.length-1], this._heap[n]];
    //         this._heap.pop();

    //         this._bubbleDown(n, this._heap[n]);
    //         return true;
    //     }

    //     if (leftIndex < this._heap.length -1) {
    //         this._remove(leftIndex, value);
    //     }

    //     if (rightIndex < this._heap.length -1) {
    //         this._remove(rightIndex, value);
    //     }

    //     return false;
    // }

    public remove(value: number): boolean {
        const indexOfItem = this._heap.indexOf(value);

        // value isn't in the array
        if (indexOfItem === -1) {
            return false;
        }

        this._heap[indexOfItem] = this._heap.pop();
        this._bubbleDown(indexOfItem, this._heap[indexOfItem]);
        return true;

        // @see comment above _remove...
        // if (value == null || this._heap.length === 0) {
        //     return false;
        // }

        // if (!this.contains(value)) {
        //     return false;
        // }

        // return this._remove(0, value);
    }

    public contains (value: number): boolean {
        return this._heap.includes(value);
    }

    public get root(): number {
        return this._heap[0];
    }

    public get size (): number {
        return this._heap.length;
    }

    public set heap (values: number[]) {
        this._heap = values;
    }

    public get heap(): number[] {
        return this._heap;
    }
}


// have to do this to avoid block declaration errors
function createMinHeap () {
    const minHeap = new MinHeap();
    minHeap.insert(2);
    minHeap.insert(5);
    minHeap.insert(6);
    minHeap.insert(20);
    minHeap.insert(1);
    minHeap.insert(12);
    minHeap.insert(30);
    minHeap.insert(8);
    minHeap.insert(0);
    console.log('pre extract', minHeap.heap);

    // const extract1 = minHeap.extractMin();
    // console.log('extract', extract1);
    // console.log(minHeap.heap);

    // const extract2 = minHeap.extractMin();
    // console.log('extract', extract2);
    // console.log(minHeap.heap);
    
    // console.log('is 20 found?', minHeap.contains(20));
    // console.log('is 10 found?', minHeap.contains(10));
    console.log('removed', minHeap.remove(12));
    console.log(minHeap.heap);
    // console.log('removed 2', minHeap.remove(2));
    // console.log(minHeap.heap);
}

createMinHeap();
