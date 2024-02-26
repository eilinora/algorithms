class MinHeapChatGPT {
    constructor() {
      this.heap = [];
    }
  
    insert(value) {
      console.log('--- INSER VALUE', value)
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
        console.log('lastElement', lastElement);
        this._heapifyDown();
      }
  
      return min;
    }
  
    _heapifyUp() {
      let currentIndex = this.heap.length - 1;

      while (currentIndex > 0) {
        const parentIndex = Math.floor((currentIndex - 1) / 2);
        console.log(this.heap);
        console.log('-- loop - parentIndex', parentIndex, 'curIndex', currentIndex);
        if (this.heap[currentIndex] < this.heap[parentIndex]) {
          console.log('to be swapped', this.heap[currentIndex], this.heap[parentIndex]);
          [this.heap[currentIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[currentIndex]];
          console.log('swap', this.heap[currentIndex], this.heap[parentIndex]);
          currentIndex = parentIndex;
          console.log(this.heap);
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
  console.log('this.heap[leftChildIndex]', this.heap[leftChildIndex]);
  console.log('this.heap[minIndex]', this.heap[minIndex]);
  console.log('this.heap[rightChildIndex]', this.heap[rightChildIndex]);
        if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[minIndex]) {
          console.log('left');
          minIndex = leftChildIndex;
        }
  
        console.log('left minIndex', minIndex);
        console.log('this.heap[rightChildIndex]', this.heap[rightChildIndex]);
        console.log('this.heap[minIndex]', this.heap[minIndex]);
        if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[minIndex]) {
          console.log('right');
          minIndex = rightChildIndex;
        }
  
        console.log('right minIndex', minIndex);
        if (minIndex !== currentIndex) {
          console.log('push down', this.heap[currentIndex], this.heap[minIndex]);
          [this.heap[currentIndex], this.heap[minIndex]] = [this.heap[minIndex], this.heap[currentIndex]];
          console.log('result down', this.heap[currentIndex], this.heap[minIndex]);
          currentIndex = minIndex;
          console.log('-- currentIndex', currentIndex);
        } else {
          break;
        }
      }
    }
  }
  
  // Example Usage:
  
  let minHeap = new MinHeapChatGPT();
  
  // Inserting nodes
  minHeap.insert(2);
  minHeap.insert(5);
  minHeap.insert(6);
  minHeap.insert(20);
  minHeap.insert(1);
  console.log(minHeap.heap);
  minHeap.insert(12);
  minHeap.insert(30);
  minHeap.insert(8);
  minHeap.insert(0);
  console.log(minHeap.heap);
  
  // Extracting the minimum
  // console.log(minHeap.extractMin()); // Output: 2
  
  // Visualizing the min heap
  console.log(minHeap.heap);
  