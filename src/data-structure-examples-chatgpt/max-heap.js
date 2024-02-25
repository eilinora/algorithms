class MaxHeapGPT {
    constructor() {
      this.heap = [];
    }
  
    insert(value) {
      this.heap.push(value);
      this._heapifyUp();
    }
  
    extractMax() {
      if (this.heap.length === 0) {
        return null;
      }
  
      const max = this.heap[0];
      const lastElement = this.heap.pop();
  
      if (this.heap.length > 0) {
        this.heap[0] = lastElement;
        this._heapifyDown();
      }
  
      return max;
    }
  
    _heapifyUp() {
      let currentIndex = this.heap.length - 1;
  
      while (currentIndex > 0) {
        const parentIndex = Math.floor((currentIndex - 1) / 2);
        if (this.heap[currentIndex] > this.heap[parentIndex]) {
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
        let maxIndex = currentIndex;
  
        if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] > this.heap[maxIndex]) {
          maxIndex = leftChildIndex;
        }
  
        if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[maxIndex]) {
          maxIndex = rightChildIndex;
        }
  
        if (maxIndex !== currentIndex) {
          [this.heap[currentIndex], this.heap[maxIndex]] = [this.heap[maxIndex], this.heap[currentIndex]];
          currentIndex = maxIndex;
        } else {
          break;
        }
      }
    }
  }
  
  // Example Usage:
  
  let maxHeap = new MaxHeap();
  
  // Inserting nodes
  maxHeap.insert(5);
  maxHeap.insert(3);
  maxHeap.insert(7);
  maxHeap.insert(2);
  maxHeap.insert(4);
  maxHeap.insert(6);
  maxHeap.insert(8);
  
  // Extracting the maximum
  console.log(maxHeap.extractMax()); // Output: 8
  
  // Visualizing the max heap
  console.log(maxHeap.heap);
  