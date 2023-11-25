class CircularQueue {
  private items: (number | null)[];
  private rear: number;
  private front: number;
  private currentLength: number;
  private capacity: number;

  constructor(capacity: number) {
    this.items = new Array(capacity);
    this.rear = -1;
    this.front = -1;
    this.currentLength = 0;
    this.capacity = capacity;
  }

  isFull(): boolean {
    return this.currentLength === this.capacity;
  }

  isEmpty(): boolean {
    return this.currentLength === 0;
  }

  size(): number {
    return this.currentLength;
  }

  enqueue(item: number): void {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = item;
      this.currentLength += 1;
      if (this.front === -1) {
        this.front = this.rear;
      }
    }
  }

  dequeue(): number | null {
    if (this.isEmpty()) {
      return null;
    }
    const item = this.items[this.front]!;
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.currentLength -= 1;
    if (this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }
    return item;
  }

  peek(): number | null {
    if (!this.isEmpty()) {
      return this.items[this.front]!;
    }
    return null;
  }

  print(): void {
    if (this.isEmpty()) {
      console.log('Queue is empty');
    } else {
      let i = this.front;
      let str = '';
      do {
        str += this.items[i] + ' ';
        i = (i + 1) % this.capacity;
      } while (i !== (this.rear + 1) % this.capacity);
      console.log(str.trim());
    }
  }
}

const queue = new CircularQueue(5);
console.log(queue.isEmpty());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
console.log(queue.size());
queue.print();
console.log(queue.isFull());
console.log(queue.dequeue());
console.log(queue.peek());
queue.print();
queue.enqueue(60);
queue.print();
