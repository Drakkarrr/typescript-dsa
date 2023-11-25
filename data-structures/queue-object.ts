class Queue<T> {
  private items: Record<number, T>;
  private front: number;
  private rear: number;

  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }

  enqueue(element: T): void {
    this.items[this.rear] = element;
    this.rear++;
  }

  dequeue(): T | undefined {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }

  peek(): T | undefined {
    return this.items[this.front];
  }

  size(): number {
    return this.rear - this.front;
  }

  isEmpty(): boolean {
    return this.rear - this.front === 0;
  }

  print(): void {
    console.log(this.items);
  }
}

const queue = new Queue<number>();
console.log(queue.isEmpty());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.size());
queue.print();
console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue.isEmpty());
queue.print();
