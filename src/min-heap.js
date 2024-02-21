class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    insert(value) {
      this.heap.push(value);
      this._heapifyUp();
    }
  
    extractMin() {
      if (this.heap.length === 0) {
        return null;
      }
  
      const min = this.heap[0];
      const lastElement = this.heap.pop();
  
      if (this.heap.length > 0) {
        this.heap[0] = lastElement;
        this._heapifyDown();
      }
  
      return min;
    }
  
    _heapifyUp() {
      let currentIndex = this.heap.length - 1;
  
      while (currentIndex > 0) {
        const parentIndex = Math.floor((currentIndex - 1) / 2);
        if (this.heap[currentIndex] < this.heap[parentIndex]) {
          [this.heap[currentIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[currentIndex]];
          currentIndex = parentIndex;
        } else {
          break;
        }
      }
    }
  
    _heapifyDown() {
      let currentIndex = 0;
  
      while (true) {
        const leftChildIndex = 2 * currentIndex + 1;
        const rightChildIndex = 2 * currentIndex + 2;
        let minIndex = currentIndex;
  console.log('leftChildIndex', leftChildIndex);
  console.log('rightChildIndex', rightChildIndex);
        if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[minIndex]) {
          minIndex = leftChildIndex;
        }
  
        console.log('left minIndex', minIndex);
        if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[minIndex]) {
          minIndex = rightChildIndex;
        }
  
        console.log('right minIndex', minIndex);
        if (minIndex !== currentIndex) {
          [this.heap[currentIndex], this.heap[minIndex]] = [this.heap[minIndex], this.heap[currentIndex]];
          currentIndex = minIndex;
        } else {
          break;
        }
      }
    }
  }
  
  // Example Usage:
  
  let minHeap = new MinHeap();
  
  // Inserting nodes
  minHeap.insert(5);
  minHeap.insert(3);
  minHeap.insert(7);
  minHeap.insert(2);
  minHeap.insert(4);
  minHeap.insert(6);
  minHeap.insert(8);
  
  // Extracting the minimum
  console.log(minHeap.extractMin()); // Output: 2
  
  // Visualizing the min heap
  console.log(minHeap.heap);
  